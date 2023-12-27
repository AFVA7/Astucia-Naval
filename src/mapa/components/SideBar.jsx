import { Avatar, Box, Divider, Drawer, Toolbar, Typography } from "@mui/material"
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const SideBar = ({ drawerWidth = 240 }) => {

  const { displayName, photoURL } = useSelector(state => state.auth);
  return (
    <Box
      component='nav'
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
    >
      <Drawer
        variant="permanent"
        open
        sx={{
          display: { xs: 'block' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: drawerWidth,
            boxShadow: '4px 0px 10px rgba(0, 0, 0, 0.1)',
            marginLeft: 0,
          },
        }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div" ml={1}>
            {displayName}
          </Typography>
        </Toolbar>
        <Divider />

        {/* logo dentro de un circulo*/}
        <Box sx={{ p: 2, display: "flex", alignItems: "center", flexDirection: 'column' }}>
          <Avatar key={photoURL}  src={photoURL} alt="photo" sx={{ width: 80, height: 80, mb: 1 }} />

          <Link to="/profile" style={{ textDecoration: 'none', color: 'inherit' }}>
            <Box sx={{ p: 2, display: "flex", alignItems: "center", flexDirection: 'column' }}>
              <Typography variant="body2" noWrap>
                Editar Perfil
              </Typography>
            </Box>
          </Link>

        </Box>
      </Drawer>
    </Box>
  )
}
