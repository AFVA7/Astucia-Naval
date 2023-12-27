import { Navigate, Route, Routes } from "react-router-dom"
import { MapaPage } from "../pages/MapaPage"
import { ProfileRoutes } from "../../profile/routes/ProfileRoutes"

export const MapaRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<MapaPage />} />
            <Route path="profile/*" element={<ProfileRoutes />} />
            <Route path="/*" element={<Navigate to='/' />} />

        </Routes>
    )
}
