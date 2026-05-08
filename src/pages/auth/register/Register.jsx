import React from "react";
import { useForm } from "react-hook-form";
import Logo from "../../../components/logo/Logo";
import { NavLink } from "react-router";
import useAuth from "../../../hooks/useAuth";

const Register = () => {
    const {registerUser} = useAuth();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const handleRegister = (data) => {
    registerUser(data.email, data.password)
    .then(res => {
        console.log(res.user)
    })
    .catch(error => {
        console.log(error);
    })
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
            Welcome to <br /> Daffodil Exchange
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

            <h2 className="text-3xl font-bold text-gray-800">Create Account</h2>

            <p className="text-gray-500 mt-2">
              Register to start buying and selling.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit(handleRegister)} className="space-y-5">
            {/* Name */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Full Name
              </label>

              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                {...register("name", { required: true })}
              />

              {errors.name && (
                <p className="text-red-500 text-sm mt-1">Name is required</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                DIU Email
              </label>

              <input
                type="email"
                placeholder="example@diu.edu.bd"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@diu\.edu\.bd$/,
                    message: "Only DIU email addresses are allowed",
                  },
                })}
              />

              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Phone */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Phone Number
              </label>

              <input
                type="tel"
                placeholder="Enter your phone number"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                {...register("phone", { required: true })}
              />

              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">
                  Phone number is required
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
                placeholder="Create a password"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                  pattern: {
                    value: /^(?=.*[A-Z])(?=.*[!@#$%^&*])/,
                    message:
                      "Password must contain 1 uppercase letter and 1 special character",
                  },
                })}
              />

              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Confirm Password
              </label>

              <input
                type="password"
                placeholder="Confirm password"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                {...register("confirmPassword", {
                  required: "Confirm password is required",
                  validate: (value) =>
                    value === watch("password") || "Passwords do not match",
                })}
              />

              {errors.confirmPassword && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 transition text-white font-semibold py-3 rounded-xl mt-3"
            >
              Register
            </button>
          </form>

          {/* Footer */}
          <p className="text-center text-gray-500 text-sm mt-6">
            Already have an account?
            <NavLink to='/login'>
              {" "}
              <span className="text-green-600 font-medium cursor-pointer ml-1">
                Login
              </span>
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
