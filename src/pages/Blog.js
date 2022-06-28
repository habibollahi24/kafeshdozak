import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const Blog = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  console.log(useLocation());
  //push to home with javascript code
  const pushHandler = () => {
    navigate("/");
  };

  return (
    <div>
      <h2>it is one blogs :{id} </h2>
      <button className="p-4 rounded-md bg-gray-600 text-white" onClick={pushHandler}>
        push to home with javascript code
      </button>
    </div>
  );
};

export default Blog;
