import { Toolbar, AppBar, Typography, IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";
import { constants } from "../utils/constants";
import MenuIcon from "@mui/icons-material/Menu";
const AppBarStyled = styled(AppBar)(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
}));
const NavigationHeader = ({ isDrawerOpen, handleDrawerOpen }) => {
  return (
    <AppBarStyled position="fixed" open={isDrawerOpen}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerOpen}
          sx={{ mr: 2, ...(isDrawerOpen && { display: "none" }) }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap component="div">
          {constants.title}
        </Typography>
      </Toolbar>
    </AppBarStyled>
  );
};
export default NavigationHeader;