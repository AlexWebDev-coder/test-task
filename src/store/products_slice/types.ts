export interface IState {
  products: IDataProducts[];
}

interface IDataProducts {
  type: string;
  id: number;
  sku: string;
  title: string;
  regular_price: {
    currency: string;
    value: number;
  };
  image: string;
  brand: number;
  quantity: number;
  count: number;
}
