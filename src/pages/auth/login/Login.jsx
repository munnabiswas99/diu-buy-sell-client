import React from "react";
import { useForm } from "react-hook-form";
import Logo from "../../../components/logo/Logo";
import { NavLink, useNavigate } from "react-router";
import useAuth from "../../../hooks/useAuth";

const Login = () => {
  const { signInUser } = useAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleRegister = (data) => {
    signInUser(data.email, data.password)
      .then((res) => {
        console.log(res.user);
        navigate('/')
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-10">
      <div className="w-full max-w-5xl bg-white rounded-3xl shadow-lg overflow-hidden grid grid-cols-1 lg:grid-cols-2">
        {/* Left Side */}
        <div className="hidden lg:flex flex-col justify-center bg-green-600 text-white p-12">
          <div className="mb-6">
            <Logo />
          </div>

          <h1 className="text-4xl font-bold leading-tight">
            Welcome Back <br />
            to Daffodil Exchange
          </h1>

          <p className="mt-5 text-green-100 text-lg">
            Buy, sell, and exchange products easily within your university
            community.
          </p>
        </div>

        {/* Right Side */}
        <div className="p-8 md:p-12">
          <div className="mb-8 text-center">
            <div className="flex justify-center lg:hidden mb-4">
              <Logo />
            </div>

            <h2 className="text-3xl font-bold text-gray-800">Login Now!</h2>

            <p className="text-gray-500 mt-2">
              Login to start buying and selling.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit(handleRegister)} className="space-y-5">
            {/* Email */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                DIU Email
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                {...register("email", {
                  required: "Email is required",
                })}
              />

              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Password
              </label>

              <input
                type="password"
                placeholder="Enter your password"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                {...register("password", {
                  required: "Password is required"
                })}
              />

              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 transition text-white font-semibold py-3 rounded-xl mt-3"
            >
              Login
            </button>
          </form>

          {/* Footer */}
          <p className="text-center text-gray-500 text-sm mt-6">
            Already have an account?
            <NavLink to="/register">
              {" "}
              <span className="text-green-600 font-medium cursor-pointer ml-1">
                Register
              </span>
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
