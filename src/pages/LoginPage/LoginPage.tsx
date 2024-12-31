// 로그인 페이지
import React, { useContext, useState } from "react";
import * as S from "./Styles";
import { Logo } from "../../components/icons";

const LoginPage: React.FC = () => {

    return (
        <S.Container>
            <S.Intro>
                <S.IntroText>당신의 가장 가까운 친구,</S.IntroText>
                <S.Title><Logo></Logo></S.Title>
            </S.Intro>

            <S.CenterContainer>
                <S.InputContainer>
                        <S.Text>아이디</S.Text>
                        <S.Input>
                            <input
                                style={{
                                    height: '47px',
                                    width: '100%',
                                    border: '1px solid #ccc',
                                    borderRadius: '86px',
                                    padding: '10px',
                                    color: '#DEDEDE',
                                    fontSize: '14px',
                                }}
                                placeholder="   아이디를 입력해 주세요"
                            />
                        </S.Input>
                    </S.InputContainer>

                    <S.InputContainer>
                        <S.Text>비밀번호</S.Text>
                        <S.Input>
                            <input
                                style={{
                                    height: '47px',
                                    width: '100%',
                                    border: '1px solid #ccc',
                                    borderRadius: '86px',
                                    padding: '10px',
                                    color: '#DEDEDE',
                                    fontSize: '14px',
                                }}
                                placeholder="   비밀번호를 입력해 주세요"
                            />
                        </S.Input>
                    </S.InputContainer>

                    <S.Button>
                        <button
                            style={{
                                height: '47px',
                                width: '100%',
                                backgroundColor: '#40AD00',
                                color:'white',
                                border: '1px solid #ccc',
                                borderRadius: '86px',
                                padding: '10px',
                            }}>로그인</button>
                    </S.Button>
            </S.CenterContainer>

            <S.Find>아이디/비밀번호 찾기</S.Find>
            <S.Signup>회원 가입</S.Signup>
        </S.Container>
    );
};

export default LoginPage;
