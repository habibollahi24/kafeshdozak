import React from "react";
import { Link } from "react-router-dom";
import image from "../assets/images/react.png";

const NotFound = () => {
  return (
    <div className="flex flex-col space-y-5 justify-center  h-96 items-center">
      <div className="w-72 rounded-md overflow-hidden">
        <img src={image} alt="404-react" />
      </div>
      <h1 className="text-2xl md:text-2xl font-semibold text-gray-600">404 | Not Found</h1>
      <Link
        className="block font-semibold rounded-sm bg-white py-2 px-4 transition-all duration-200 hover:bg-gray-500 hover:text-white  "
        to="/"
      >
        Go To Home ...
      </Link>
    </div>
  );
};

export default NotFound;
