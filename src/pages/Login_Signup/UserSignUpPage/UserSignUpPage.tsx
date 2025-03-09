//유저 회원가입 페이지
import React, { useState, useEffect } from "react";
import * as S from "./Styles";
import BackButton from "../../../components/BackButton/BackButton";
import SelectBox from "../../../components/SignUpPage/SelectBox/SelectBox";
import NicknameInput from "../../../components/SignUpPage/NicknameInput/NicknameInput";
import UserInfoInput from "../../../components/SignUpPage/UserInfoInput/UserInfoInput";
import { useNavigate } from "react-router-dom";
import CheckButton from "../../../components/SignUpPage/CheckButton/CheckButton";
import PageLink from "../../../components/SignUpPage/PageLink/PageLink";
import PasswordInput from "../../../components/SignUpPage/PasswordInput/PasswordInput";
import NextButton from "../../../components/SignUpPage/NextButton/NextButton";
import { mockGyms, mockRegions } from "../../../apis/gyms/mocks";
import { UserSignUp } from "../../../apis/SignUp/signupApi";

const UserSignUpPage: React.FC = () => {
  const navigate = useNavigate();

  //   성별
  // 닉네임
  // 생일
  // 이름
  // 아이디
  // 비밀번호
  // 비번확인
  // 사는곳
  // 체육관 목록선택
  // 키
  // 몸무게

  const [selectedGender, setSelectedGender] = useState("MALE");
  const [nickname, setNickname] = useState("");
  const [selectedYear, setSelectedYear] = useState("1990");
  const [selectedMonth, setSelectedMonth] = useState("1");
  const [selectedDate, setSelectedDate] = useState("1");
  const [selectedCity, setSelectedCity] = useState("GANGNAM");
  const [selectedGym, setSelectedGym] = useState("");
  const [realName, setRealName] = useState("");
  const [id, setId] = useState("");
  const [gymId, setgymId] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [gymOptions, setGymOptions] = useState<
    { value: string; label: string }[]
  >([]);

  // 지역 선택 시 지역에 따른 gym들 목록에 표시
  useEffect(() => {
    const filteredGyms = mockGyms
      .filter((gym) => gym.region === selectedCity)
      .map((gym) => ({ value: gym.name, label: gym.name, id: gym.id }));

    setGymOptions(filteredGyms);

    if (filteredGyms.length > 0) {
      setSelectedGym(filteredGyms[0].value);
      setgymId(filteredGyms[0].id.toString());
    } else {
      setSelectedGym("");
      setgymId(""); // gym이 없을 경우 초기화
    }
  }, [selectedCity]);

  // selectedGym이 변경될 때 gymId도 업데이트
  useEffect(() => {
    const selected = mockGyms.find((gym) => gym.name === selectedGym);
    if (selected) {
      setgymId(selected.id.toString());
    }
  }, [selectedGym]);

  // 헬스장 관련 api도 있음
  // {
  //   "loginId": "string",
  //   "password": "NA%@8d2D58&L",
  //   "confirmPassword": "string",
  //   "realName": "string",
  //   "gender": "MALE",
  //   "birthday": "2025-03-07",
  //   "height": 0.1,
  //   "weight": 0.1,
  //   "region": "GANGNAM",
  //   "gymId": 9007199254740991
  // }

  // 서버로 보내는 api 정보들, 자료형 맞게 변환 필요
  const UserBirthday = `${selectedYear}-${String(selectedMonth).padStart(
    2,
    "0"
  )}-${String(selectedDate).padStart(2, "0")}`;
  const UserHeight = Number(height);
  const UserWeight = Number(weight);
  const GymID = Number(gymId);
  //   console.log("UserBirthday 타입:", typeof UserBirthday);
  //   console.log("UserHeight 타입:", typeof UserHeight);
  //   console.log("UserWeight 타입:", typeof UserWeight);
  //   console.log("GymID 타입:", typeof GymID);

  console.log("====================================");
  console.log("성별 = " + selectedGender);
  console.log("닉네임 = " + nickname);
  console.log("생년월일(yyyy-mm-dd) 모두 출력 = " + UserBirthday);
  console.log("이름 = " + realName);
  console.log("ID = " + id);
  console.log("region = " + selectedCity);
  console.log("gymName = " + selectedGym);
  console.log("gymId = " + gymId);
  console.log("키 = " + height);
  console.log("몸무게 = " + weight);
  console.log("Password:", password);
  console.log("Confirm Password:", confirmPassword);

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
    setSelectedGym("");
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRealName(e.target.value);
  };

  const handleIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
  };

  const handleGymChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedGym(e.target.value);
  };

  const handleHeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHeight(e.target.value);
  };

  const handleWeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWeight(e.target.value);
  };

  const handleNicknameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
  };

  const handleSignUp = async () => {
    try {
      const result = await UserSignUp({
        loginId: id,
        password: password,
        confirmPassword: confirmPassword,
        nickname: nickname,
        realName: realName,
        gender: selectedGender,
        birthday: UserBirthday,
        height: UserHeight,
        weight: UserWeight,
        region: selectedCity,
        gymId: GymID,
      });
      console.log("회원가입 성공");
      // 회원가입 성공 시 처리
    } catch (error) {
      console.error("SignUp Error:");
      // 회원가입 실패 시 처리
    }
  };

  const genderOptions = [
    { value: "MALE", label: "남성" },
    { value: "FEMALE", label: "여성" },
  ];
  const yearOptions = [
    { value: "1990", label: "1990" },
    { value: "1991", label: "1991" },
    { value: "1992", label: "1992" },
    { value: "1993", label: "1993" },
    { value: "1994", label: "1994" },
    { value: "1995", label: "1995" },
    { value: "1996", label: "1996" },
    { value: "1997", label: "1997" },
    { value: "1998", label: "1998" },
    { value: "1999", label: "1999" },
    { value: "2000", label: "2000" },
    { value: "2001", label: "2001" },
    { value: "2002", label: "2002" },
    { value: "2003", label: "2003" },
    { value: "2004", label: "2004" },
    { value: "2005", label: "2005" },
    { value: "2006", label: "2006" },
    { value: "2007", label: "2007" },
    { value: "2008", label: "2008" },
    { value: "2009", label: "2009" },
    { value: "2010", label: "2010" },
  ];
  const monthOptions = [
    { value: "1", label: "1" },
    { value: "2", label: "2" },
    { value: "3", label: "3" },
    { value: "4", label: "4" },
    { value: "5", label: "5" },
    { value: "6", label: "6" },
    { value: "7", label: "7" },
    { value: "8", label: "8" },
    { value: "9", label: "9" },
    { value: "10", label: "10" },
    { value: "11", label: "11" },
    { value: "12", label: "12" },
  ];
  const dateOptions = [
    { value: "1", label: "1" },
    { value: "2", label: "2" },
    { value: "3", label: "3" },
    { value: "4", label: "4" },
    { value: "5", label: "5" },
    { value: "6", label: "6" },
    { value: "7", label: "7" },
    { value: "8", label: "8" },
    { value: "9", label: "9" },
    { value: "10", label: "10" },
    { value: "11", label: "11" },
    { value: "12", label: "12" },
    { value: "13", label: "13" },
    { value: "14", label: "14" },
    { value: "15", label: "15" },
    { value: "16", label: "16" },
    { value: "17", label: "17" },
    { value: "18", label: "18" },
    { value: "19", label: "19" },
    { value: "20", label: "20" },
    { value: "21", label: "21" },
    { value: "22", label: "22" },
    { value: "23", label: "23" },
    { value: "24", label: "24" },
    { value: "25", label: "25" },
    { value: "26", label: "26" },
    { value: "27", label: "27" },
    { value: "28", label: "28" },
    { value: "29", label: "29" },
    { value: "30", label: "30" },
    { value: "31", label: "31" },
  ];
  const cityOptions = mockRegions.map((region) => ({
    value: region,
    label: region,
  }));

  // 닉네임 사용 가능한지 확인, (임시로 설정) 강아지: 사용불가능한 닉네임
  const checkNicknameAvailability = async (nickname: string) => {
    const unavailableNicknames = ["강아지", ""];

    if (unavailableNicknames.includes(nickname)) {
      return false;
    }
    return true;
  };

  return (
    <S.Container>
      <S.TopContainer>
        <S.TopBar>
          <S.Title>회원가입</S.Title>
        </S.TopBar>
        <S.Icon>
          <BackButton onClick={() => navigate("/login")} />
        </S.Icon>
      </S.TopContainer>

      <S.FindOptions>
        <S.OptionsWrapper>
          <S.Trainer>
            <CheckButton />
            <PageLink $textcolor="#333333" to="/trainerSignup">
              {" "}
              트레이너
            </PageLink>
          </S.Trainer>
          <S.User>
            <CheckButton color="#40AD00" />
            회원
          </S.User>
        </S.OptionsWrapper>
        <S.LineWrapper></S.LineWrapper>
      </S.FindOptions>

      <S.Container1>
        <S.Detail1>
          <S.Header>
            성별 <S.Star>*</S.Star>
          </S.Header>
          <S.Content>
            <form>
              <SelectBox
                options={genderOptions}
                selectedValue={selectedGender}
                onChange={handleGenderChange}
                className="select1"
              />
            </form>
          </S.Content>
        </S.Detail1>

        <S.Detail2>
          <S.Header>
            닉네임 <S.Star>*</S.Star>
          </S.Header>
          <S.Content>
            <S.Box>
              <NicknameInput
                checkNicknameAvailability={checkNicknameAvailability}
                nickname={nickname}
                setNickname={setNickname}
              />
            </S.Box>
          </S.Content>
        </S.Detail2>

        <S.Detail3>
          <S.Header>
            생년월일 <S.Star>*</S.Star>
          </S.Header>
          <S.BirthdayContent>
            <form>
              <SelectBox
                options={yearOptions}
                selectedValue={selectedYear}
                onChange={handleYearChange}
                className="select1"
              />
            </form>
            <form>
              <SelectBox
                options={monthOptions}
                selectedValue={selectedMonth}
                onChange={handleMonthChange}
                className="select1"
              />
            </form>
            <form>
              <SelectBox
                options={dateOptions}
                selectedValue={selectedDate}
                onChange={handleDateChange}
                className="select1"
              />
            </form>
          </S.BirthdayContent>
        </S.Detail3>

        <S.Detail4>
          <S.Header>
            이름 <S.Star>*</S.Star>
          </S.Header>
          <S.Content>
            <UserInfoInput
              $width={"312px"}
              value={realName}
              onChange={handleNameChange}
            />
          </S.Content>
        </S.Detail4>
      </S.Container1>

      <S.Container2>
        <S.Detail1>
          <S.Header>
            ID <S.Star>*</S.Star>
          </S.Header>
          <S.Content>
            <UserInfoInput
              $width={"312px"}
              placeholder={"6-12자 영문"}
              value={id}
              onChange={handleIdChange}
            />
          </S.Content>
        </S.Detail1>

        <S.Detail2>
          <S.Header>
            비밀번호 <S.Star>*</S.Star>
          </S.Header>
          <S.Content>
            <S.PasswordContent>
              <PasswordInput
                password={password}
                setPassword={setPassword}
                confirmPassword={confirmPassword}
                setConfirmPassword={setConfirmPassword}
              />
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
                className="select2"
              />
            </form>
            <form>
              <SelectBox
                options={gymOptions}
                selectedValue={selectedGym}
                onChange={handleGymChange}
                className="select3"
              />
            </form>
          </S.LocationContent>
        </S.Detail1>

        <S.Detail2>
          <S.Header>키/몸무게</S.Header>
          <S.ContentWrapper>
            <UserInfoInput
              $width={"151px"}
              placeholder={"172cm"}
              value={height}
              onChange={handleHeightChange}
            />
            <UserInfoInput
              $width={"151px"}
              placeholder={"57kg"}
              value={weight}
              onChange={handleWeightChange}
            />
          </S.ContentWrapper>
        </S.Detail2>

        <S.NextContainer>
          <NextButton onClick={handleSignUp} $bgcolor="#40AD00">
            {/* <NextButton
            onClick={() => {
              navigate("/loading");
            }}
            $bgcolor="#40AD00"
          > */}
            다음
          </NextButton>
        </S.NextContainer>
      </S.Container3>
    </S.Container>
  );
};

export default UserSignUpPage;
