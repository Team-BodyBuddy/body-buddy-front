//트레이너 회원가입 페이지
import * as S from "./Styles";
import { LeftArrow } from "../../components/icons";
import { CheckButton1 } from "../../components/icons";
import { CheckButton2 } from "../../components/icons";
// import { ArrowDown } from "../../components/icons"; 이건 어떻게 추가해야 하지

const TrainerSignUpPage: React.FC = () => {

    return (
        <S.Container>
            <S.TopContainer>
                <S.TopBar>
                    <S.Icon><LeftArrow></LeftArrow></S.Icon>
                    <S.Title>회원가입</S.Title>
                </S.TopBar>
            </S.TopContainer>
            
            <S.FindOptions>
                <S.OptionsWrapper>
                    <S.Trainer>
                        <CheckButton2></CheckButton2>
                        트레이너
                    </S.Trainer>
                    <S.User>
                        <CheckButton1></CheckButton1>
                        회원
                    </S.User>
                </S.OptionsWrapper>
                <S.LineWrapper></S.LineWrapper>
            </S.FindOptions>

            <S.Container1>
                <S.Detail1>
                    <S.Header>성별 <S.Star>*</S.Star></S.Header>
                    <S.Content>
                        <form>
                            <select id="gender" name="gender"
                                    style={{
                                            paddingLeft:'10px',
                                            borderRadius: '7px',
                                            border: '2px solid #DADADA',
                                            width: '94px',
                                            height: '43px',
                                            fontSize: '15px',
                                            fontWeight: '500',
                                            lineHeight: '29px',
                                            textAlign: 'left',
                                        }}>
                            <option value="m">남성</option>
                            <option value="f">여성</option>
                            </select>
                        </form>
                    </S.Content>
                </S.Detail1>

                <S.Detail2>
                    <S.Header>생년월일 <S.Star>*</S.Star></S.Header>
                    <S.BirthdayContent>
                        <form>
                            <select id="birth" name="birth"
                            style={{
                                paddingLeft:'10px',
                                borderRadius: '7px',
                                border: '2px solid #DADADA',
                                width: '94px',
                                height: '43px',
                                fontSize: '15px',
                                fontWeight: '500',
                                lineHeight: '29px',
                                textAlign: 'left',
                            }}>
                            <option value="2000">2000</option>
                            <option value="2001">2001</option>
                            <option value="2002">2002</option>
                            <option value="2003">2003</option>
                            </select>
                        </form>
                        <form>
                            <select id="month" name="month"
                            style={{
                                paddingLeft:'10px',
                                borderRadius: '7px',
                                border: '2px solid #DADADA',
                                width: '94px',
                                height: '43px',
                                fontSize: '15px',
                                fontWeight: '500',
                                lineHeight: '29px',
                                textAlign: 'left',
                            }}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            </select>
                        </form>
                        <form>
                            <select id="day" name="day"
                            style={{
                                paddingLeft:'10px',
                                borderRadius: '7px',
                                border: '2px solid #DADADA',
                                width: '94px',
                                height: '43px',
                                fontSize: '15px',
                                fontWeight: '500',
                                lineHeight: '29px',
                                textAlign: 'left',
                            }}>
                            <option value="28">28</option>
                            <option value="29">29</option>
                            <option value="30">30</option>
                            <option value="31">31</option>
                            </select>
                        </form>
                    </S.BirthdayContent>
                </S.Detail2>

                <S.Detail3>
                    <S.Header>이름 <S.Star>*</S.Star></S.Header>
                    <S.Content>
                        <input style={{
                                        width: '312px',
                                        height: '43px',
                                        paddingLeft: '10px',
                                        borderRadius: '7px',
                                        border: '2px solid #DADADA',
                                    }}/>
                    </S.Content>
                </S.Detail3>
            </S.Container1>


            <S.Container2>
                <S.Detail1>
                    <S.Header>ID <S.Star>*</S.Star></S.Header>
                    <S.Content>
                        <input style={{
                                        width: '312px',
                                        height: '43px',
                                        paddingLeft: '10px',
                                        borderRadius: '7px',
                                        border: '2px solid #DADADA',
                                    }}/>
                    </S.Content>    
                </S.Detail1>

                <S.Detail2>
                    <S.Header>비밀번호 <S.Star>*</S.Star></S.Header>
                    <S.Content>
                        <S.PasswordContent>
                            <input style={{
                                            width: '312px',
                                            height: '43px',
                                            paddingLeft: '10px',
                                            borderRadius: '7px',
                                            border: '2px solid #DADADA'
                                        }}
                                            placeholder="비밀번호를 입력해 주세요."
                                        />
                            <input style={{
                                            width: '312px',
                                            height: '43px',
                                            paddingLeft: '10px',
                                            borderRadius: '7px',
                                            border: '2px solid #DADADA',
                                        }}
                                        placeholder="비밀번호를 재입력해 주세요."
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
                            <select id="location" name="location"
                            style={{
                                paddingLeft:'10px',
                                borderRadius: '7px',
                                border: '2px solid #DADADA',
                                width: '117px',
                                height: '43px',
                                fontSize: '15px',
                                fontWeight: '500',
                                lineHeight: '29px',
                                textAlign: 'left',
                            }}>
                                <option value="" disabled selected>지역</option>
                                <option value="서울">서울</option>
                                <option value="경기">경기</option>
                                <option value="인천">인천</option>
                                <option value="제주도">제주도</option>
                            </select>
                        </form>
                        <form>
                            <select id="gym" name="gym"
                            style={{
                                paddingLeft:'10px',
                                borderRadius: '7px',
                                border: '2px solid #DADADA',
                                width: '186px',
                                height: '43px',
                                fontSize: '15px',
                                fontWeight: '500',
                                lineHeight: '29px',
                                textAlign: 'left',
                            }}>
                                <option value="" disabled selected>Gym 선택</option>
                                <option value="gym1">gym1</option>
                                <option value="gym2">gym2</option>
                                <option value="gym3">gym3</option>
                                <option value="gym4">gym4</option>
                            </select>
                        </form>
                    </S.LocationContent>
                </S.Detail1>

                <S.Detail2>
                    <S.Header>키/몸무게</S.Header>
                    <S.ContentWrapper>
                        <input style={{
                                        width: '148px',
                                        height: '43px',
                                        paddingLeft: '10px',
                                        borderRadius: '7px',
                                        border: '2px solid #DADADA',
                                    }} />
                        <input style={{
                                        width: '156px',
                                        height: '43px',
                                        paddingLeft: '10px',
                                        borderRadius: '7px',
                                        border: '2px solid #DADADA',
                                    }} />
                    </S.ContentWrapper>
                </S.Detail2>

                <S.Detail3>
                    <button style={{
                                    width: '312px',
                                    height: '46px',
                                    textAlign: 'center',
                                    padding: '16px 24px',
                                    gap: '8px',
                                    borderRadius: '46px',
                                    border: 'none',
                                    backgroundColor: '#40AD00',
                                    color:'white',
                                    marginTop:'20px',
                                    marginBottom:'40px',
                                }}>다음</button>
                </S.Detail3>
            </S.Container3>
        </S.Container>
    );
};

export default TrainerSignUpPage;