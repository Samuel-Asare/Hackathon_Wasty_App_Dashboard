import { ThemeProvider } from "@/Context/Theme-Provider";

import HeaderNav from "./Components/HeaderNav";
import DashboardExample from "./Components/Tremor/DashboardComponent";
import { Route, Routes, useLocation } from "react-router-dom";
import Login from "./Components/Pages/Auth/Login";

function App() {
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  const location = useLocation();

  const showHeaderNav = location.pathname !== "/login";

  return (
    <div className="app_wrapper">
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        {showHeaderNav && <HeaderNav />}
        <Routes>
          <Route path="/" element={user ? <DashboardExample /> : <Login />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
