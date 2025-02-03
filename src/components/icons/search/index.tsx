import Search from "@/assets/icons/search/search.svg?react";
import { IconProps } from "@/type/icons/icons.type";

const SearchIcon = ({ width, height, fill, className }: IconProps) => {
  return (
    <Search className={className} width={width} height={height} fill={fill} />
  );
};

export default SearchIcon;
