import Right from "@/assets/icons/arrow/Right.svg?react";
import { IconProps } from "@/type/icons/icons.type";

const RightArrowIcons = ({ width, height, className }: IconProps) => {
  return (
    <Right className={className} width={width} height={height} />
  );
};

export default RightArrowIcons;
