import MailIcon from "@mui/icons-material/Mail";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import BookmarkBorderIcon from '@mui/icons-material/Bookmark';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
export const constants = {
  drawerWidth: 240,
  productAPI: process.env.REACT_APP_FAKESTORE_API,
  title: "List Display",
  navigation: [
    { name: "Cart", icon: <ShoppingCartIcon/>, id: 1 },
    { name: "Message", icon: <MailIcon/>, id: 2 },
    { name: "Order", icon: <BookmarkBorderIcon/>, id: 3 },
    { name: "Sign out", icon: <ExitToAppIcon/>, id: 4 },
  ],
  errorMessage: "Error fetching data",
};
