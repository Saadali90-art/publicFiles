import React from "react";

const TopPicks = ({ toppicks }) => {
  return (
    <>
      <div className="w-[80%] h-[300px]  mx-auto mt-[20px] py-[20px] pb-[20px]">
        <h1 className="text-[24px] font-[700] px-[20px]">Weekly Top Picks</h1>

        <div className="flex flex-row gap-x-[15px] w-[100%] mx-auto px-[20px] mt-[20px] ">
          {toppicks.map((item, index) => (
            <div
              key={index}
              className="min-w-[100px] h-[220px] relative overflow-hidden rounded-md"
            >
              <img
                src={item.image}
                alt={index + 1}
                className="w-[100px] h-[140px] rounded-sm hover:scale-110 transition-all duration-200 ease"
              />
              <p className="text-[15px] font-[600] px-[3px] py-[10px] w-[100px]">
                {item.name}
              </p>
              <p className="text-[12px] text-gray-600 absolute bottom-[3px] left-[5px]">
                {item.category}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TopPicks;
