import { api } from "../../lib/axios";
import { Button, Typography } from "@mui/material";
import { useAppSelector } from "../../hooks/use_action";
import ShoppingCard from "../../components/common/shopping-card";

const ShoppingCart = () => {
  const shoppingCart = useAppSelector(
    (state) => state.shoppingCard.shoppingCard
  );

  const totalPrice = shoppingCart.reduce(
    (acc, current) => acc + current.regular_price.value * current.count,
    0
  );

  const handleOrder = async () => {
    try {
      const response = await api.post("/confirm.php", shoppingCart);

      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container__main">
      {!shoppingCart.length ? (
        <Typography variant="body1" color="text.secondary">
          Корзина пуста
        </Typography>
      ) : (
        <>
          <div className="sidebar">
            <Typography variant="body2" color="text.secondary">
              Сумма товаров: {totalPrice.toFixed(2)} (USD)
            </Typography>
            <Button onClick={handleOrder} variant="outlined" color="primary">
              Оформить заказ
            </Button>
          </div>
          <div className="main">
            {shoppingCart.map((product) => (
              <ShoppingCard
                key={product.id}
                id={product.id}
                type={product.type}
                sku={product.sku}
                title={product.title}
                regular_price={product.regular_price}
                image={product.image}
                brand={product.brand}
                quantity={product.quantity}
                count={product.count}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ShoppingCart;
