//셀렉트박스
import React from "react";
import * as S from "./Styles";

interface SelectBoxProps{
    options: {value: string; label: string}[];
    selectedValue: string; //선택한 값
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    className?: string;
}

const SelectBox: React.FC<SelectBoxProps> = ({ options, selectedValue, onChange, className}) => {
    return (
        <S.Container 
            value={selectedValue}
            onChange={onChange}
            className={className}>
            {options.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </S.Container>
    );
};

export default SelectBox;