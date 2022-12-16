import { Icon } from "./menu-item.styled";
import { MenuItemWrapper } from "./menu-item.styled";

type PropsType = {
  title: string;
  path: string;
};

export const MenuItem = ({ title, path }: PropsType) => {
  return (
    <MenuItemWrapper isActive={true}>
      <Icon srcSet={path} />
      {title}
    </MenuItemWrapper>
  );
};
