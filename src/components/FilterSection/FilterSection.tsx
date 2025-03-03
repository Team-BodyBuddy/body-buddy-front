import React, { useState, useEffect, useRef } from "react";
import * as S from "./Styles";
import { useRegions } from "../../react-query/query/useRegions";

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

    const regionDropdownRef = useRef<HTMLDivElement>(null);
    const gymDropdownRef = useRef<HTMLDivElement>(null);

    const { data: regions = [], isLoading } = useRegions();
    const regionOptions = ["지역 선택", ...regions];
    const gyms = ["Gym 선택", "Gym1", "Gym2", "Gym3", "Gym4", "Gym5"];

    const handleRegionToggle = () => {
        setIsRegionDropdownOpen((prev) => !prev);
        setIsGymDropdownOpen(false);
    };

    const handleGymToggle = () => {
        setIsGymDropdownOpen((prev) => !prev);
        setIsRegionDropdownOpen(false);
    };

    // 드롭다운 바깥 클릭 감지 이벤트
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                regionDropdownRef.current &&
                !regionDropdownRef.current.contains(event.target as Node)
            ) {
                setIsRegionDropdownOpen(false);
            }
            if (
                gymDropdownRef.current &&
                !gymDropdownRef.current.contains(event.target as Node)
            ) {
                setIsGymDropdownOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <S.FilterContainer>
            <S.RegionDropdown ref={regionDropdownRef}>
                <S.RegionButton onClick={handleRegionToggle}>
                    {selectedRegion}
                    <S.DropdownIcon />
                </S.RegionButton>
                {isRegionDropdownOpen && (
                    <S.RegionMenu>
                        {isLoading ? (
                            <S.RegionItem>Loading...</S.RegionItem>
                        ) : (
                            regionOptions.map((region) => (
                                <S.RegionItem
                                    key={region}
                                    onClick={() => {
                                        setSelectedRegion(region);
                                        setIsRegionDropdownOpen(false);
                                    }}
                                >
                                    {region}
                                </S.RegionItem>
                            ))
                        )}
                    </S.RegionMenu>
                )}
            </S.RegionDropdown>

            <S.GymDropdown ref={gymDropdownRef}>
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
                                    setIsGymDropdownOpen(false);
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
