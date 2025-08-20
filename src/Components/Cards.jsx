import React from "react";

const Cards = ({ index, handlemore, item }) => {
  return (
    <div
      key={index}
      className="flex flex-col flex-wrap justify-center items-center gap-x-[100px] w-[220px] max-[1947px]:w-[200px] max-[1797px]:w-[180px] max-[1613px]:w-[160px] max-[1432px]:w-[145px] h-[310px] "
    >
      <div
        onClick={() => handlemore(item)}
        className="w-full h-[220px] overflow-hidden rounded-md cursor-pointer "
      >
        <img
          src={item.image}
          className="w-full  h-[230px] hover:scale-105 transition-all duration-500 ease"
        />
      </div>

      <p
        style={{
          overflow: "hidden",
          textOverflow: "ellipsis",
          display: "-webkit-box",
          WebkitBoxOrient: "vertical",
          WebkitLineClamp: 2,
        }}
        className="text-[15px] font-[600]  py-[10px] w-full h-[60px] max-[368px]:text-[10px]"
      >
        {item.title}
      </p>
      <p className="text-[13px] text-gray-600">{item.category}</p>
    </div>
  );
};

export default Cards;
