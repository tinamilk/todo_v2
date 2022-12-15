import React from "react";
import { MenuWrapper } from "./filter.styled";
import checked from "../../../assets/img/checked-icon.svg";
import date from "../../../assets/img/date-filter-icon.svg";
import today from "../../../assets/img/today-icon.svg";

const filterButtons = [
  { name: "Today", path: today },
  { name: "Done", path: checked },
  { name: "Date", path: date },
];

export const FilterMenu = () => {
  return <MenuWrapper></MenuWrapper>;
};
