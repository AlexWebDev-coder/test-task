export interface IProducts {
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

const img1 = require("../assets/images/1.png");
const img2 = require("../assets/images/2.png");
const img3 = require("../assets/images/3.png");
const img4 = require("../assets/images/4.png");
const img5 = require("../assets/images/5.png");
const img6 = require("../assets/images/6.png");
const img7 = require("../assets/images/7.png");
const img8 = require("../assets/images/8.png");
const img9 = require("../assets/images/9.png");

export const products = [
  {
    type: "simple",
    id: 1,
    sku: "s1",
    title: "Product 1",
    regular_price: {
      currency: "USD",
      value: 27.12,
    },
    image: img1,
    brand: 9,
    quantity: 7,
    count: 1,
  },
  {
    type: "simple",
    id: 2,
    sku: "s2",
    title: "Product 2",
    regular_price: {
      currency: "USD",
      value: 36.87,
    },
    image: img2,
    brand: 8,
    quantity: 3,
    count: 1,
  },
  {
    type: "simple",
    id: 3,
    sku: "s3",
    title: "Product 3",
    regular_price: {
      currency: "USD",
      value: 28.91,
    },
    image: img3,
    brand: 4,
    quantity: 18,
    count: 1,
  },
  {
    type: "simple",
    id: 4,
    sku: "s4",
    title: "Product 4",
    regular_price: {
      currency: "USD",
      value: 41.23,
    },
    image: img4,
    brand: 7,
    quantity: 2,
    count: 1,
  },
  {
    type: "simple",
    id: 5,
    sku: "s5",
    title: "Product 5",
    regular_price: {
      currency: "USD",
      value: 88.0,
    },
    image: img5,
    brand: 3,
    quantity: 9,
    count: 1,
  },
  {
    type: "simple",
    id: 6,
    sku: "s6",
    title: "Product 6",
    regular_price: {
      currency: "USD",
      value: 127.41,
    },
    image: img6,
    brand: 6,
    quantity: 11,
    count: 1,
  },
  {
    type: "simple",
    id: 7,
    sku: "s7",
    title: "Product 7",
    regular_price: {
      currency: "USD",
      value: 123.4,
    },
    image: img7,
    brand: 5,
    quantity: 32,
    count: 1,
  },
  {
    type: "simple",
    id: 8,
    sku: "s8",
    title: "Product 8",
    regular_price: {
      currency: "USD",
      value: 92.32,
    },
    image: img8,
    brand: 1,
    quantity: 42,
    count: 1,
  },
  {
    type: "simple",
    id: 9,
    sku: "s9",
    title: "Product 9",
    regular_price: {
      currency: "USD",
      value: 53.4,
    },
    image: img9,
    brand: 2,
    quantity: 56,
    count: 1,
  },
];
