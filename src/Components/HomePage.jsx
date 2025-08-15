import { createContext, useContext, useEffect, useState } from "react";
import "../animation.css";
import Carousel from "./subcomponent/1.Home/Carousel";
import Navigation from "./subcomponent/1.Home/Navigation";
import WebNovels from "./subcomponent/1.Home/WebNovels";
import TopPicks from "./subcomponent/1.Home/TopPicks";
import { images, topPicks, novelinfo } from "./db/data.js";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  // ===================== FUNCTIONS CHANGING VARIABLES ==========================

  const [showpop, setshowpop] = useState(false);
  const navigate = useNavigate();

  const [current, setcurrent] = useState(() => {
    let savedata = localStorage.getItem("current");
    return savedata ? JSON.parse(savedata) : 0;
  });

  const [newArrival, setNewArrival] = useState([]);
  const toppicks = topPicks.slice(current * 9, current * 9 + 9);

  // ================== CHANGING THE ITEMS OF TOP PICKS AT REFRESH ===========================

  useEffect(() => {
    localStorage.setItem("current", JSON.stringify(current));
    if (current === 0 || current === 1 || current === 2) {
      localStorage.setItem("current", JSON.stringify(current + 1));
    }
    if (current >= 3) {
      localStorage.setItem("current", JSON.stringify(0));
    }
  }, []);

  // =================================== NEW ARRIVALS ===================================

  const newArrivals = async () => {
    let reqOpt = {
      method: "GET",
      headers: { "Content-Type": "text/json" },
    };

    let result = await fetch("http://127.0.0.1:8000/newarrivals", reqOpt);
    let response = await result.json();
    setNewArrival(response.slice(-6));
  };

  useEffect(() => {
    newArrivals();
  }, []);

  // =========================== DELETING THE USER ACCOUNT = =============================

  const deletepopup = () => {
    setshowpop(true);
  };

  const deleteuser = async () => {
    let data = localStorage.getItem("tokenuserin");

    let reqOpt = {
      method: "DELETE",
      headers: { "Content-Type": "application/json", token: data },
    };

    let result = await fetch("http://127.0.0.1:8000", reqOpt);

    console.log(result);

    if (result.ok) {
      let response = await result.json();
      console.log(response);
      localStorage.removeItem("tokenuserin");
      location.reload();
      setshowpop(false);
    }
  };

  // ========================== MORE DATA FOR HOME PAGE ==================================

  const handlemore = (item) => {
    if (item !== null) {
      navigate("/user/dashboard/more", { state: item });
    }
  };

  return (
    <div
      style={{
        fontFamily: "Open Sans, sans-serif",
        userSelect: "none",
      }}
    >
      {/* =================   NAVIGATION BAR -==========================  */}

      <nav className="w-[100%] bg-white fixed top-0 z-20">
        <Navigation deletepopup={deletepopup} />
        <div className="flex-grow h-[2px] bg-[#eaeaea]"></div>
      </nav>

      {/* ================ Delete Pop Up =========================== */}

      {showpop && (
        <div className="w-screen h-screen absolute z-25 top-0 backdrop-brightness-70 flex items-center justify-center">
          <div className="w-[600px] h-[110px] bg-white rounded-lg relative">
            <p className="mx-[15px] my-[15px] font-[500]">
              Do you really want to delete your account.
            </p>

            <div className="absolute bottom-[10px] right-[10px] ">
              <button
                onClick={deleteuser}
                className=" bg-red-500 text-white border-transparent hover:bg-white hover:text-red-500 border-[2px]  hover:border-red-500 text-sm px-[12px] py-[5px] rounded-md mr-[5px] font-[600] cursor-pointer "
              >
                Yes
              </button>
              <button
                onClick={() => setshowpop(false)}
                className=" bg-blue-500 text-white border-transparent hover:bg-white hover:text-blue-500  border-[2px] hover:border-blue-500 text-sm px-[12px] py-[5px] rounded-md font-[600] cursor-pointer "
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ================= CAROUSEL =======================  */}

      <div className=" w-[80%] h-[350px] mx-auto mt-[80px]  flex justify-between">
        <div className=" w-[47%] ">
          <h1 className="text-[24px] py-[10px] pb-[13px] font-[700] text-[#1c1c1c]">
            Popular Novels
          </h1>
          <div className=" w-[460px] h-[260px] overflow-hidden ">
            <Carousel images={images} />
          </div>
        </div>
        <div className=" w-[53%]">
          <WebNovels data={novelinfo} />
        </div>
      </div>

      {/* ==================  WEEKLY TOP PICKS ========================  */}

      <div className="container max-w-screen pb-[30px] bg-[#e9e9e9]">
        <TopPicks toppicks={toppicks} />
      </div>

      {/* =====================  Newest Novels  =============================  */}
      <div className="container max-w-[100%] mb-[20px] h-[420px] mt-[20px] ">
        <div className="w-[80%] h-full  mx-auto ">
          <h1 className="text-[24px] font-[700] py-[20px]">New Arrivals</h1>

          <div className="flex flex-wrap justify-between ">
            {newArrival.map((item, index) => (
              <div key={index} className="w-[165px] h-[310px] ">
                <div
                  onClick={() => handlemore(item)}
                  className="w-full h-[230px] overflow-hidden rounded-md cursor-pointer "
                >
                  <img
                    src={item.image}
                    className="w-full h-[230px] hover:scale-105 transition-all duration-500 ease"
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
                  className="text-[15px] font-[600] px-[4px] py-[10px] w-full h-[60px]"
                >
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
