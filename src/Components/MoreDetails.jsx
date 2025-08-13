import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navigation from "./subcomponent/1.Home/Navigation";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { TbCategoryPlus } from "react-icons/tb";
import { CgGenderFemale } from "react-icons/cg";
import { CgGenderMale } from "react-icons/cg";
import { FaRegCalendarAlt } from "react-icons/fa";

const MoreDetails = () => {
  const location = useLocation();
  let data = location.state;
  let rating = Math.random() * (5 - 1) + 1;
  if (rating > 4.8) rating = 5;
  let stararr = Array.from({ length: 5 });

  useEffect(() => {
    console.log(rating);
  }, [rating]);

  return (
    <div className="select-none">
      {/* ================== MORE DETAIL NAV BAR  ======================== */}

      <nav className="w-[100%] bg-white fixed top-0 z-20">
        <Navigation />
        <div className="flex-grow h-[2px] bg-[#eaeaea]"></div>
      </nav>

      {/* =================================== MORE DETAIL PAGE ======================== */}
      <div
        className="w-[80%] h-[380px]  relative  mx-auto mt-[100px] flex px-[10px]"
        style={{ fontFamily: "Roboto, sans-serif" }}
      >
        {/* ==================== IMAGE ================== */}

        <div className="w-[28%] ">
          <div className="w-[300px] h-[380px] relative ">
            <p
              style={{ fontFamily: "Montserrat, sans-serif" }}
              className="uppercase absolute bg-blue-500 text-white font-[500] rounded-tr-lg  top-0 right-0 px-[10px] py-[6px] rounded-bl-2xl"
            >
              Original
            </p>
            <img
              src={data.image}
              alt="Book Cover Image"
              className="w-full h-full rounded-lg"
            />
          </div>
        </div>

        {/* =================== MORE DETAILS ============================ */}
        <div className="w-[71%] ">
          <div className="ml-[30px]">
            <p
              style={{
                overflow: "hidden",
                textOverflow: "ellipsis",
                display: "-webkit-box",
                WebkitBoxOrient: "vertical",
                WebkitLineClamp: 2,
              }}
              className="w-full max-h-[84px] text-[28px] font-[700] text-black capitalize mt-[5px] "
            >
              {data.title}
            </p>

            <div className="flex my-[10px]">
              <p className="capitalize flex items-center gap-x-[5px] font-[500] min-w-[120px] mr-[5px] truncate overflow-hidden">
                <TbCategoryPlus size={"20px"} />
                {data.category}
              </p>

              <p className="capitalize flex items-center gap-x-[10px] font-[500] w-[200px] truncate">
                {data.gender ? (
                  <CgGenderMale size={"20px"} />
                ) : (
                  <CgGenderFemale size={"20px"} />
                )}
                {data.gender} Orientation
              </p>

              <div className="flex  w-[70px] justify-between">
                <FaRegCalendarAlt size={"20px"} />
                <p className="capitalize flex items-center gap-x-[10px] font-[500] truncate">
                  2018
                </p>
              </div>
            </div>

            <p
              style={{
                overflow: "hidden",
                textOverflow: "ellipsis",
                display: "-webkit-box",
                WebkitBoxOrient: "vertical",
                WebkitLineClamp: 6,
              }}
              className="text-black/80 text-[15px] my-[5px]  w-full max-h-[140px] text-justify"
            >
              {data.description.slice(0, 1).toUpperCase() +
                data.description.slice(1)}
            </p>

            {/* ========================= RATINGS ============================ */}

            <div className="flex mt-[10px] items-center">
              {stararr.map((_, i) => (
                <div key={i}>
                  {Math.floor(rating) > i ? (
                    <FaStar fill="yellow" size={"24px"} />
                  ) : (
                    <CiStar size={"24px"} />
                  )}
                </div>
              ))}
              <p className="text-[24px] pl-[15px]">{rating.toFixed(1)}</p>
            </div>

            {/* ==================== DOWNLOAD BUTTONS ========================= */}

            <div
              style={{ fontFamily: "Montserrat, sans-serif" }}
              className="absolute bottom-1 flex flex-row gap-x-[10px]"
            >
              <button className="bg-blue-500 px-[9px] py-[7px] font-[500] rounded-lg text-white hover:bg-white hover:text-black border-transparent border-[1px] hover:border-black tranistion-all duration-500 ease hover:font-[500] cursor-pointer">
                Add To Cart
              </button>
              <button className="bg-purple-500 px-[9px] py-[7px] font-[500] rounded-lg text-white hover:bg-white hover:text-black border-transparent border-[1px] hover:border-black tranistion-all duration-500 ease hover:font-[500] cursor-pointer">
                Download Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreDetails;
//
//
