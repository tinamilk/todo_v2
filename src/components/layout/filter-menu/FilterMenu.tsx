import { useState } from "react";
import { MenuItem } from "../../ui/menu-item/MenuItem";
import { FilterButtonsWrapper, IconButton, MenuWrapper } from "./filter.styled";
import checked from "../../../assets/img/checked-icon.svg";
import date from "../../../assets/img/date-filter-icon.svg";
import today from "../../../assets/img/today-icon.svg";
import logout from "../../../assets/img/logout.svg";
import { Icon } from "../../ui/menu-item/menu-item.styled";

interface ItemProps {
  isActive: string;
}

const menuItems = [
  { name: "Today", path: today },
  { name: "Done", path: checked },
  { name: "Date", path: date },
];

export const FilterMenu = () => {
  const activeButton = useState(menuItems[0].name);
  const isActive = "active";
  return (
    <MenuWrapper>
      <FilterButtonsWrapper>
        {menuItems.map((menuItem) => (
          <MenuItem title={menuItem.name} path={menuItem.path} />
        ))}
      </FilterButtonsWrapper>
      <IconButton>
        <Icon srcSet={logout} />
        Log Out
      </IconButton>
    </MenuWrapper>
  );
};
