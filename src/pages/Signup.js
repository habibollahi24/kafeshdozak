import React, { useState } from "react";
import image from "../assets/images/sport.png";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../context/Auth/AuthContext";
import { useFormik } from "formik";

import * as yup from "yup";
import { signupUser } from "../services/signupService";

const Signup = () => {
  const [error, setError] = useState(null);
  const { setAuth } = useAuth();
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    setError(null);
    const { name, email, phoneNumber, password } = values;
    const userData = { name, email, phoneNumber, password };
    try {
      const { data } = await signupUser(userData);
      setAuth(data);
      // localStorage.setItem("authItems", JSON.stringify(data));
      toast.success("welcome");
      navigate("/");
    } catch (error) {
      toast.error(error.response.data.message);
      setError(error.response.data.message);
    }
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phoneNumber: "",
      password: "",
      comfirmPassword: "",
    },
    validateOnMount: true,
    onSubmit: onSubmit,
    validationSchema: yup.object({
      name: yup.string().required("please enter your name"),
      email: yup.string().required("please enter your email").email("Invalid Email"),
      phoneNumber: yup
        .string()
        .required("please enter your phone number")
        .matches(/^[0-9]{11}$/, "Phone number is not valid")
        .nullable(),
      password: yup.string().required("please enter your password").min(6, "less than 6 character"),
      // .matches(
      //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
      //   "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
      // ),
      comfirmPassword: yup
        .string()
        .required("please enter your comfirm password")
        .oneOf([yup.ref("password"), null], "Passwords must match"),
    }),
  });
  return (
    <div className="p-4 my-4">
      <div className="bg-white  grid md:grid-cols-2 max-w-screen-lg mx-auto rounded-3xl overflow-hidden shadow-2xl">
        <form onSubmit={formik.handleSubmit} className="px-4 md:px-16 py-10 flex flex-col gap-3 justify-between bg-white  ">
          <div className="text-3xl mb-2 text-gray-700 font-semibold">Sign Up</div>
          <div>
            <label className="text-sm text-gray-500 font-semibold ">Name:</label>
            <input
              type="text"
              name="name"
              {...formik.getFieldProps("name")}
              className="w-full p-2 rounded-lg shadow-sm bg-gray-100 focus:ring-2 focus:ring-gold focus:outline-none"
            />
            {formik.errors.name && formik.touched.name && <p className="text-red-500 font-semibold">{formik.errors.name}</p>}
          </div>
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
            <label className="text-sm text-gray-500 font-semibold ">phoneNumber:</label>
            <input
              type="text"
              name="phoneNumber"
              {...formik.getFieldProps("phoneNumber")}
              className="w-full p-2 rounded-lg shadow-sm bg-gray-100 focus:ring-2 focus:ring-gold focus:outline-none"
            />
            {formik.errors.phoneNumber && formik.touched.phoneNumber && (
              <p className="text-red-500 font-semibold">{formik.errors.phoneNumber}</p>
            )}
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
          <div>
            <label className="text-sm text-gray-500 font-semibold ">ComfirmPassword:</label>
            <input
              type="text"
              name="comfirmPassword"
              {...formik.getFieldProps("comfirmPassword")}
              className="w-full p-2 rounded-lg shadow-sm bg-gray-100 focus:ring-2 focus:ring-gold focus:outline-none"
            />
            {formik.errors.comfirmPassword && formik.touched.comfirmPassword && (
              <p className="text-red-500 font-semibold">{formik.errors.comfirmPassword}</p>
            )}
          </div>
          <button
            className="text-center w-full flex items-center justify-center mt-2 bg-gold rounded-lg py-4 px-4 text-secondary font-semibold  shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
            type="submit"
            disabled={!formik.isValid}
          >
            Signup
          </button>
          {error && <div className="text-red-500 font-semibold">{error}</div>}
          <div className="text-gray-700  text-lg font-semibold underline">
            <Link to="/login">Already Login?</Link>
          </div>
        </form>
        <div className="p-2 md:p-8 rounded-3xl overflow-hidden relative ">
          <img src={image} alt="" className="object-fill w-full h-full rounded-3xl " />
          <div className="text-xl text-gray-500 font-semibold absolute bottom-12 left-1/2 -translate-x-1/2">کفشدوزک</div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
