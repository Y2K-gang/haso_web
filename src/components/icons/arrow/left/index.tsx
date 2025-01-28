import Left from "@/assets/icons/arrow/Left.svg?react";
import { IconProps } from "@/type/icons/icons.type";

const LeftArrowIcons = ({ width, height, className }: IconProps) => {
  return (
    <Left className={className} width={width} height={height} />
  );
};

export default LeftArrowIcons;
