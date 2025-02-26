import { constants } from "../utils/constants";
import { styled } from "@mui/material/styles";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";

const DrawerStyled = styled(Drawer)(({ theme }) => ({
  width: constants.drawerWidth,
  flexShrink: 0,
  [`& .MuiDrawer-paper`]: {
    width: constants.drawerWidth,
    boxSizing: "border-box",
  },
}));

const NavigationDrawer = ({ isDrawerOpen, handleDrawerClose }) => {
  return (
    <DrawerStyled open={isDrawerOpen} onClose={handleDrawerClose}>
      <Toolbar />
      <List>
        {constants.navigation.map((item) => (
          <ListItem key={item.id} disablePadding>
            <ListItemButton>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </DrawerStyled>
  );
};
export default NavigationDrawer;
