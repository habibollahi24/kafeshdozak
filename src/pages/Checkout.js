import React from "react";
import { useAuth } from "../context/Auth/AuthContext";
import { useCart } from "../context/cart/CartContext";
import { Link } from "react-router-dom";

const Checkout = () => {
  const { auth } = useAuth();
  const { state } = useCart();

  return (
    <div className="grid grid-cols-1 md:grid-cols-5 my-8 gap-8 ">
      <div className="md:col-span-2 bg-white rounded-xl shadow-xl p-8 space-y-6 text-gray-700 text-lg font-semibold h-max">
        <div className="text-2xl">Your Data</div>
        <div>Name: {auth.name}</div>
        <div>Email: {auth.email}</div>
        <div>Phonenumber: {auth.phoneNumber}</div>
      </div>
      {state.cart.length === 0 ? (
        <Link to="/">Go to Shopping</Link>
      ) : (
        <div className="md:col-span-3 bg-white rounded-xl shadow-xl p-8 space-y-6 text-gray-700 text-lg font-semibold h-max">
          <div className="flex items-center justify-between">
            <div>
              {state.cart.map((c) => {
                return (
                  <div className="flex text-base" key={c.name}>
                    <div>{c.name} * </div>
                    <div> {c.quantity} = </div>
                    <div>${c.offPrice * c.quantity}</div>
                  </div>
                );
              })}
            </div>
            <div>
              <div className="text-base font-semibold ">
                Total Price without off :<span className="text-xl ">${state.total}</span>
              </div>
              <div className="text-base font-semibold ">
                amount of discount:<span className="text-xl ">${state.total - state.offTotal}</span>
              </div>
              <div className="h-[2px] bg-gray-300 mt-3"></div>
              <div className="text-base font-semibold ">
                Total Price with off :<span className="text-3xl text-green-700">${state.offTotal}</span>
              </div>
            </div>
          </div>

          <button className="text-center w-full flex items-center justify-center mt-2 bg-gold rounded-lg py-4 px-4 text-secondary font-semibold  shadow-md">
            Payment
          </button>
        </div>
      )}
    </div>
  );
};

export default Checkout;
