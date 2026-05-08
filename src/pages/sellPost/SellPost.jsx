import React, { useState } from "react";
import { useForm } from "react-hook-form";

const SellPost = () => {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handlePost = async (data) => {
    console.log(data);
  };

  return (
    <div className="max-w-6xl mx-auto py-10 px-4">

      {/* Heading */}
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-gray-800">
          Sell Your Product
        </h1>

        <p className="text-gray-500 mt-2">
          Post your used product for students in Daffodil Exchange.
        </p>
      </div>

      {/* Form Container */}
      <div className="bg-white shadow-md rounded-2xl border p-6 md:p-10">

        <form onSubmit={handleSubmit(handlePost)}>

          {/* Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

            {/* User Information */}
            <div className="space-y-5">

              <h2 className="text-2xl font-semibold text-gray-700 border-b pb-2">
                Seller Information
              </h2>

              {/* Name */}
              <div>
                <label className="font-medium text-gray-700">
                  Your Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full border rounded-xl px-4 py-3 mt-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                  {...register("displayName", { required: true })}
                />

                {errors.displayName && (
                  <p className="text-red-500 text-sm mt-1">
                    Name is required
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="font-medium text-gray-700">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full border rounded-xl px-4 py-3 mt-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                  {...register("email", { required: true })}
                />

                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    Email is required
                  </p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label className="font-medium text-gray-700">
                  Phone Number
                </label>

                <input
                  type="tel"
                  placeholder="Enter your phone number"
                  className="w-full border rounded-xl px-4 py-3 mt-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                  {...register("phone", { required: true })}
                />

                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">
                    Phone number is required
                  </p>
                )}
              </div>

              {/* Social */}
              <div>
                <label className="font-medium text-gray-700">
                  Social Contact Link
                </label>

                <input
                  type="text"
                  placeholder="Messenger / WhatsApp / Telegram"
                  className="w-full border rounded-xl px-4 py-3 mt-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                  {...register("social", { required: true })}
                />

                {errors.social && (
                  <p className="text-red-500 text-sm mt-1">
                    Social link is required
                  </p>
                )}
              </div>

            </div>

            {/* Product Information */}
            <div className="space-y-5">

              <h2 className="text-2xl font-semibold text-gray-700 border-b pb-2">
                Product Information
              </h2>

              {/* Product Name */}
              <div>
                <label className="font-medium text-gray-700">
                  Product Name
                </label>

                <input
                  type="text"
                  placeholder="Enter product name"
                  className="w-full border rounded-xl px-4 py-3 mt-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                  {...register("productName", { required: true })}
                />

                {errors.productName && (
                  <p className="text-red-500 text-sm mt-1">
                    Product name is required
                  </p>
                )}
              </div>

              {/* Used Duration */}
              <div>
                <label className="font-medium text-gray-700">
                  Used Duration
                </label>

                <input
                  type="text"
                  placeholder="e.g. 6 months / 1 year"
                  className="w-full border rounded-xl px-4 py-3 mt-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                  {...register("used", { required: true })}
                />

                {errors.used && (
                  <p className="text-red-500 text-sm mt-1">
                    Used duration is required
                  </p>
                )}
              </div>

              {/* Location */}
              <div>
                <label className="font-medium text-gray-700">
                  Location
                </label>

                <input
                  type="text"
                  placeholder="Enter your location"
                  className="w-full border rounded-xl px-4 py-3 mt-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                  {...register("location", { required: true })}
                />

                {errors.location && (
                  <p className="text-red-500 text-sm mt-1">
                    Location is required
                  </p>
                )}
              </div>

              {/* Price */}
              <div>
                <label className="font-medium text-gray-700">
                  Price (৳)
                </label>

                <input
                  type="number"
                  placeholder="Enter price"
                  className="w-full border rounded-xl px-4 py-3 mt-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                  {...register("price", { required: true })}
                />

                {errors.price && (
                  <p className="text-red-500 text-sm mt-1">
                    Price is required
                  </p>
                )}
              </div>

            </div>

          </div>

          {/* Image Upload */}
          <div className="mt-10">

            <h2 className="text-2xl font-semibold text-gray-700 border-b pb-2 mb-5">
              Product Images
            </h2>

            <div className="border-2 border-dashed rounded-2xl p-8 text-center bg-gray-50">

              <input
                type="file"
                multiple
                accept="image/*"
                className="w-full"
                {...register("images", { required: true })}
              />

              <p className="text-sm text-gray-500 mt-3">
                Upload up to 5 images
              </p>

              {errors.images && (
                <p className="text-red-500 text-sm mt-2">
                  Product images are required
                </p>
              )}

            </div>

          </div>

          {/* Submit Button */}
          <div className="mt-8">

            <button
              type="submit"
              disabled={loading}
              className="bg-green-600 hover:bg-green-700 transition text-white font-medium px-8 py-3 rounded-xl disabled:bg-gray-400"
            >
              {loading ? "Uploading..." : "Post Product"}
            </button>

          </div>

        </form>
      </div>
    </div>
  );
};

export default SellPost;