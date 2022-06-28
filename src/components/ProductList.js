import React, { useEffect, useState } from "react";
// import { products } from "../data";
import { getProducts } from "../services/getProducts";
import Product from "./Product";
const ProductList = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getAllProducts = async () => {
      const { data } = await getProducts();
      setProducts(data);
      console.log(data);
    };
    getAllProducts();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 lg:grid-cols-3 mt-10">
      {products.map((product) => {
        return <Product product={product} key={product._id} />;
      })}
    </div>
  );
};

export default ProductList;
