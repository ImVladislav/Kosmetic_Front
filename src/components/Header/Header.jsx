import { useState } from "react";
import { useLocation } from "react-router-dom";
import { IoPersonOutline } from "react-icons/io5";
import { PiShoppingCartFill, PiShoppingCartLight } from "react-icons/pi";

import { useMedia } from "../../utils/hooks/useMedia";
import Logo from "../Logo/Logo";
import Menu from "../Menu/Menu";
import SearchForm from "../SearchForm/SearchForm";
import MobileMenu from "../Menu/MobileMenu/MobileMenu";
import AuthModal from "../Login/AuthModal/AuthModal";

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
  UserIcon,
  UserName,
  UserWrap,
  Wrap,
  WrapTop,
} from "./header.styled";

const Header = () => {
  const { isMobileScreen } = useMedia();
  const { pathname } = useLocation();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);

  const isLogin = Boolean(localStorage.getItem("token"));
  const basket = []; // замінити на state або Redux, якщо потрібно

  const handleSearchClick = () => setIsSearchOpen((prev) => !prev);
  const handleUserIconClick = () => {
    if (!isLogin) {
      setShowAuthModal(true);
    }
  };

  return (
    <>
      {isMobileScreen ? (
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
          </CenterWrap>
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
                          <SearchIcon onClick={handleSearchClick} />

                          <UserWrap onClick={handleUserIconClick}>
                            {isLogin && <UserName>Користувач</UserName>}
                            <UserIcon size={25} />
                          </UserWrap>

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

      {/* === AUTH MODAL === */}
      {!isLogin && showAuthModal && (
        <AuthModal onClose={() => setShowAuthModal(false)} />
      )}
    </>
  );
};

export default Header;
