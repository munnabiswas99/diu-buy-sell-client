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
            <label htmlFor="" className="text-xl font-semibold">Your Name</label>
            <br />
            <input className="border rounded-lg p-2 w-full my-1" type="text" placeholder="Your Name" {...register("userName", {required:true})}/>
            <br />
            {errors.userName && <span className="text-red-500 text-sm font-bold">Name is required</span>}
        </form>
      </div>
    </div>
  );
};

export default SellPost;
