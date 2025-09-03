import React from "react";
import { CgGenderFemale, CgGenderMale } from "react-icons/cg";
import { FaEye } from "react-icons/fa";
import { TbCategoryPlus } from "react-icons/tb";
import { useNavigate } from "react-router-dom";

const NovelDetails = ({ moreInfo }) => {
  const navigate = useNavigate();

  return (
    <>
      {/* ======================= NOVEL INFORAMTION ============================ */}

      {moreInfo !== null ? (
        <div
          className="w-[80%] h-[380px]  relative  mx-auto mt-[100px] flex "
          style={{ fontFamily: "Roboto, sans-serif" }}
        >
          {/* ==================== IMAGE ================== */}

          <div className="w-[25%] ">
            <div className="w-[300px] h-[380px] relative ">
              <p
                style={{ fontFamily: "Montserrat, sans-serif" }}
                className="uppercase absolute text-white font-[500] rounded-tr-lg  top-0 right-0 px-[10px] py-[6px] rounded-bl-2xl bg-blue-500"
              >
                Original
              </p>
              <img
                src={`http://127.0.0.1:8000${moreInfo.bookImage}`}
                alt="Book Cover Image"
                className="w-full h-full rounded-lg"
              />
            </div>
          </div>

          {/* =================== MORE DETAILS ============================ */}
          <div className="w-[74%] ">
            <div className="ml-[40px]">
              <p
                style={{
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: 2,
                  fontFamily: "Archivo, serif",
                }}
                className="w-full max-h-[84px] text-[28px] font-[700] text-black capitalize mt-[5px] "
              >
                {moreInfo.title}
              </p>

              <div className="w-[40%] flex justify-between my-[10px] ">
                <p className="capitalize flex items-center gap-x-[2px] font-[500] truncate overflow-hidden">
                  <TbCategoryPlus size={"20px"} />
                  {moreInfo.category}
                </p>

                <p className="capitalize flex items-center font-[500] truncate">
                  {moreInfo.gender ? (
                    <CgGenderMale size={"20px"} />
                  ) : (
                    <CgGenderFemale size={"20px"} />
                  )}
                  {moreInfo.gender} Orientation
                </p>

                <p className=" flex items-center gap-x-[5px] font-[500]">
                  <FaEye />
                  {moreInfo.views}
                </p>
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
                {moreInfo.description?.slice(0, 1).toUpperCase() +
                  moreInfo.description?.slice(1)}
              </p>

              {/* ==================== DOWNLOAD BUTTONS ========================= */}

              <div
                style={{ fontFamily: "Montserrat, sans-serif" }}
                className="absolute bottom-1 flex flex-row gap-x-[10px]"
              >
                <button
                  onClick={() => navigate("/user/cart", { state: moreInfo })}
                  className="bg-blue-500 px-[9px] py-[7px] font-[500] rounded-lg text-white hover:bg-white hover:text-black border-transparent border-[1px] hover:border-black tranistion-all duration-500 ease hover:font-[500] cursor-pointer"
                >
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-screen h-screen flex items-center justify-center">
          Loading..
        </div>
      )}
    </>
  );
};

export default NovelDetails;
