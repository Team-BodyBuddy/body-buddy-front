import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/GlobalStyles";
import theme from "./styles/theme";
import { FluxProvider } from "./stores/FluxContext";
import UserPage from "./pages/UserPage/UserPage";
import UserMyPage from "./pages/UserMyPage/UserMyPage";
import RankingPage from "./pages/RankingPage/RankingPage";
import ExercisePage from "./pages/ExercisePage/ExercisePage";
import BodyBuddyPage from "./pages/BodyBuddyPage/BodyBuddyPage";
import PortfolioPage from "./pages/PortfolioPage/PortfolioPage";

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
                        <Route path="/ranking" element={<RankingPage />} />
                        <Route path="/exercise" element={<ExercisePage />} />
                        <Route path="/userMyPage" element={<UserMyPage />} />
                        <Route path="/bodybuddy" element={<BodyBuddyPage />} />
                        <Route path="/portfolio" element={<PortfolioPage />} />
                    </Routes>
                </Router>
            </ThemeProvider>
        </FluxProvider>
    );
};

export default App;
