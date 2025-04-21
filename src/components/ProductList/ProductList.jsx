import React, { useEffect, useState } from "react";
import { Container, List } from "./productList.styled";
import { Loader } from "../Loader/Loader";

import Pagination from "../Pagination/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import {
  selectErrorByParams,
  selectLoadingByParams,
  selectPaginationByParams,
  selectProductsByParams,
} from "../../redux/products/productsSelectors";
import { fetchProducts } from "../../redux/products/operation";
import { useMedia } from "../../utils/hooks/useMedia";
import ProductItem from "../ProductItem/ProductItem";

const ProductList = ({ param, limit = 3 }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const { screenType } = useMedia();

  // Перевірка наявності номера сторінки в адресній строці
  const pageNumber = !isNaN(Number(location.search.split("=")[1]))
    ? Number(location.search.split("=")[1])
    : 1;

  // Локальний стан для фільтрів
  const [params, setParams] = useState({
    page: pageNumber,
    limit: limit,
    ...param,
  });

  const items = useSelector((state) => selectProductsByParams(state, params));
  // console.log("items", items); // items:[...]
  const pagination = useSelector((state) =>
    selectPaginationByParams(state, params)
  );
  // console.log("pagination", pagination); //{ totalItems: 11, totalPages: 4, currentPage: 1 }
  const loading = useSelector((state) => selectLoadingByParams(state, params));
  // console.log("loading", loading); // loading: false
  const error = useSelector((state) => selectErrorByParams(state, params));
  // console.log("error", error); // error: null

  //   // Запит на сервер
  useEffect(() => {
    dispatch(fetchProducts(params));
  }, [params, dispatch]);

  // Локальний стан для сторінки
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    // const filterParam = searchParams.get("filter");
    const pageParam = searchParams.get("page");

    // if (filterParam) {
    //   setFilter(filterParam);
    // }
    if (pageParam) {
      setParams((prev) => ({ ...prev, page: pageParam }));
      // setCurrentPage(parseInt(pageParam));
    } else {
      setParams((prev) => ({ ...prev, page: 1 }));
    }
  }, [location.search]);

  // реагуємо на зміну зовнішніх параметрів (бренд, фільтр)
  useEffect(() => {
    setParams((prev) => ({
      ...prev,
      ...param,
    }));
  }, [param]);

  // Функція для зміни сторінки в адресній строці
  const navigateToPage = (page) => {
    const searchParams = new URLSearchParams(location.search);
    // searchParams.set("filter", value);
    searchParams.set("page", page);

    const newSearch = searchParams.toString();
    const targetPath =
      location.pathname === "/search"
        ? `${location.pathname}?${newSearch}`
        : `?${newSearch}`;

    navigate(targetPath);
  };
  // Функція зміни сторінки
  const handlePageChange = ({ selected }) => {
    setParams((prev) => ({ ...prev, page: selected + 1 }));
    navigateToPage(selected + 1);
  };

  return (
    <>
      {/* список продуктів */}
      <Container>
        {loading ? (
          <Loader />
        ) : (
          <List>
            {items.length > 0
              ? items.map((item) => (
                  <ProductItem key={item.id} product={item} />
                ))
              : (loading || error) && <p>Товари не знайдено</p>}
          </List>
          //   <ProductList items={items} loading={loading} error={error} />
        )}
      </Container>
      {/* пагінація */}
      {!loading && pagination.totalPages > 1 && (
        <Pagination
          currentPage={pagination.currentPage}
          totalPages={pagination.totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </>
  );
};

export default ProductList;
