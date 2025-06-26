import { MenuWrapper, MenuItem, MenuList } from "./menu.styled";

import MultiLevelMenu from "./MultiLevelMenu/MultiLevelMenu";

export const menuData = [
  { text: "ОБЛИЧЧЯ", to: "/category/facial" },
  { text: "ВОЛОССЯ", to: "/category/hairCare" },
  { text: "МАКІЯЖ", to: "/category/makeup" },
  { text: "ТІЛО", to: "/category/bodyCare" },
  { text: "НАБОРИ & ПОДАРУНКИ", to: "/category/folds" },
  { text: "SALE", to: "/discount", highlight: true },
  { text: "БРЕНДИ", to: "/brands" },
  { text: "ПРО НАС", to: "/wholesaleProgram" },
];

const Menu = () => {
  return (
    // <MenuNav>
    //   <MultiLevelMenu />
    // </MenuNav>
    <MenuWrapper>
      <MenuList>
        {menuData.map((item, idx) => (
          <MenuItem key={item.to} to={item.to} $highlight={item.highlight}>
            {item.text}
          </MenuItem>
        ))}
      </MenuList>
    </MenuWrapper>
  );
};

export default Menu;
