import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { PiShoppingCartFill, PiShoppingCartLight } from "react-icons/pi";

import { useMedia } from "../../utils/hooks/useMedia";
import Logo from "../Logo/Logo";
import Menu from "../Menu/Menu";
import SearchForm from "../SearchForm/SearchForm";
import MobileMenu from "../Menu/MobileMenu/MobileMenu";
import AuthModal from "../Login/AuthModal/AuthModal";
import User from "../Login/User/User";
import {
  BasketFullWrap,
  BasketIcon,
  BasketIconFull,
  BasketWrap,
  CartQuantitySpan,
  CartQuantityWrap,
  CenterWrap,
  Container,
  ContainerHeader,
  ContainerMobile,
  HeaderLayout,
  HeaderTop,
  HeaderWrap,
  LineLink,
  LineWrap,
  LoginShipingThumb,
  MenuBottom,
  MenuWrap,
  Schedule,
  SearchIcon,
  TopWrap,
  UserName,
  Wrap,
  WrapTop,
} from "./header.styled";

const Header = () => {
  const { isMobileScreen } = useMedia();
  const { pathname } = useLocation();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [userName, setUserName] = useState("");
  const [cartItems, setCartItems] = useState([]);

  // Перевірка логіну
  useEffect(() => {
    const token = localStorage.getItem("token");
    const name = localStorage.getItem("firstName");
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    setIsLogin(!!token);
    setUserName(name || "");
    setCartItems(cart);
  }, []);
  console.log(isLogin);
  

  const handleSearchClick = () => setIsSearchOpen((prev) => !prev);
  const handleUserIconClick = () => {
    if (!isLogin) setShowAuthModal(true);
  };

  return (
    <>
      {!isMobileScreen ? (
        <ContainerHeader>
          <LineWrap>
            <LineLink
              href="https://t.me/+Eejgotzs-ktiMTIy"
              target="_blank"
              rel="noreferrer"
            >
              Підписуйся на наш телеграм канал, щоб дізнатись першим про новинки
              та поповнення асортименту
            </LineLink>
          </LineWrap>
          <Container>
            <HeaderTop>
              <HeaderWrap>
                <HeaderLayout>
                  <WrapTop>
                    <Logo />
                  </WrapTop>
                  <WrapTop>
                    <Wrap>
                      <LoginShipingThumb>
                        <SearchIcon onClick={handleSearchClick} />
                        <div style={{ display: "flex", flexDirection: "column" }}>
                          {isLogin && <UserName>{userName}</UserName>}
                          <div onClick={handleUserIconClick}>
                            <User />
                          </div>
                        </div>
                        <div style={{ position: "relative" }}>
                          {cartItems.length > 0 ? (
                            <BasketFullWrap>
                              <CartQuantityWrap>
                                <CartQuantitySpan>{cartItems.length}</CartQuantitySpan>
                              </CartQuantityWrap>
                              <PiShoppingCartFill />
                            </BasketFullWrap>
                          ) : (
                            <BasketIcon>
                              <PiShoppingCartLight />
                            </BasketIcon>
                          )}
                        </div>
                      </LoginShipingThumb>
                    </Wrap>
                  </WrapTop>
                </HeaderLayout>
              </HeaderWrap>
            </HeaderTop>
            <MenuBottom $pathname={pathname}>
              <MenuWrap>
                <Menu />
              </MenuWrap>
              <SearchForm isSearchOpen={isSearchOpen} />
            </MenuBottom>
          </Container>
        </ContainerHeader>
      ) : (
        <ContainerMobile>
          <TopWrap>
            <Schedule
              href="https://t.me/+Eejgotzs-ktiMTIy"
              target="_blank"
              rel="noreferrer"
            >
              Підписуйся на наш телеграм канал
            </Schedule>
          </TopWrap>
          <CenterWrap>
            <Logo />
          </CenterWrap>
          <CenterWrap>
            <MobileMenu />
            <SearchIcon onClick={handleSearchClick} />
            <div style={{ display: "flex", flexDirection: "column" }}>
              {isLogin && <UserName>{userName}</UserName>}
              <div onClick={handleUserIconClick}>
                <User />
              </div>
            </div>
            <div style={{ position: "relative" }}>
              {cartItems.length > 0 ? (
                <BasketFullWrap>
                  <CartQuantityWrap>
                    <CartQuantitySpan>{cartItems.length}</CartQuantitySpan>
                  </CartQuantityWrap>
                  <PiShoppingCartFill />
                </BasketFullWrap>
              ) : (
                <BasketIcon>
                  <PiShoppingCartLight />
                </BasketIcon>
              )}
            </div>
          </CenterWrap>
          <SearchForm isSearchOpen={isSearchOpen} />
        </ContainerMobile>
      )}

      {/* === AUTH MODAL ===
      {!isLogin && showAuthModal && (
        <AuthModal onClose={() => setShowAuthModal(false)} />
      )} */}
    </>
  );
};

export default Header;
