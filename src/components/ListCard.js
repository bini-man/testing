import { Typography, Card, CardMedia, CardContent } from "@mui/material";
const ListCard = ({ product }) => {
  return (
    <Card key={product.id} sx={{ display: "flex", flexDirection: "column" }}>
      <CardMedia
        component="img"
        height="auto"
        image={product.image}
        alt={product.title}
        sx={{ flexGrow: 1 }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Price: ${product.price}
        </Typography>
      </CardContent>
    </Card>
  );
};
export default ListCard;
