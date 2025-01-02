import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/GlobalStyles";
import theme from "./styles/theme";
import { FluxProvider } from "./stores/FluxContext";
import UserPage from "./pages/UserPage/UserPage";
import AdminPage from "./pages/AdminPage/AdminPage";
import RankingBodyBudyPage from "./pages/RankingPage/RankingBodyBudyPage";

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
                        <Route path="/admin" element={<AdminPage />} />
                        <Route path="/ranking" element={<RankingBodyBudyPage/>}/>
                    </Routes>
                </Router>
            </ThemeProvider>
        </FluxProvider>
    );
};

export default App;
