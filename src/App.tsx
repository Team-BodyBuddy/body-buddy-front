import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/GlobalStyles";
import theme from "./styles/theme";
import { FluxProvider } from "./zustand/stores/FluxContext";
import UserPage from "./pages/User/UserPage/UserPage";
import MyPage from "./pages/User/UserMyPage/MyPage/MyPage";
import ExitPage from "./pages/ExitPage/ExitPage";
import LoginPage from "./pages/Login_Signup/LoginPage/LoginPage";
import FindIdPage from "./pages/Login_Signup/FindIdPage/FindIdPage";
import FindPasswordPage from "./pages/Login_Signup/FindPasswordPage/FindPasswordPage";
import LoadingPage from "./pages/Login_Signup/LoadingPage/LodingPage";
import TrainerSignUpPage from "./pages/Trainer/TrainerSignUpPage/TrainerSignUpPage";
import UserSignUpPage from "./pages/Login_Signup/UserSignUpPage/UserSignUpPage";
import RankingPage from "./pages/User/RankingPage/RankingPage";
import ExercisePage from "./pages/User/ExercisePage/ExercisePage";
import BodyBuddyPage from "./pages/User/BodyBuddyPage/BodyBuddyPage";
import PortfolioPage from "./pages/User/PortfolioPage/PortfolioPage";
import TrainerMainPage from "./pages/Trainer/TrainerMainPage/TrainerMainPage";
import TrainerMemberPage from "./pages/Trainer/TrainerMemberPage/TrainerMemberPage";
import TrainerPortfolio from "./pages/Trainer/TrainerPortfolio/TrainerPortfolio";
import TrainerMyPage from "./pages/Trainer/TrainerMyPage/TrainerMyPage";

const App: React.FC = () => {
    return (
        <FluxProvider>
            <ThemeProvider theme={theme}>
                <GlobalStyles />
                <Router
                    future={{
                        v7_startTransition: true,
                        v7_relativeSplatPath: true,
                    }}
                >
                    <Routes>
                        <Route path="/" element={<UserPage />} />
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/findId" element={<FindIdPage />} />
                        <Route path="/findPassword" element={<FindPasswordPage />} />
                        <Route path="/loading" element={<LoadingPage />} />
                        <Route path="/trainerSignup" element={<TrainerSignUpPage />} />
                        <Route path="/userSignup" element={<UserSignUpPage />} />
                        <Route path="/ranking" element={<RankingPage />} />
                        <Route path="/exercise" element={<ExercisePage />} />
                        <Route path="/my" element={<MyPage />} />
                        <Route path="/my/exit" element={<ExitPage />} />
                        <Route path="/bodybuddy" element={<BodyBuddyPage />} />
                        <Route path="/portfolio" element={<PortfolioPage />} />
                        <Route path="/trainer" element={<TrainerMainPage />} />
                        <Route path="/trainer/member" element={<TrainerMemberPage />} />
                        <Route path="/trainer/portfolio" element={<TrainerPortfolio />} />
                        <Route path="/trainer/my" element={<TrainerMyPage />} />
                    </Routes>
                </Router>
            </ThemeProvider>
        </FluxProvider>
    );
};

export default App;
