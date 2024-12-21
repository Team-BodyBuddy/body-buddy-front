import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/GlobalStyles";
import theme from "./styles/theme";
import { FluxProvider } from "./stores/FluxContext"; // FluxProvider 추가
import UserPage from "./pages/UserPage/UserPage";
import AdminPage from "./pages/AdminPage/AdminPage";

const App: React.FC = () => {
    return (
        <FluxProvider>
            <ThemeProvider theme={theme}>
                <GlobalStyles />
                <Router>
                    <Routes>
                        <Route path="/" element={<UserPage />} />
                        <Route path="/admin" element={<AdminPage />} />
                    </Routes>
                </Router>
            </ThemeProvider>
        </FluxProvider>
    );
};

export default App;
