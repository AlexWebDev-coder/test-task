import { brands } from "../../../assets/brands";
import { products } from "../../../assets/products";
import FormCheckBox from "../../../components/form/checkbox";
import { Button } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/src/store";
import { getProducts } from "../../../store/products_slice";
import { useAppSelector } from "../../../hooks/use_action";

const SidebarFilter = () => {
  const dispatch = useDispatch<AppDispatch>();
  const variousGoods = useAppSelector((state) => state.products.products);

  const [selectedBrands, setSelectedBrands] = useState<number[]>([]);

  const handleBrandChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const brandId = parseInt(e.target.value);
    if (e.target.checked) {
      setSelectedBrands([...selectedBrands, brandId]);
    } else {
      setSelectedBrands(selectedBrands.filter((id) => id !== brandId));
    }
  };

  const handleApplyFilter = () => {
    const filtered = variousGoods.filter((product) =>
      selectedBrands.includes(product.brand)
    );
    return dispatch(getProducts(filtered));
  };
  const handleResetFilter = () => {
    dispatch(getProducts(products));
    setSelectedBrands([]);
  };

  return (
    <div>
      <h2 className="sidebar__title">Бренды</h2>
      <div className="brands">
        {brands.map((brand) => (
          <FormCheckBox
            key={brand.id}
            id={brand.id}
            sort={brand.sort}
            title={brand.title}
            code={brand.code}
            value={brand.id}
            checked={selectedBrands.includes(brand.id)}
            onChange={handleBrandChange}
          />
        ))}
      </div>
      <div className="acion__button">
        <Button onClick={handleApplyFilter} variant="contained" color="success">
          Применить
        </Button>
        <Button onClick={handleResetFilter} variant="outlined" color="error">
          Сбросить
        </Button>
      </div>
    </div>
  );
};

export default SidebarFilter;
