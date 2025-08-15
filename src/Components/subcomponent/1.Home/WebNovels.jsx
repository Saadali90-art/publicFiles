import React from "react";

const WebNovels = ({ data }) => {
  return (
    <div className="w-full">
      <h1 className="text-[24px] ml-[18px] py-[10px] font-[700] text-[#1c1c1c] border-b-[1.3px] border-[#d8d8d8]">
        Webnovels
      </h1>
      <div>
        {data.map((item, index) => (
          <div
            key={index}
            className="flex w-[96%] border-b-[1.3px] border-[#d8d8d8] mx-[25px] py-[12px]"
          >
            <div className=" w-[72%]">
              <h1 className="text-[18px] font-[600]">{item.heading}</h1>
              <p className="text-[12px] text-[#4e4e4e]">{item.description}</p>
            </div>

            <div className=" w-[28%]">
              <img
                src={item.img}
                alt={`Image : ${index + 1}`}
                className="w-[100px] h-[60px] rounded-sm ml-[25px]"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WebNovels;
