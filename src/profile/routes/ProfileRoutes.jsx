import { Navigate, Route, Routes } from "react-router-dom";
import { ProfilePage } from "../pages/ProfilePage";

export const ProfileRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<ProfilePage />} />
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};
