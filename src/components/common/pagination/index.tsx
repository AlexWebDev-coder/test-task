import { Pagination } from "@mui/material";
import { useState } from "react";
import { IProducts } from "@/src/assets/products";

interface IProps {
  count: IProducts[];
}

const AppPagination: React.FC<IProps> = (props) => {
  const { count } = props;

  const [page, setPage] = useState(1);
  const productsPerPage = 6;
  const totalProducts = count.length;
  const totalPages = Math.ceil(totalProducts / productsPerPage);

  const handleChangePage = (event: any, value: number) => {
    setPage(value);
  };

  const startProduct = (page - 1) * productsPerPage;
  const endProduct = startProduct + productsPerPage;
  const currentProducts = count.slice(startProduct, endProduct);

  return (
    <div>
      <Pagination
        count={totalPages}
        page={page}
        onChange={handleChangePage}
        color="primary"
      />
    </div>
  );
};

export default AppPagination;
