import { Box, Toolbar } from "@mui/material";
import { styled } from "@mui/material/styles";
import ListCard from "./ListCard";

const Content = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
}));

const Masonry = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  gridGap: theme.spacing(2),
  "& > *": {
    marginBottom: theme.spacing(2),
  },
}));
const Container = ({ products }) => {
  return (
    <Content sx={{ mt: "20px" }}>
      <Toolbar />
      <Masonry>
        {products.map((product) => (
          <ListCard product={product} />
        ))}
      </Masonry>
    </Content>
  );
};

export default Container;