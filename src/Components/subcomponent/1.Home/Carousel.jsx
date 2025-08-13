import React, { useEffect, useState } from "react";

const Carousel = ({ images }) => {
  const [current, setcurrent] = useState(0);

  const carousel = () => {
    setcurrent((current + 1) % images.length);
  };

  useEffect(() => {
    let timeout = setTimeout(() => {
      carousel();
    }, 5000);

    return () => clearTimeout(timeout);
  }, [current]);

  return (
    <div className="relative">
      <div
        className="flex  relative"
        style={{
          transform: `translateX(${-440 * current}px)`,
          transition: "transform 2s ease",
        }}
      >
        {images.map((item, index) => (
          // ============ BACKGROUND

          <div key={index} className="min-w-full rounded-md ">
            <img
              src={item.img}
              alt={`image ${index + 1}`}
              className="w-[100%] h-[260px] rounded-md blur-lg brightness-80"
            />

            {/* =========== INNER TEXT */}

            <div className="w-full h-full absolute top-0  flex">
              <div className="w-[40%] flex items-center justify-center">
                <img
                  src={item.img}
                  alt=""
                  className="w-[80%] h-[80%] rounded-lg"
                />
              </div>
              <div
                style={{ fontFamily: "Inter, sanserif" }}
                className="w-[60%] h-[80%] mt-[20px] flex flex-col items-start justify-center text-ellipsis overflow-hidden "
              >
                <p className="text-white text-[23px] font-[500] my-[10px]">
                  {item.heading}
                </p>
                <p
                  style={{
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: 6,
                  }}
                  className="text-[15px] w-[90%] text-justify overflow-hidden text-white "
                >
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ==================== BUTTONS SECTIONS ================================  */}

      <div className="absolute text-white bottom-[3%] left-[35%]">
        {images.map((_, index) => (
          <button
            key={index}
            className="w-[10px] h-[10px] bg-black rounded-[50%] mx-[5px]"
            style={{
              backgroundColor: index === current ? "blue" : "#6b6b6b",
              transition: "backgroundcolor 1s ease-in-out",
            }}
            onClick={() => setcurrent(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
