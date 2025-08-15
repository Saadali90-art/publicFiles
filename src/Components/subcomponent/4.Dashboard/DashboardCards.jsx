import React from "react";
import { useNavigate } from "react-router-dom";

const DashboardCards = ({ userData }) => {
  const navigate = useNavigate();

  return (
    <>
      <div className="w-full flex justify-center flex-wrap gap-x-[20px] gap-y-[10px] select-none">
        {userData.map((item, index) => (
          <div
            key={index}
            className="w-[280px] h-[450px]  overflow-hidden relative  mt-[10px]"
          >
            <div
              className="w-full mx-auto  overflow-hidden cursor-pointer"
              onClick={() =>
                navigate("/user/dashboard/more", {
                  state: item,
                })
              }
            >
              <img
                src={item.image}
                alt="Image Not Found"
                className="w-full h-[340px]  hover:scale-105 hover:rounded-t-4xl transition-all duration-500 ease"
              />
            </div>

            <div className="py-[7px]">
              <p className="truncate text-[16px] font-[600] capitalize mb-[5px]">
                {item.title}
              </p>
              <p className="text-sm text-gray-600">{item.category}</p>
            </div>

            <div className="w-full flex justify-between items-center pt-[5px] ">
              <p className="text-orange-400 font-[700] text-[19px]">
                ${item.price}
              </p>

              <button
                onClick={() =>
                  navigate("/user/dashboard/more", {
                    state: item,
                  })
                }
                className="px-[10px] py-[5px] pt-[6px] rounded-lg bg-blue-500 cursor-pointer text-white text-sm font-[500] active:brightness-50 active:scale-95"
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default DashboardCards;
