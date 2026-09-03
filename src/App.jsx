import { useState } from "react";
import Userlists from "./Components/Userlists";
import Usermodal from "./Components/Usermodal";
import { Route, Routes } from "react-router";
import LoginPage from "./pages/LoginPage";
import LayoutPage from "./pages/layout/LayoutPage";
import Homepage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";

function App() {
  return (
    <Routes>
      <Route path="login" element={<LoginPage />} />
      <Route element={<LayoutPage />}>
        <Route index path="/" element={<Homepage />} />

        <Route path="profile" element={<ProfilePage />} />
      </Route>
    </Routes>
  );
}

export default App;
