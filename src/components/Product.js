import React from "react";
import { useCart } from "../context/cart/CartContext";
import { GiPriceTag, GiShoppingBag } from "react-icons/gi";
import { toast } from "react-toastify";

const Product = ({ product }) => {
  const {
    state: { cart },
    dispatch,
  } = useCart();

  const addTocart = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
    toast.success(`${product.name} add to cart :)`);
  };

  const { name, image, price, discount } = product; //Destructure
  return (
    <div className="relative  bg-white shadow-xl rounded-xl overflow-hidden  ">
      <div className=" bg-white p-8 flex justify-center h-80">
        {discount !== 0 && (
          <div className="absolute top-3  left-3 flex items-center text-base font-semibold bg-primary text-white px-1 rounded-md">
            <div className="mr-1">{discount}% Off</div>
          </div>
        )}
        <img src={image} alt={name} className="w-full h-auto object-cover" />
      </div>
      <div className="p-4  text-white font-semibold    ">
        <div className="bg-gold p-5 rounded-3xl  h-full shadow">
          <div className="flex justify-between text-xl  text-pencil">
            <div>{name}</div>
            <div className="flex items-center font-semibold text-xl ">
              <div>
                <GiPriceTag />
              </div>
              <div>
                {price}
                <span className="text-xs">$</span>
              </div>
            </div>
          </div>
          <div className="my-4 text-secondary">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro, odio.</p>
          </div>

          <button
            onClick={() => addTocart(product)}
            className="text-center w-full flex items-center justify-center bg-gray-50 rounded-lg py-4 px-4 text-secondary font-semibold  shadow-md  "
          >
            <span className="inline-block">
              <GiShoppingBag />
            </span>
            <span className="inline-block">{cart.find((c) => c._id === product._id) ? "In Cart" : "Add To Cart"}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
