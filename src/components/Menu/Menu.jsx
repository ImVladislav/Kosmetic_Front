import { MenuWrapper, MenuItem, MenuList } from "./menu.styled";

import MultiLevelMenu from "./MultiLevelMenu/MultiLevelMenu";

export const menuData = [
  { label: "ОБЛИЧЧЯ", href: "/" },
  { label: "ВОЛОССЯ", href: "/" },
  { label: "МАКІЯЖ", href: "/" },
  { label: "ТІЛО", href: "/" },
  { label: "НАБОРИ & ПОДАРУНКИ", href: "/" },
  { label: "SALE", href: "#", highlight: true },
  { label: "БРЕНДИ", href: "/brands" },
  { label: "ПРО НАС", href: "/" },
];

const Menu = () => {
  return (
    // <MenuNav>
    //   <MultiLevelMenu />
    // </MenuNav>
    <MenuWrapper>
      <MenuList>
        {menuData.map((item, idx) => (
          <MenuItem key={idx} to={item.href} $highlight={item.highlight}>
            {item.label}
          </MenuItem>
        ))}
      </MenuList>
    </MenuWrapper>
  );
};

export default Menu;
