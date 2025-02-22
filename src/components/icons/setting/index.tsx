import Setting from "@/assets/icons/setting/setting.svg?react";
import { IconProps } from "@/type/icons/icons.type";

const SettingIcon = ({ width, height, fill, className }: IconProps) => {
  return (
    <Setting className={className} width={width} height={height} fill={fill} />
  );
};

export default SettingIcon;