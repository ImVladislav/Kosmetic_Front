import { MenuNav } from "./menu.styled";

import MultiLevelMenu from "./MultiLevelMenu/MultiLevelMenu";

export const menuData = [
  {
    href: "#category",
    mobileTo: "#category",
    text: "категорії",
    mobileText: "категорії",
  },
  {
    to: "/brands",
    text: "бренди",
    mobileText: "бренди",
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
    <MenuNav>
      <MultiLevelMenu />
    </MenuNav>
  );
};

export default Menu;
