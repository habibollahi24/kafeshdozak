import React from "react";
import { useCart } from "../context/cart/CartContext";
import { MdShoppingBag, MdCheckCircleOutline } from "react-icons/md";
import { GiPriceTag, GiTrashCan } from "react-icons/gi";
const CartDetails = () => {
  const { state, dispatch } = useCart();
  const cart = state.cart;

  const decrementhandler = (product) => {
    dispatch({ type: "DECREMENT", payload: product });
  };
  const incrementHandler = (product) => {
    dispatch({ type: "INCREMENT", payload: product });
  };

  return (
    <div className="md:w-2/3 p-4 space-y-8">
      {cart.map((product) => {
        const { _id, name, quantity, image, price, description, discount, offPrice } = product;
        return (
          <div key={_id} className="grid grid-cols-1 md:grid-cols-3 gap-3 bg-white  shadow-xl  p-6 md:mt-8 rounded-xl ">
            <div className=" rounded-3xl overflow-hidden shadow-md p-4 bg-white">
              <img src={image} alt={name} className="w-full h-full" />
            </div>
            <div className="  flex flex-col justify-between p-4">
              <div className="text-2xl font-semibold text-gray-700 mt-1">{name}</div>
              <div>
                {description.map((des, index) => {
                  return (
                    <div className="text-right  my-1 flex justify-end items-center font-semibold text-gray-700" key={index}>
                      <span className="inline-block">{des.support}</span>
                      <span className="inline-block text-xl">
                        <MdCheckCircleOutline />
                      </span>
                    </div>
                  );
                })}
              </div>
              <div>
                <div className="flex items-center font-semibold text-3xl text-green-800 relative ">
                  <div className="">
                    <GiPriceTag />
                  </div>
                  <div className="p-1 ">
                    <div>${price}</div>
                  </div>
                  <div className={`${discount > 0 && "w-32 h-[3px] bg-gray-600  absolute  left-[-15px]"}`}></div>
                </div>
                <div className="font-semibold text-lg text-gray-700">
                  {discount > 0 && (
                    <div className="bg-green-800 inline-block text-white text-sm rounded-sm">Discount: {discount}% </div>
                  )}
                  <div>
                    <span>Total Price :</span>
                    <span className="text-green-800 text-xl">${offPrice * quantity}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className=" flex flex-col space-y-2 items-center w-full  md:w-1/2 mx-auto  justify-center text-center">
              <div className="flex text-secondary items-center bg-gold rounded-md p-1">
                <div className="  w-6 h-6  font-semibold ">{quantity}</div>
                <div className="ml-1 text-xl">
                  <MdShoppingBag />
                </div>
              </div>
              <button
                onClick={() => incrementHandler(product)}
                className="text-secondary w-full shadow-md rounded-md bg-gold p-2 text-lg font-semibold border-2 border-gold"
              >
                Increse
              </button>
              <button
                onClick={() => decrementhandler(product)}
                className=" w-full rounded-md p-2 text-lg font-semibold text-primary border-2 border-primary"
              >
                {quantity === 1 ? (
                  <div className="flex justify-center text-2xl">
                    <GiTrashCan />
                  </div>
                ) : (
                  <span>Reduce</span>
                )}
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CartDetails;
