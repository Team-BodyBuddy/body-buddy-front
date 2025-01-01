import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/GlobalStyles";
import theme from "./styles/theme";
import { FluxProvider } from "./stores/FluxContext";
import UserPage from "./pages/UserPage/UserPage";
import AdminPage from "./pages/AdminPage/AdminPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import FindIdPage from "./pages/FindIdPage/FindIdPage";
import FindPasswordPage from "./pages/FindPasswordPage/FindPasswordPage";
import LoadingPage from "./pages/LoadingPage/LodingPage";
import TrainerSignUpPage from "./pages/TrainerSignUpPage/TrainerSignUpPage";
import UserSignUpPage from "./pages/UserSignUpPage/UserSignUpPage";

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
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/findId" element={<FindIdPage />} />
                        <Route path="/findPassword" element={<FindPasswordPage />} />
                        <Route path="/loading" element={<LoadingPage />} />
                        <Route path="/trainerSignup" element={<TrainerSignUpPage />} />
                        <Route path="/userSignup" element={<UserSignUpPage />} />
                    </Routes>
                </Router>
            </ThemeProvider>
        </FluxProvider>
    );
};

export default App;
