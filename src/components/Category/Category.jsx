import React from "react";
import { useSelector } from "react-redux";
import { selectFilter } from "../../redux/filter/selectors";

import ProductList from "../ProductList/ProductList";

const Category = () => {
  const selectCategory = useSelector(selectFilter);

  const param = {
    category: selectCategory,
  };

  return (
    <>
      <ProductList param={param} />
    </>
  );
};

export default Category;
