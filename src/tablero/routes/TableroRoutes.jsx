import { Navigate, Route, Routes } from "react-router-dom"
import { TableroPage } from "../pages/TableroPage"
import { ProfileRoutes } from "../../profile/routes/ProfileRoutes"

export const TableroRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<TableroPage />} />
            <Route path="profile/*" element={<ProfileRoutes />} />
            <Route path="/*" element={<Navigate to='/' />} />

        </Routes>
    )
}
