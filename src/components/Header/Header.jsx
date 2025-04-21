import { useState } from "react";
import { useLocation } from "react-router-dom";

import { IoPersonOutline } from "react-icons/io5";
import { PiShoppingCartFill } from "react-icons/pi"; // повний кошик
import { PiShoppingCartLight } from "react-icons/pi"; // пустий кошик

import { useMedia } from "../../utils/hooks/useMedia";

import Logo from "../Logo/Logo";
import Menu from "../Menu/Menu";
import SearchForm from "../SearchForm/SearchForm";
import BurgerMenu from "../Menu/BurgerMenu/BurgerMenu";

import {
  BasketFullWrap,
  BasketIcon,
  BasketIconFull,
  BasketWrap,
  ButtonMenu,
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
  MenuIcon,
  MenuWrap,
  NameUser,
  Schedule,
  SearchIcon,
  TopWrap,
  UserIcon,
  UserName,
  UserWrap,
  Wrap,
  WrapTop,
} from "./header.styled";
import MobileMenu from "../Menu/MobileMenu/MobileMenu";

const Header = () => {
  const { isMobileScreen } = useMedia();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { pathname } = useLocation();
  const isLogin = false;
  const basket = [];
  const handleMenuClick = () => {
    setIsMenuOpen((state) => !state);
  };
  const handleSearchClick = () => {
    setIsSearchOpen((state) => !state); // Перемикаємо видимість форми пошуку
  };
  return (
    <>
      {isMobileScreen ? (
        <ContainerMobile>
          {/* top */}
          {/* {isMenuOpen && isMobileScreen && (
            <BurgerMenu
              handleClick={handleMenuClick}
              isMenuOpen={isMenuOpen}
              setIsMenuOpen={setIsMenuOpen}
            />
          )} */}

          <TopWrap>
            <Schedule
              href="https://t.me/+Eejgotzs-ktiMTIy"
              target="_blank"
              rel="noreferrer"
              className="sc-gxRkJE bTaJYA"
            >
              Підписуйся на наш телеграм канал
            </Schedule>
          </TopWrap>
          {/* center */}
          <CenterWrap>
            <Logo />
          </CenterWrap>
          <CenterWrap>
            {/* <BurgerMenu /> */}
            <MobileMenu />
            {/* <ButtonMenu onClick={handleMenuClick}>
              <MenuIcon />
            </ButtonMenu> */}
            <SearchIcon onClick={handleSearchClick} />
          </CenterWrap>
          {/* bottom */}
          <SearchForm isSearchOpen={isSearchOpen} />
        </ContainerMobile>
      ) : (
        <>
          <ContainerHeader>
            <LineWrap>
              <LineLink
                href="https://t.me/+Eejgotzs-ktiMTIy"
                target="_blank"
                rel="noreferrer"
              >
                Підписуйся на наш телеграм канал, щоб дізнатись першим про
                новинки та поповнення асортименту
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
                          {/* search */}
                          <SearchIcon onClick={handleSearchClick} />

                          {/* login */}
                          <UserWrap>
                            {isLogin && <UserName>userName</UserName>}
                            <UserIcon size={25} />
                          </UserWrap>

                          {/* basket */}
                          <BasketWrap>
                            {basket.length > 0 ? (
                              <BasketFullWrap>
                                <CartQuantityWrap>
                                  <CartQuantitySpan>
                                    {basket.length}
                                  </CartQuantitySpan>
                                </CartQuantityWrap>
                                <BasketIconFull />
                              </BasketFullWrap>
                            ) : (
                              <BasketIcon />
                            )}
                          </BasketWrap>
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
              </MenuBottom>
            </Container>
          </ContainerHeader>
          <SearchForm isSearchOpen={isSearchOpen} />
        </>
      )}
    </>
  );
};

export default Header;
