import React, { useState, useEffect, useRef } from "react";
import * as S from "./Styles";
import { useRegions } from "../../react-query/query/gyms/useRegions";
import { useGyms } from "../../react-query/query/gyms/useGyms";

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
    const { data: regions = [], isLoading: isRegionsLoading } = useRegions();
    const regionOptions = ["지역", ...regions];
    const { data: gyms = [], isLoading: isGymsLoading } = useGyms(
        selectedRegion !== "지역" ? selectedRegion : undefined
    );

    const gymOptions = ["Gym 선택", ...gyms.map((gym) => gym.name)];

    const handleRegionToggle = () => {
        setIsRegionDropdownOpen((prev) => !prev);
        setIsGymDropdownOpen(false);
    };

    const handleGymToggle = () => {
        setIsGymDropdownOpen((prev) => !prev);
        setIsRegionDropdownOpen(false);
    };

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
                        {isRegionsLoading ? (
                            <S.RegionItem>Loading...</S.RegionItem>
                        ) : (
                            regionOptions.map((region) => (
                                <S.RegionItem
                                    key={region}
                                    onClick={() => {
                                        setSelectedRegion(region);
                                        setSelectedGym("Gym 선택");
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
                        {isGymsLoading ? (
                            <S.GymItem>Loading...</S.GymItem>
                        ) : (
                            gymOptions.map((gym) => (
                                <S.GymItem
                                    key={gym}
                                    onClick={() => {
                                        setSelectedGym(gym);
                                        setIsGymDropdownOpen(false);
                                    }}
                                >
                                    {gym}
                                </S.GymItem>
                            ))
                        )}
                    </S.GymMenu>
                )}
            </S.GymDropdown>
        </S.FilterContainer>
    );
};

export default FilterSection;
