import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import empty from "../assets/EmptyFolder.png";
import { IoIosArrowBack } from "react-icons/io";
import DashboardCards from "./subcomponent/4.Dashboard/DashboardCards";
import NoData from "./subcomponent/4.Dashboard/NoData";

const Dashboard = () => {
  // ======================== HOOKS OR DATA VARIABLE ================================

  const [userData, setuserData] = useState([]);
  const [loading, setloading] = useState(true);
  const navigate = useNavigate();
  let loadingdots = Array.from({ length: 4 });
  let [currentdot, setcurrentdot] = useState(0);
  const [moredata, setmoredata] = useState({});

  // ====================== GETTING DATA FROM DB =============================

  const getData = async () => {
    let token = localStorage.getItem("tokenuserin");

    let reqOpt = {
      method: "GET",
      headers: { "Content-Type": "text/json", tokenuser: token },
    };

    let result = await fetch("http://127.0.0.1:8000/user/dashboard", reqOpt);
    let response = await result.json();

    if (result.status === 200) {
      setuserData(response);
    } else {
      console.log(response);
    }
  };

  // ===================== FOR LOADING OR CREATE ONE ================================

  useEffect(() => {
    if (userData.length === 0) {
      setTimeout(() => {
        setloading(false);
      }, 5000);
    } else {
      setloading(true);
    }
  }, []);

  // ============================= FOR LOADING DOTS ===============================

  useEffect(() => {
    setTimeout(() => {
      if (currentdot === 3) {
        setcurrentdot(0);
      } else {
        setcurrentdot(currentdot + 1);
      }
    }, 100);
  }, [currentdot]);

  // ================ HANDLING THE ORE INFO PAGE AND GIVING THEM DATA =======================

  const handlemore = (index) => {
    setmoredata(userData[index]);
  };

  // ======================== CALLING THE DATA FUNCTION ===============================

  useEffect(() => {
    getData();
  }, []);

  return (
    <div style={{ fontFamily: "Montserrat, sans-serif" }}>
      {/* ======================== DASHBOARD NAVIGATION BAR  ============================= */}
      <div className="container max-w-[100%]  h-[70px]  bg-gray-100 fixed z-20">
        <div className="w-[80%] mx-auto h-[70px] flex items-center justify-center  ">
          <button
            className="absolute my-auto left-[15px] p-2 rounded-[50%] bg-transparent cursor-pointer max-[395px]:left-[1px]"
            onClick={() => navigate(-1)}
          >
            <IoIosArrowBack size={"24px"} />
          </button>
          <p className="text-[24px] font-[600] text-[#1c1c1c] max-[500px]:text-[22px] ">
            DashBoard
          </p>
        </div>
        <div className="flex-grow h-[2px] bg-[#eaeaea]"></div>
      </div>

      {/* ======================= DASHBOARD DATA ============================== */}

      <div>
        {/* ===================== IF DATA IS PRESENT IN DB  ================================ */}

        {userData.length !== 0 ? (
          <div className="w-[80%]  mx-auto pt-[100px] pb-[20px]">
            {/* ========================== YOUR DATA HUB =========================== */}

            <div className="flex justify-between items-center">
              <p className="text-[20px] font-[600] text-[#1c1c1c] py-[10px] ">
                Your Data Hub
              </p>
              <button
                className="px-[15px] py-[8px] rounded-lg font-[500] text-[16px] transition-all duration-300 ease bg-black text-white hover:bg-transparent hover:text-black hover:border-[1px] box-content cursor-pointer"
                onClick={() => navigate("/user/publish")}
              >
                Publish
              </button>
            </div>

            {/* =========================== PUBLISHED BOOK CARDS ============================= */}

            <DashboardCards userData={userData} />
          </div>
        ) : (
          <div className="pt-[80px] ">
            {/* =============================== IF DATA NOT PRESENT  ================================= */}

            <NoData
              loading={loading}
              loadingdots={loadingdots}
              currentdot={currentdot}
              empty={empty}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
