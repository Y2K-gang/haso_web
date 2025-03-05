import React, { useState } from "react";
import * as S from "./style";

interface CustomDropdownProps {
  options: string[];
  onSelect: (value: string) => void;
  text?: string;
}

const CustomDropdown: React.FC<CustomDropdownProps> = ({ options, onSelect, text }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);

  const handleSelect = (option: string) => {
    setSelected(option);
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <S.DropdownWrapper>
      <S.DropdownButton onClick={() => setIsOpen((prev) => !prev)}>
        {selected || text}
      </S.DropdownButton>
      {isOpen && (
        <S.DropdownMenu>
          {options.map((option, index) => (
            <S.DropdownItem key={index} onClick={() => handleSelect(option)}>
              {option}
            </S.DropdownItem>
          ))}
        </S.DropdownMenu>
      )}
    </S.DropdownWrapper>
  );
};

export default CustomDropdown;
