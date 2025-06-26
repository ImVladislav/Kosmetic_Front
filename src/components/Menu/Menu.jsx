import { MenuWrapper, MenuItem, MenuList } from "./menu.styled";

import MultiLevelMenu from "./MultiLevelMenu/MultiLevelMenu";

export const menu = [
  { text: "ОБЛИЧЧЯ", to: "/category/facial" },
  { text: "ВОЛОССЯ", to: "/category/hairCare" },
  { text: "МАКІЯЖ", to: "/category/makeup" },
  { text: "ТІЛО", to: "/category/bodyCare" },
  { text: "НАБОРИ & ПОДАРУНКИ", to: "/category/folds" },
  { text: "SALE", to: "/discount", highlight: true },
  { text: "БРЕНДИ", to: "/brands" },
  { text: "ПРО НАС", to: "/wholesaleProgram" },
];

export const menuData = [
  {
    href: "#category",
    mobileTo: "#category",
    text: "категорії",
    mobileText: "категорії",
  },
  {
    to: "/brands",
    text: "БРЕНДИ",
    mobileText: "БРЕНДИ",
  },
  {
    to: "/news",
    text: "новинки",
    mobileText: "нове постачання",
  },
  {
    to: "/discount",
    text: "акції",
    mobileText: "товари зі зниженою ціною",
  },
  {
    to: "/wholesaleProgram",
    text: "клієнтам",
    mobileText: "оптова програма",
  },
  {
    mobileTo: "/#return",
    mobileText: "повернення та обмін",
  },
  {
    mobileTo: "#payment",
    mobileText: "оплата і доставка",
  },
  {
    mobileTo: "#about",
    mobileText: "про нас",
  },
  {
    href: "#contacts",
    mobileTo: "#contacts",
    text: "контакти",
    mobileText: "контакти",
  },
];
const Menu = () => {
  return (
    // <MenuNav>
    //   <MultiLevelMenu />
    // </MenuNav>
    <MenuWrapper>
      <MenuList>
        {menu.map((item, idx) => (
          <MenuItem key={item.to} to={item.to} $highlight={item.highlight}>
            {item.text}
          </MenuItem>
        ))}
      </MenuList>
    </MenuWrapper>
  );
};

export default Menu;
