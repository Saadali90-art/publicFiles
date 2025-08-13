import React from "react";
import { useNavigate } from "react-router-dom";

const DashboardCards = ({ userData }) => {
  const navigate = useNavigate();

  return (
    <>
      <div className="w-full flex justify-center flex-wrap gap-x-[20px] gap-y-[10px] ">
        {userData.map((item, index) => (
          <div
            key={index}
            className="w-[250px] h-[380px] bg-white rounded-xl overflow-hidden relative shadow-[0px_1px_21px_8px_rgba(0,0,0,0.11)] hover:shadow-[0px_1px_24px_5px_rgba(0,0,0,0.40)] mt-[10px] transition duration-550 hover:scale-103 ease"
          >
            <div className="w-[93%] mx-auto mt-[10px] overflow-hidden rounded-lg">
              <img
                src={item.image}
                alt="Image Not Found"
                className="w-full h-[150px] rounded-lg hover:scale-110 hover:rounded-t-4xl transition-all duration-500 ease"
              />
            </div>

            <div className=" w-[90%] mx-auto h-[145px] mt-[10px] flex ">
              <div className=" w-[50%] flex flex-col justify-between font-semibold">
                <p className="">Title</p>
                <p>Category</p>
                <p>Gender</p>
                <p>Description</p>
              </div>
              <div className=" w-[55%] flex flex-col justify-between capitalize pl-[2px]">
                <p className="truncate">{item.title}</p>
                <p className="truncate">{item.category}</p>
                <p className="truncate">{item.gender}</p>
                <p className="truncate">{item.description}</p>
              </div>
            </div>

            <button
              onClick={() =>
                navigate("/user/dashboard/more", {
                  state: item,
                })
              }
              className="px-[10px] py-[5px] rounded-lg bg-blue-500 cursor-pointer text-white text-sm font-[500] absolute bottom-[10px] right-[10px] active:brightness-50 active:scale-95"
            >
              View Details
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default DashboardCards;
