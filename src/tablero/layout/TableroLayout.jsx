import { Box, Toolbar } from "@mui/material"
import { Navbar } from "../components/Navbar";
import { SideBar } from "../components";

const drawerWidth = 240;
export const TableroLayout = ({ children }) => {
    return (
        <Box sx={{ display: 'flex' }} className="animate__animated animate__fadeIn animated__faster">
            <Navbar drawerWidth={drawerWidth} />
            <SideBar drawerWidth={drawerWidth} />
            <Box
                component='main'
                sx={{ flexGrow: 1, p: 3 }}
            >
                <Toolbar />
                {children}
            </Box>
        </Box>
    )
}
