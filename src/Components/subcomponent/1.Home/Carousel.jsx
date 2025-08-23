import React, { useEffect, useRef, useState } from "react";
import TopBooks from "../../Requests/Home Requests/TopBooks.js";
import { useNavigate } from "react-router-dom";

const Carousel = () => {
  const [weeklyTop, setWeeklyTop] = useState([]);
  const [current, setcurrent] = useState(0);
  const reference = useRef(null);
  const [slideWidth, setSlideWidth] = useState(0);
  let arrButton = Array.from({ length: weeklyTop.length });
  const navigate = useNavigate();

  // ========================== GETTING THE WEEKLY TOP DATA ===================================

  useEffect(() => {
    const fetchData = async (link) => {
      let data = await TopBooks(link);
      setWeeklyTop(data);
    };

    fetchData("weeklytop");
  }, []);

  // ======================== GETTING THE WIDTH OF THE DIV ===============================

  useEffect(() => {
    const updateWidth = () => {
      if (reference.current) {
        setSlideWidth(reference.current.offsetWidth);
      }
    };

    updateWidth();

    window.addEventListener("resize", updateWidth);

    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  // ======================= CHANGING THE CURRENT AFTER TIME ============================

  useEffect(() => {
    let time = setTimeout(() => {
      if (current === weeklyTop.length - 1) {
        setcurrent(0);
      } else {
        setcurrent(current + 1);
      }
    }, 10000);
    return () => clearTimeout(time);
  });

  return (
    <div className=" w-[47%] ">
      <h1
        style={{ fontFamily: "Archivo, serif" }}
        className="text-[24px] py-[10px] pb-[13px] font-[600] text-[#1c1c1c]"
      >
        Weekly Novels
      </h1>

      {/* ======================= CAROUSEL ============================= */}

      <div className="relative ">
        <div
          ref={reference}
          className="w-[420px] h-[260px] flex overflow-hidden rounded-lg  relative"
          style={{ background: weeklyTop.length === 0 ? "white" : "black" }}
        >
          {weeklyTop.map((item, index) => (
            <div
              onClick={() =>
                navigate("/user/dashboard/more", {
                  state: item,
                })
              }
              key={index}
              style={{
                transform: `translateX(-${current * slideWidth}px)`,
                opacity: current === index ? 1 : 0,
                cursor: "pointer",
                transition: "transform 5ms linear ,opacity 400ms linear ",
              }}
              className="min-w-full "
            >
              <img
                src={item.image}
                className="min-w-full h-full absolute -z-10 blur-lg backdrop-brightness-20"
                alt=""
              />

              {/* ======================== INNER INFO =============================== */}

              <div className="h-[240px] overflow-hidden flex px-[15px] py-[15px]">
                <img
                  src={item.image}
                  alt=""
                  className="w-[150px] h-[220px] rounded-lg"
                />

                <div className="pl-[10px]">
                  <p
                    style={{
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      display: "-webkit-box",
                      WebkitBoxOrient: "vertical",
                      WebkitLineClamp: 1,
                      fontFamily: "Archivo, serif",
                    }}
                    className="text-white text-[18px] font-[500] pt-[10px] pb-[5px]"
                  >
                    {item.title}
                  </p>

                  <div className="flex items-center gap-x-[30px] py-[3px]">
                    <p className="text-white text-[14px] py-[2px]">
                      Price : ${item.price}
                    </p>
                    <p className="text-white text-[14px] py-[2px]">
                      {item.category}
                    </p>
                  </div>

                  <p
                    style={{
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      display: "-webkit-box",
                      WebkitBoxOrient: "vertical",
                      WebkitLineClamp: 7,
                      fontFamily: "Archivo, serif",
                    }}
                    className="text-white text-[13px] py-[2px] pb-[3px] font-[400] text-justify"
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ====================== BUTTONS SECTION =========================== */}

        <div className="flex gap-x-[8px] absolute top-[90%] left-[35%]">
          {arrButton.map((_, index) => (
            <div className="" key={index}>
              <button
                style={{
                  backgroundColor: current === index ? "white" : "#5b5b5b",
                }}
                onClick={() => setcurrent(index)}
                className="w-[10px] h-[10px] cursor-pointer bg-gray-500 rounded-[50%]"
              ></button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
