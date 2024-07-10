import React from "react";

const Product = ({ productsItems }) => {
  return (
    <div className="w-[80%] mt-[20px] flex justify-around flex-wrap bg-orange-400 rounded-md">
      {productsItems.map((productsItems) => (
        <div className="w-[300px] h-[400px] boredr-[1px] black overflow-hidden p-[10px] my-[40px] mx-[20px] bg-white">
          <div className="w-[100%] max-w-[300px] min-h-[200px] block object-cover">
            <img src={productsItems.image} alt="" />
          </div>

          <div className="my-[10px] uppercase">
            <h1>{productsItems.name}</h1>
          </div>
          <div className=" my-[10px] pb-[20px] text-[18px] leading-10">${productsItems.price}</div>

          <div className="text-[18px] rounded-md border-none bg-black text-white w-[100%] h-[40px] block font-bold uppercase my-[15px] hover:bg-red-600 active:translate-y-[2px]">
            <button>Add to Cart</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product;
