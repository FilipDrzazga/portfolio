import { HiArrowLongRight } from "react-icons/hi2";
import * as S from "./IconPicker.styled";

interface IconPickerProps {
  icon: keyof typeof icons;
  size: number;
  color: string;
  dataAtrr?: string;
}

const icons = {
  arrow: HiArrowLongRight,
};

const IconPicker = ({ icon, size, color, dataAtrr }: IconPickerProps) => {
  const IconComponent = icons[icon];
  return (
    <S.IconPicker data-arrow={dataAtrr}>
      <IconComponent size={size} color={color} />
    </S.IconPicker>
  );
};

export default IconPicker;
