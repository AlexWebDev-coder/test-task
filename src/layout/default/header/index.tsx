import { useAppSelector } from "../../../hooks/use_action";
import { Badge, BadgeProps, IconButton, styled } from "@mui/material";
import { MdShoppingCartCheckout } from "react-icons/md";
import { Link } from "react-router-dom";
import { VscHome } from "react-icons/vsc";
import { useLocation } from "react-router-dom";

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

const DefaultLayoutHeader = () => {
  const { pathname } = useLocation();

  const shopCard = useAppSelector((state) => state.shoppingCard.shoppingCard);

  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo">
          <h1 className="header__logo_title">Logo</h1>
        </div>
        <div className="header__action">
          <div className="header__action_icons">
            {pathname === "/" && (
              <Link to={"/shopping-cart"}>
                <IconButton size="small">
                  <StyledBadge badgeContent={shopCard.length} color="secondary">
                    <MdShoppingCartCheckout size="30px" />
                  </StyledBadge>
                </IconButton>
              </Link>
            )}
            {pathname === "/shopping-cart" && (
              <Link to={"/"}>
                <IconButton size="small">
                  <VscHome size="30px" />
                </IconButton>
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default DefaultLayoutHeader;
