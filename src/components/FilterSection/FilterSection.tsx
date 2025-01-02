import React, { useState } from "react";
import * as S from "./Styles";

interface FilterSectionProps {
    selectedRegion: string;
    setSelectedRegion: React.Dispatch<React.SetStateAction<string>>;
    selectedGym: string;
    setSelectedGym: React.Dispatch<React.SetStateAction<string>>;
}

const FilterSection: React.FC<FilterSectionProps> = ({
    selectedRegion,
    setSelectedRegion,
    selectedGym,
    setSelectedGym,
}) => {
    const [isRegionDropdownOpen, setIsRegionDropdownOpen] = useState(false); 
    const [isGymDropdownOpen, setIsGymDropdownOpen] = useState(false); 

    const regions = ["지역", "서울", "강남구", "마포구", "종로구"];
    const gyms = ["Gym 선택", "Gym1", "Gym2", "Gym3", "Gym4", "Gym5"];

    const handleRegionToggle = () => {
        setIsRegionDropdownOpen((prev) => !prev);
        setIsGymDropdownOpen(false); // 다른 드롭다운 닫기
    };

    const handleGymToggle = () => {
        setIsGymDropdownOpen((prev) => !prev); 
        setIsRegionDropdownOpen(false); // 다른 드롭다운 닫기
    };

    return (
        <S.FilterContainer>
            <S.RegionDropdown>
                <S.RegionButton onClick={handleRegionToggle}>
                    {selectedRegion}
                    <S.DropdownIcon /> 
                </S.RegionButton>
                {isRegionDropdownOpen && (
                    <S.RegionMenu>
                        {regions.map((region) => (
                            <S.RegionItem
                                key={region}
                                onClick={() => {
                                    setSelectedRegion(region);
                                    setIsRegionDropdownOpen(false);
                                }}
                            >
                                {region}
                            </S.RegionItem>
                        ))}
                    </S.RegionMenu>
                )}
            </S.RegionDropdown>

            <S.GymDropdown>
                <S.GymButton onClick={handleGymToggle}>
                    {selectedGym}
                    <S.DropdownIcon /> 
                </S.GymButton>
                {isGymDropdownOpen && (
                    <S.GymMenu>
                        {gyms.map((gym) => (
                            <S.GymItem
                                key={gym}
                                onClick={() => {
                                    setSelectedGym(gym);
                                    setIsGymDropdownOpen(false); // 선택 후 닫기
                                }}
                            >
                                {gym}
                            </S.GymItem>
                        ))}
                    </S.GymMenu>
                )}
            </S.GymDropdown>
        </S.FilterContainer>
    );
};

export default FilterSection;
