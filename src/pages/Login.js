import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import { loginUser } from "../services/loginServer";
import { toast } from "react-toastify";
import { useAuth } from "../context/Auth/AuthContext";

const Login = () => {
  const [error, setError] = useState(null);
  const { setAuth } = useAuth();

  const navigate = useNavigate();

  const onSubmit = async (values) => {
    setError(null);
    try {
      const { data } = await loginUser(values);
      toast.success("welcome");
      setAuth(data);
      // localStorage.setItem("authItems", JSON.stringify(data));
      navigate("/");
    } catch (error) {
      toast.error(error.response.data.message);
      setError(error.response.data.message);
    }
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validateOnMount: true,
    onSubmit,
    validationSchema: yup.object({
      email: yup.string().required("please enter your email").email("Invalid Email"),
      password: yup.string().required("please enter your password").min(6, "less than 6 character"),
    }),
  });

  return (
    <>
      <div className="bg-white  max-w-[400px] mx-auto my-5 rounded-3xl overflow-hidden shadow-2xl">
        <form onSubmit={formik.handleSubmit} className=" px-8 py-5 flex flex-col gap-2 justify-between bg-white  ">
          <div className="text-3xl mb-2 text-gray-700 font-semibold">Login</div>
          <div>
            <label className="text-sm text-gray-500 font-semibold ">Email:</label>
            <input
              type="text"
              name="email"
              {...formik.getFieldProps("email")}
              className="w-full p-2 rounded-lg shadow-sm bg-gray-100 focus:ring-2 focus:ring-gold focus:outline-none"
            />
            {formik.errors.email && formik.touched.email && <p className="text-red-500 font-semibold">{formik.errors.email}</p>}
          </div>

          <div>
            <label className="text-sm text-gray-500 font-semibold ">Password:</label>
            <input
              type="text"
              name="password"
              {...formik.getFieldProps("password")}
              className="w-full p-2 rounded-lg shadow-sm bg-gray-100 focus:ring-2 focus:ring-gold focus:outline-none"
            />
            {formik.errors.password && formik.touched.password && (
              <p className="text-red-500 font-semibold">{formik.errors.password}</p>
            )}
          </div>

          <button
            className="text-center w-full flex items-center justify-center mt-2 bg-gold rounded-lg py-4 px-4 text-secondary font-semibold  shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
            type="submit"
            disabled={!formik.isValid}
          >
            submit
          </button>
          {error && <div className="text-red-500 font-semibold">{error}</div>}
          <div className="text-gray-700  text-lg font-semibold underline">
            <Link to="/signup">Not Signup Yet?</Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
