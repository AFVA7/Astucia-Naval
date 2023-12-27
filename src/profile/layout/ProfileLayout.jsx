import { Box, Toolbar, Typography } from "@mui/material";
import { Navbar, SideBar } from "../../mapa/components";

const drawerWidth = 240;

export const ProfileLayout = ({ children }) => {
    return (
        <Box sx={{ display: 'flex' }} className="animate__animated animate__fadeIn animate__faster">
            <Navbar drawerWidth={drawerWidth} />
            <SideBar drawerWidth={drawerWidth} />
            <Box
                component='main'
                sx={{ flexGrow: 1, p: 3 }}
            >
                <Toolbar />
                <Typography variant="h5" component="div" sx={{ mb: 2 }}>
                    Editar Perfil
                </Typography>
                {children}
            </Box>
        </Box>
    );
};
