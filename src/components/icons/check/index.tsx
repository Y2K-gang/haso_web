import Check from "@/assets/icons/check/check.svg?react";
import { IconProps } from "@/type/icons/icons.type";

const LogoIcons = ({ width, height, fill, className }: IconProps) => {
  return (
    <Check className={className} width={width} height={height} fill={fill} />
  );
};

export default LogoIcons;
