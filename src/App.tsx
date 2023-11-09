import { ThemeProvider } from "@/Context/Theme-Provider";

import HeaderNav from "./Components/HeaderNav";
import DashboardExample from "./Components/Tremor/DashboardComponent";
import { Route, Routes } from "react-router-dom";
import Login from "./Components/Pages/Auth/Login";

function App() {
  return (
    <div className="app_wrapper">
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <HeaderNav />
        <Routes>
          <Route path="/" element={<DashboardExample />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
