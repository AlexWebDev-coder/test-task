import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { IProps } from "../detail-view-product/types";
import { MdShoppingCartCheckout } from "react-icons/md";
import { Button, IconButton } from "@mui/material";
import DetailViewProduct from "../detail-view-product";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/src/store";
import { postProducts } from "../../../store/shoppingcard_slice";
import { useLocation } from "react-router-dom";
import { useState } from "react";

const ProductCard: React.FC<IProps> = (props) => {
  const dispatch = useDispatch<AppDispatch>();
  const { pathname } = useLocation();
  const [count, setCount] = useState<number>(1);

  const handleAddToShopCard = () => {
    dispatch(postProducts({ ...props, count }));
  };

  const handlePlusCount = () => {
    if (count === props.quantity) return;
    setCount((prev) => prev + 1);
  };
  const handleMinusCount = () => {
    if (count === 1) return;
    setCount((prev) => prev - 1);
  };

  return (
    <Card key={props.id} sx={{ maxWidth: 300 }}>
      <CardMedia sx={{ height: 250 }} image={props.image} title={props.title} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.title}
        </Typography>
        <Typography variant="body2" color="CaptionText">
          Кол-во товара: {props.quantity} шт
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.regular_price.value}({props.regular_price.currency})
        </Typography>
        <div className="product__count">
          <Button onClick={handleMinusCount}>-</Button>
          <Typography variant="body2" color="text.secondary">
            {count}
          </Typography>
          <Button onClick={handlePlusCount}>+</Button>
        </div>
      </CardContent>
      <CardActions>
        {/* Detail Modal product */}
        <DetailViewProduct {...props} />
        {pathname === "/" && (
          <IconButton onClick={handleAddToShopCard} size="small">
            <MdShoppingCartCheckout size="30px" />
          </IconButton>
        )}
      </CardActions>
    </Card>
  );
};

export default ProductCard;
