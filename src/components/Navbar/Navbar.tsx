import MenuIcon from "@mui/icons-material/Menu";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
const Navbar = () => {
  return (
    <AppBar position="fixed">
      <Toolbar variant="dense">
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div">
          Movie
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
