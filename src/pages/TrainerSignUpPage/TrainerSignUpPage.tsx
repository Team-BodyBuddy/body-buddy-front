//트레이너 회원가입 페이지
import React, { useState } from "react";
import * as S from "./Styles";
import BackButton from "../../components/BackButton/BackButton";
import SelectBox from "../../components/SelectBox/SelectBox";
import UserInfoInput from "../../components/UserInfoInput/UserInfoInput";
import { useNavigate } from "react-router-dom";
import { CheckButton1 } from "../../components/icons";
import { CheckButton3 } from "../../components/icons";
import PageLink from "../../components/PageLink/PageLink";
import PasswordInput from "../../components/PasswordInput/PasswordInput";
import NextButton from "../../components/NextButton/NextButton";

const TrainerSignUpPage: React.FC = () => {
    const navigate = useNavigate();

    const [selectedGender, setSelectedGender] = useState("m");
    const [selectedYear, setSelectedYear] = useState("1990");
    const [selectedMonth, setSelectedMonth] = useState("1");
    const [selectedDate, setSelectedDate] = useState("1");
    const [selectedCity, setSelectedCity] = useState("지역");
    const [selectedGym, setSelectedGym] = useState("Gym 선택");

    const handleGenderChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedGender(e.target.value);
    };

    const handleYearChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedYear(e.target.value);
    };

    const handleMonthChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedMonth(e.target.value);
    };

    const handleDateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedDate(e.target.value);
    };

    const handleCityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedCity(e.target.value);
    };

    const handleGymChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedGym(e.target.value);
    };

    const genderOptions = [
        { value: "m", label: "남성" },
        { value: "f", label: "여성" },
    ];
    const yearOptions = [
        { value: "1990", label: "1990" },{ value: "1991", label: "1991" },
        { value: "1992", label: "1992" },{ value: "1993", label: "1993" },
        { value: "1994", label: "1994" },{ value: "1995", label: "1995" },
        { value: "1996", label: "1996" },{ value: "1997", label: "1997" },
        { value: "1998", label: "1998" },{ value: "1999", label: "1999" },
        { value: "2000", label: "2000" },{ value: "2001", label: "2001" },
        { value: "2002", label: "2002" },{ value: "2003", label: "2003" },
        { value: "2004", label: "2004" },{ value: "2005", label: "2005" },
        { value: "2006", label: "2006" },{ value: "2007", label: "2007" },
        { value: "2008", label: "2008" },{ value: "2009", label: "2009" },
        { value: "2010", label: "2010" }
    ];
    const monthOptions = [
        { value: "1", label: "1" },{ value: "2", label: "2" },
        { value: "3", label: "3" },{ value: "4", label: "4" },
        { value: "5", label: "5" },{ value: "6", label: "6" },
        { value: "7", label: "7" },{ value: "8", label: "8" },
        { value: "9", label: "9" },{ value: "10", label: "10" },
        { value: "11", label: "11" },{ value: "12", label: "12" }
    ];
    const dateOptions = [
        { value: "1", label: "1" }, { value: "2", label: "2" }, { value: "3", label: "3" },
        { value: "4", label: "4" }, { value: "5", label: "5" }, { value: "6", label: "6" },
        { value: "7", label: "7" }, { value: "8", label: "8" }, { value: "9", label: "9" },
        { value: "10", label: "10" }, { value: "11", label: "11" }, { value: "12", label: "12" },
        { value: "13", label: "13" }, { value: "14", label: "14" }, { value: "15", label: "15" },
        { value: "16", label: "16" }, { value: "17", label: "17" }, { value: "18", label: "18" },
        { value: "19", label: "19" }, { value: "20", label: "20" }, { value: "21", label: "21" },
        { value: "22", label: "22" }, { value: "23", label: "23" }, { value: "24", label: "24" },
        { value: "25", label: "25" }, { value: "26", label: "26" }, { value: "27", label: "27" },
        { value: "28", label: "28" }, { value: "29", label: "29" }, { value: "30", label: "30" },
        { value: "31", label: "31" }
    ];
    const cityOptions = [
        { value: "서울특별시", label: "서울특별시" },
        { value: "인천광역시", label: "인천광역시" },
        { value: "대전광역시", label: "대전광역시" },
        { value: "대구광역시", label: "대구광역시" },
        { value: "울산광역시", label: "울산광역시" },
        { value: "부산광역시", label: "부산광역시" },
        { value: "광주광역시", label: "광주광역시" },
        { value: "세종특별자치시", label: "세종특별자치시" },
        { value: "경기도", label: "경기도" },
        { value: "충청도", label: "충청도" },
        { value: "강원도", label: "강원도" },
        { value: "전라도", label: "전라도" },
        { value: "경상도", label: "경상도" },
        { value: "제주도", label: "제주도" }
    ];
    const gymOptions = [
        { value: "Gym1", label: "Gym1" },
        { value: "Gym2", label: "Gym2" },
        { value: "Gym3", label: "Gym3" },
        { value: "Gym4", label: "Gym4" },
        { value: "Gym5", label: "Gym5" },
    ];

    
    return (
        <S.Container>
            <S.TopContainer>
                <S.TopBar>
                    <S.Title>회원가입</S.Title>
                </S.TopBar>
                <S.Icon><BackButton onClick={() => navigate("/login")} /></S.Icon>
            </S.TopContainer>
            
            <S.FindOptions>
                <S.OptionsWrapper>
                    <S.Trainer>
                        <CheckButton3></CheckButton3>
                        트레이너
                    </S.Trainer>
                    <S.User>
                        <CheckButton1></CheckButton1>
                        <PageLink 
                            $textcolor="#333333" 
                            text=" 회원" 
                            to="/userSignup"
                            className="trainerSignup"></PageLink>
                    </S.User>
                </S.OptionsWrapper>
                <S.LineWrapper></S.LineWrapper>
            </S.FindOptions>

            <S.Container1>
                <S.Detail1>
                    <S.Header>성별 <S.Star>*</S.Star></S.Header>
                    <S.Content>
                        <form>
                            <SelectBox
                                options={genderOptions}
                                selectedValue={selectedGender}
                                onChange={handleGenderChange}
                                className="select1"/>
                        </form>
                    </S.Content>
                </S.Detail1>

                <S.Detail2>
                    <S.Header>생년월일 <S.Star>*</S.Star></S.Header>
                    <S.BirthdayContent>
                        <form>
                            <SelectBox
                                options={yearOptions}
                                selectedValue={selectedYear}
                                onChange={handleYearChange}
                                className="select1"/>
                        </form>
                        <form>
                            <SelectBox
                                options={monthOptions}
                                selectedValue={selectedMonth}
                                onChange={handleMonthChange}
                                className="select1"/>
                        </form>
                        <form>
                            <SelectBox
                                options={dateOptions}
                                selectedValue={selectedDate}
                                onChange={handleDateChange}
                                className="select1"/>
                        </form>
                    </S.BirthdayContent>
                </S.Detail2>

                <S.Detail3>
                    <S.Header>이름 <S.Star>*</S.Star></S.Header>
                    <S.Content>
                        <UserInfoInput $width={"312px"} />
                    </S.Content>
                </S.Detail3>
            </S.Container1>


            <S.Container2>
                <S.Detail1>
                    <S.Header>ID <S.Star>*</S.Star></S.Header>
                    <S.Content>
                        <UserInfoInput $width={"312px"} placeholder={"6-12자 영문"}/>
                    </S.Content>    
                </S.Detail1>

                <S.Detail2>
                    <S.Header>비밀번호 <S.Star>*</S.Star></S.Header>
                    <S.Content>
                        <S.PasswordContent>
                            <PasswordInput />
                        </S.PasswordContent>
                    </S.Content>
                </S.Detail2>
            </S.Container2>


            <S.Container3>
                <S.Detail1>
                    <S.Header>사는 곳</S.Header>
                    <S.LocationContent>
                        <form>
                            <SelectBox
                                options={cityOptions}
                                selectedValue={selectedCity}
                                onChange={handleCityChange}
                                className="select2"/>
                        </form>
                        <form>
                            <SelectBox
                                options={gymOptions}
                                selectedValue={selectedGym}
                                onChange={handleGymChange}
                                className="select3"/>
                        </form>
                    </S.LocationContent>
                </S.Detail1>

                <S.Detail2>
                    <S.Header>키/몸무게</S.Header>
                    <S.ContentWrapper>
                        <UserInfoInput $width={"151px"} placeholder={"172cm"}/>
                        <UserInfoInput $width={"151px"} placeholder={"57kg"}/>
                    </S.ContentWrapper>
                </S.Detail2>

                <S.NextContainer>
                    <NextButton onClick={() => {}} $bgcolor="#00B4EA">다음</NextButton>
                </S.NextContainer>
            </S.Container3>
        </S.Container>
    );
};

export default TrainerSignUpPage;