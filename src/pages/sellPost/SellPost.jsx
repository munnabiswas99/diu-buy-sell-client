import React from "react";
import { useForm } from "react-hook-form";

const SellPost = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const handlePost = (data) => console.log(data);

  return (
    <div>
      <h1 className="font-bold text-4xl my-10">Post Your Product For Sell</h1>
      <h1 className="text-2xl font-semibold mb-4">Product Details :</h1>
      <div>
        <form onSubmit={handleSubmit(handlePost)}>
          <div className="flex flex-col md:flex-row lg:flex-row justify-between gap-2 md:gap-20 lg:gap-20">
            {/* User Info */}
            <div className="w-full">
              <label htmlFor="" className="text-xl font-semibold">
                Your Name
              </label>
              <br />
              <input
                className="border rounded-lg p-2 w-full my-1"
                type="text"
                placeholder="Your Name"
                {...register("displayName", { required: true })}
              />
              <br />
              {errors.displayName && (
                <span className="text-red-500 text-sm font-bold">
                  Name is required
                </span>
              )}
              <br />

              <label htmlFor="" className="text-xl font-semibold">
                Email
              </label>
              <br />
              <input
                className="border rounded-lg p-2 w-full my-1"
                type="email"
                placeholder="Your Name"
                {...register("email", { required: true })}
              />
              <br />
              {errors.email && (
                <span className="text-red-500 text-sm font-bold">
                  Email is required
                </span>
              )}
              <br />

              <label htmlFor="" className="text-xl font-semibold">
                Phone
              </label>
              <br />
              <input
                className="border rounded-lg p-2 w-full my-1"
                type="tel"
                placeholder="Phone Number"
                {...register("phone", { required: true })}
              />
              <br />
              {errors.phone && (
                <span className="text-red-500 text-sm font-bold">
                  Phone is required
                </span>
              )}
              <br />

              <label htmlFor="" className="text-xl font-semibold">
                Social Link
              </label>
              <br />
              <input
                className="border rounded-lg p-2 w-full my-1"
                type="text"
                placeholder="eg: telegram/ whatsapp/ messenger"
                {...register("social", { required: true })}
              />
              <br />
              {errors.social && (
                <span className="text-red-500 text-sm font-bold">
                  Social Link is required
                </span>
              )}
              <br />
            </div>

            {/* Product Info */}
            <div className="w-full">
              <label htmlFor="" className="text-xl font-semibold">
                Product Name
              </label>
              <br />
              <input
                className="border rounded-lg p-2 w-full my-1"
                type="text"
                placeholder="Product Name"
                {...register("productName", { required: true })}
              />
              <br />
              {errors.productName && (
                <span className="text-red-500 text-sm font-bold">
                  Name is required
                </span>
              )}
              <br />

              <label htmlFor="" className="text-xl font-semibold">
                Used Duration
              </label>
              <br />
              <input
                className="border rounded-lg p-2 w-full my-1"
                type="text"
                placeholder="eg: 7 days/3 months/ 1 year"
                {...register("used", { required: true })}
              />
              <br />
              {errors.used && (
                <span className="text-red-500 text-sm font-bold">
                  Used Duration is required is required
                </span>
              )}
              <br />

              <label htmlFor="" className="text-xl font-semibold">
                Location
              </label>
              <br />
              <input
                className="border rounded-lg p-2 w-full my-1"
                type="tel"
                placeholder="Your Location"
                {...register("location", { required: true })}
              />
              <br />
              {errors.location && (
                <span className="text-red-500 text-sm font-bold">
                  Location is required
                </span>
              )}
              <br />

              <label htmlFor="" className="text-xl font-semibold">
                Price (Taka)
              </label>
              <br />
              <input
                className="border rounded-lg p-2 w-full my-1"
                type="number"
                placeholder="eg: 150, 200, 500, 1000"
                {...register("price", { required: true })}
              />
              <br />
              {errors.price && (
                <span className="text-red-500 text-sm font-bold">
                  Price is required
                </span>
              )}
              <br />
            </div>
          </div>

          {/* Image Input */}
          <label htmlFor="" className="text-xl font-semibold">
            Product Images
          </label>
          <br />
          <input
            className="border rounded-lg p-2 w-full my-1"
            type="img"
            placeholder="add images"
            {...register("images", { required: true })}
          />
          <br />
          {errors.images && (
            <span className="text-red-500 text-sm font-bold">
              Images are required
            </span>
          )}
          <br />

          <input
            className="bg-green-600 py-2 px-3 rounded-lg my-4 text-white"
            type="submit"
          />
        </form>
      </div>
    </div>
  );
};

export default SellPost;
