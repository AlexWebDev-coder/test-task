import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { products } from "../../../assets/products";
import { AppDispatch } from "@/src/store";
import { getProducts } from "../../../store/products_slice";
import ProductCard from "../../../components/common/product-card";
import SidebarFilter from "../sidebar-filter";
import { useAppSelector } from "../../../hooks/use_action";
// import AppPagination from "../../../components/common/pagination";
import { Pagination } from "@mui/material";

const HomeContainer = () => {
  const dispatch = useDispatch<AppDispatch>();
  const variousGoods = useAppSelector((state) => state.products.products);

  useEffect(() => {
    dispatch(getProducts(products));
  }, []);

  const [page, setPage] = useState(1);
  const productsPerPage = 6;
  const totalProducts = variousGoods.length;
  const totalPages = Math.ceil(totalProducts / productsPerPage);

  const handleChangePage = (event: any, value: number) => {
    setPage(value);
  };

  const startProduct = (page - 1) * productsPerPage;
  const endProduct = startProduct + productsPerPage;
  const currentProducts = variousGoods.slice(startProduct, endProduct);

  return (
    <>
      <div className="container__main">
        <div className="sidebar">
          <SidebarFilter />
        </div>
        <div className="main">
          {currentProducts.map((product) => (
            <ProductCard
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
      </div>
      <div className="pagination">
        {totalPages > 1 && (
          <Pagination
            count={totalPages}
            page={page}
            onChange={handleChangePage}
            color="primary"
          />
        )}
      </div>
    </>
  );
};

export default HomeContainer;
