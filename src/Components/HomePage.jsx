import { useEffect, useState } from "react";
import "../animation.css";
import Carousel from "./subcomponent/1.Home/Carousel";
import Navigation from "./subcomponent/1.Home/Navigation";
import WebNovels from "./subcomponent/1.Home/WebNovels";
import TopPicks from "./subcomponent/1.Home/TopPicks";
import novelinfo from "./db/data.js";
import { useNavigate } from "react-router-dom";
import newBooks from "./Requests/Home Requests/NewBooks.js";
import deleteUser from "./Requests/Home Requests/DeleteUser.js";
import NewArrivals from "./subcomponent/1.Home/NewArrivals.jsx";

const HomePage = () => {
  // ===================== FUNCTIONS CHANGING VARIABLES ==========================

  const [showpop, setshowpop] = useState(false);
  const navigate = useNavigate();

  const [current, setcurrent] = useState(() => {
    let savedata = localStorage.getItem("current");
    return savedata ? JSON.parse(savedata) : 0;
  });

  const [newArrival, setNewArrival] = useState([]);

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

  useEffect(() => {
    const fetchData = async (link) => {
      let data = await newBooks(link);
      setNewArrival(data);
    };

    fetchData("newarrivals");
  }, []);

  // =========================== DELETING POPUP=============================

  const deletepopup = () => {
    setshowpop(true);
  };

  // ========================== MORE DATA FOR HOME PAGE ==================================

  const handlemore = (item) => {
    if (item !== null) {
      navigate("/user/dashboard/more", { state: item._id });
    }
  };

  return (
    <div
      style={{
        fontFamily: "Open Sans, sans-serif",
        userSelect: "none",
      }}
    >
      <Navigation deletepopup={deletepopup} />

      {/* ================ Delete Pop Up =========================== */}

      {showpop && (
        <div className="w-screen h-screen absolute z-25 top-0 backdrop-brightness-70 flex items-center justify-center">
          <div className="w-[600px] h-[110px] bg-white rounded-lg relative">
            <p className="mx-[15px] my-[15px] font-[500]">
              Do you really want to delete your account.
            </p>

            <div className="absolute bottom-[10px] right-[10px] ">
              <button
                onClick={() => deleteUser(setshowpop, "deleteUser")}
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

      {/* ================= BANNER SECTION =======================  */}

      <div className=" w-[70%] h-[360px] mx-auto mt-[80px] flex justify-between ">
        <Carousel />

        <WebNovels data={novelinfo} />
      </div>

      <TopPicks handlemore={handlemore} />

      <NewArrivals handlemore={handlemore} newArrival={newArrival} />

      {/* ========================= TOP FANFIC TAGS ============================ */}
    </div>
  );
};

export default HomePage;
