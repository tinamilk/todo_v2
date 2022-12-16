import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import { MenuItem } from "../../ui/menu-item/MenuItem";
import { MenuWrapper } from "./filter.styled";
import checked from "../../../assets/img/checked-icon.svg";
import date from "../../../assets/img/date-filter-icon.svg";
import today from "../../../assets/img/today-icon.svg";

interface ItemProps {
  isActive: string;
}

const menuItems = [
  { name: "Today", path: today },
  { name: "Done", path: checked },
  { name: "Date", path: date },
];

export const FilterMenu = () => {
  const isActive = "active";
  return (
    <MenuWrapper>
      {menuItems.map((menuItem) => (
        <MenuItem title={menuItem.name} path={menuItem.path} />
      ))}
    </MenuWrapper>
  );
};
