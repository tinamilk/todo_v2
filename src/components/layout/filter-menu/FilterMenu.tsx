import { useState } from "react";
import { MenuItem } from "../../ui/menu-item/MenuItem";
import { FilterButtonsWrapper, MenuWrapper } from "./filter.styled";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { Filter } from "../../../types/types";
import { AddTaskIcon, Checked, Date, TodayIcon } from "../../../assets/Icons";
import { IconButton } from "../../ui/button/button.styled";
import { useDispatch } from "react-redux";
import { setActive } from "../../../redux/modal/modal";

interface ItemProps {
  isActive: string;
}

type Items = {
  name: Filter;
  path: any;
}[];

const menuItems: Items = [
  { name: "Today", path: <TodayIcon /> },
  { name: "Done", path: <Checked /> },
  { name: "Date", path: <Date /> },
];

export const FilterMenu = () => {
  const currentFilter = useSelector((state: RootState) => state.filter.filter);
  const dispatch = useDispatch();

  return (
    <MenuWrapper>
      <FilterButtonsWrapper>
        {menuItems.map((menuItem, index) => (
          <MenuItem
            key={index}
            title={menuItem.name}
            icon={menuItem.path}
            isActive={menuItem.name === currentFilter}
          />
        ))}
      </FilterButtonsWrapper>
      <IconButton
        buttonType="default"
        onClick={() => dispatch(setActive("add"))}
      >
        <AddTaskIcon />
        Add Task
      </IconButton>
    </MenuWrapper>
  );
};
