import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/GlobalStyles";
import theme from "./styles/theme";
import { FluxProvider } from "./stores/FluxContext";
import UserPage from "./pages/UserPage/UserPage";
import MyPage from "./pages/MyPage/MyPage";
import ExitPage from "./pages/ExitPage/ExitPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import FindIdPage from "./pages/FindIdPage/FindIdPage";
import FindPasswordPage from "./pages/FindPasswordPage/FindPasswordPage";
import LoadingPage from "./pages/LoadingPage/LodingPage";
import TrainerSignUpPage from "./pages/TrainerSignUpPage/TrainerSignUpPage";
import UserSignUpPage from "./pages/UserSignUpPage/UserSignUpPage";
import RankingPage from "./pages/RankingPage/RankingPage";
import ExercisePage from "./pages/ExercisePage/ExercisePage";
import BodyBuddyPage from "./pages/BodyBuddyPage/BodyBuddyPage";
import PortfolioPage from "./pages/PortfolioPage/PortfolioPage";
import TrainerMainPage from "./pages/TrainerMainPage/TrainerMainPage";
import TrainerMemberPage from "./pages/TrainerMemberPage/TrainerMemberPage";
import TrainerPortfolio from "./pages/TrainerPortfolio/TrainerPortfolio";

const App: React.FC = () => {
    return (
        <FluxProvider>
            <ThemeProvider theme={theme}>
                <GlobalStyles />
                <Router future={{
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
                        <Route path="/trainer" element={<TrainerMainPage/>}/>
                        <Route path="/trainer/member" element={<TrainerMemberPage/>}/>
                        <Route path="/trainer/portfolio" element={<TrainerPortfolio />} />
                    </Routes>
                </Router>
            </ThemeProvider>
        </FluxProvider>
    );
};

export default App;
