import Plus from "@/assets/icons/plus/plus.svg?react";
import { IconProps } from "@/type/icons/icons.type";

const LogoIcons = ({ width, height, fill, className }: IconProps) => {
  return (
    <Plus className={className} width={width} height={height} fill={fill} />
  );
};

export default LogoIcons;
