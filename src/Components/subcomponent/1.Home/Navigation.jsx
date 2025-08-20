import { useState, useEffect } from "react";
import bgimg from "../../../assets/bgimg.jpg";
import { Link, useNavigate } from "react-router-dom";
import { PiSignOut } from "react-icons/pi";
import userdelete from "../../../assets/userdelete.svg";
import { IoIosArrowDown } from "react-icons/io";
import more from "../../../assets/more.png";
import logoMain from "../../../assets/logoMain.webp";

const Navigation = ({ deletepopup }) => {
  const [userInfo, setUserInfo] = useState(null);
  const [signout, setsignout] = useState(false);
  const [sideBar, setSideBar] = useState(false);
  const navigate = useNavigate();

  // =========================== GETTING THE DATA FOR Navigation Bar ======================
  const getSignUp = async () => {
    let token = localStorage.getItem("tokenuserin");

    if (token) {
      let reqOpt = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          authorization: token,
        },
      };

      let result = await fetch("http://127.0.0.1:8000/", reqOpt);
      let response = await result.json();

      if (result.ok) {
        setUserInfo(response.message);
      }
    }
  };

  useEffect(() => {
    getSignUp();
  }, []);

  // =============================== HANDLING THE SIGN OUT ================================

  const handlesignout = () => {
    localStorage.removeItem("tokenuserin");
    location.reload();
  };

  return (
    <nav className="w-[100%] bg-white  fixed top-0 z-20">
      {/* =========================== SIDE BAR ============================= */}

      <div>
        <div
          style={{
            height: sideBar ? `${window.innerHeight}px` : "0px",
            transform: sideBar ? "translateX(0px)" : "translateX(-300px)",
            transition: "transform 0.4s ease",
          }}
          className="absolute top-0 w-[270px] z-30 bg-blue-200 h-screen border-r-[2px] border-gray-400"
        >
          <div
            style={{
              opacity: sideBar ? 1 : 0,
              transform: sideBar ? "translateY(0px)" : "translateY(10px)",
              transition: "transform 0.8s ease 0.3s, opacity 0.5s ease 0.2s ",
            }}
            className="w-[90%] mx-auto flex  justify-between items-center"
          >
            <img src={logoMain} alt="" className="w-[50px] h-[50px] " />
            <img
              onClick={() => setSideBar(false)}
              src="https://www.svgrepo.com/show/408883/hide-sidebar-horiz.svg"
              className="w-[20px] h-[20px] cursor-pointer"
              alt=""
            />
          </div>

          <div
            className="px-[20px] "
            style={{
              opacity: sideBar ? 1 : 0,
              transform: sideBar ? "translateY(0px)" : "translateY(10px)",
              transition: "transform 0.8s ease 0.4s, opacity 0.5s ease 0.3s ",
            }}
          >
            <button className="flex pl-[5px] my-[2px] cursor-pointer py-[10px] w-full hover:bg-gray-200 rounded-md text-[16px] font-[500]">
              <Link to={"/"}> Home</Link>
            </button>
            <button className="flex pl-[5px] my-[2px] cursor-pointer py-[10px] w-full hover:bg-gray-200 rounded-md text-[16px] font-[500]">
              <Link to={"/user/publish"}> Publish</Link>
            </button>
            <button className="flex pl-[5px] my-[2px] cursor-pointer py-[10px] w-full hover:bg-gray-200 rounded-md text-[16px] font-[500]">
              <Link to={"/user/dashboard"}> Dashboard</Link>
            </button>
            <button className="flex pl-[5px] my-[2px] cursor-pointer py-[10px] w-full hover:bg-gray-200 rounded-md text-[16px] font-[500]">
              <Link to={"/user/cart"}>My Cart</Link>
            </button>
            <button className="flex pl-[5px] my-[2px] cursor-pointer py-[10px] w-full hover:bg-gray-200 rounded-md text-[16px] font-[500]">
              <Link to={"/empowering/our%20mission"}> About Us</Link>
            </button>
            <button className="flex pl-[5px] my-[2px] cursor-pointer py-[10px] w-full hover:bg-gray-200 rounded-md text-[16px] font-[500]">
              <Link to={"/empowering/discover%20new%20worlds"}>
                Discover Ideas
              </Link>
            </button>
            <button className="flex pl-[5px] my-[2px] cursor-pointer py-[10px] w-full hover:bg-gray-200 rounded-md text-[16px] font-[500]">
              <Link to={"/login"}> Log In</Link>
            </button>
          </div>
        </div>
      </div>

      <div className="container w-[70%] max-[1170px]:w-[80%]  max-[924px]:w-[90%] max-[780px]:gap-x-[20px] mx-auto flex gap-x-[10px] items-center justify-between relative ">
        {/* ============= TEXT  */}

        <div className="flex items-center gap-x-[10px]">
          <button
            onClick={() => setSideBar(true)}
            className="hidden max-[645px]:block"
          >
            <img src={more} className="w-[15px] h-[15px]" />
          </button>
          <h1
            className="font-[700] text-[30px] max-[645px]:text-[20px] text-transparent bg-clip-text  bg-cover py-[12px]"
            style={{
              fontFamily: "Playfair Display SC, sans-serif",
              backgroundImage: `url(${bgimg})`,
              animation: "mover 8s ease infinite",
            }}
          >
            Book Craze
          </h1>
        </div>

        {/* =============================== RIGHT SIDE BUTTONS  */}

        <div
          className="flex items-center max-[656px]:hidden"
          style={{ fontFamily: "Montserrat, sans-serif" }}
        >
          <div
            style={{
              display: localStorage.getItem("tokenuserin") ? "visible" : "none",
            }}
          >
            <button
              onClick={() => navigate("/")}
              className=" mr-[18px]  max-[789px]:mr-[9px] max-[789px]:text-[13px] text-[15px] font-[550] cursor-pointer underline decoration-transparent decoration-[3px] underline-offset-[15px] hover:decoration-blue-600 hover:underline-offset-[5px] transition-all duration-200 ease  "
            >
              Home
            </button>
            <button
              onClick={() => navigate("/user/dashboard")}
              className=" mr-[18px]  max-[789px]:mr-[9px] max-[789px]:text-[13px] text-[15px] font-[550] cursor-pointer underline decoration-transparent decoration-[3px] underline-offset-[15px] hover:decoration-blue-600 hover:underline-offset-[5px] transition-all duration-200 ease  "
            >
              Dashboard
            </button>
            <button
              onClick={() => navigate("/user/publish")}
              className=" mr-[18px]  max-[789px]:mr-[9px] max-[789px]:text-[13px] text-[15px] font-[550] cursor-pointer underline decoration-transparent decoration-[3px] underline-offset-[15px] hover:decoration-blue-600 hover:underline-offset-[5px] transition-all duration-200 ease  "
            >
              Publish
            </button>
            <button
              onClick={() => navigate("/user/cart")}
              className=" mr-[18px]  max-[789px]:mr-[9px] max-[789px]:text-[13px] text-[15px] font-[550] cursor-pointer underline decoration-transparent decoration-[3px] underline-offset-[15px] hover:decoration-blue-600 hover:underline-offset-[5px] transition-all duration-200 ease  "
            >
              My Cart
            </button>
          </div>
        </div>
        <div>
          <button
            style={{
              display: localStorage.getItem("tokenuserin") ? "none" : "visible",
            }}
            onClick={() => navigate("/login")}
            className="  mr-[20px] text-[15px] font-[600] cursor-pointer underline decoration-transparent decoration-[3px] underline-offset-[15px] hover:decoration-blue-600 hover:underline-offset-[5px] transition-all duration-200 ease"
          >
            Log In
          </button>
          {userInfo !== null ? (
            <button
              className="text-white bg-linear-to-br from-blue-600 to-purple-600 capitalize rounded-lg px-[8px] py-[5px] font-[500] cursor-pointer text-[14.5px] active:scale-95 active:brightness-70 flex items-center gap-x-[5px] "
              onMouseEnter={() => setsignout(true)}
              onMouseLeave={() => setsignout(false)}
            >
              Hello {userInfo.name} <IoIosArrowDown />
            </button>
          ) : (
            <button
              onClick={() => navigate("/signup")}
              className="text-white bg-linear-to-br from-blue-600 to-purple-600 capitalize rounded-lg px-[8px] py-[5px] font-[500] cursor-pointer text-[14.5px] active:scale-95 active:brightness-70"
            >
              Sign in
            </button>
          )}
        </div>

        {/* ==================== EXTRA DIV FOR USER OUT OF WEBSITE  */}

        <div
          onMouseEnter={() => setsignout(true)}
          onMouseLeave={() => setsignout(false)}
          className="absolute z-22  top-[70%] right-[0px] h-[80px] "
        >
          {signout && (
            <div
              className="w-[160px]  flex items-center flex-col  bg-white rounded-lg border-[2px] border-[#e4e4e4]  mt-[10px] py-[5px]"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              <button
                className="text-[14px] font-[500] cursor-pointer border-black flex items-center w-[100%] gap-x-[7px] border-[1px] border-none  py-[5px] px-[15px]  hover:backdrop-brightness-75"
                onClick={handlesignout}
              >
                <PiSignOut size={15} />
                Sign Out
              </button>
              <button
                onClick={deletepopup}
                className="text-[14px] font-[500] cursor-pointer border-black flex items-center w-[100%] gap-x-[7px] border-[1px] border-none  py-[5px] px-[15px]  hover:backdrop-brightness-75 "
              >
                <img src={userdelete} alt="" className="w-[15px] h-[15px]" />
                Delete User
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="flex-grow h-[2px] bg-[#eaeaea]"></div>
    </nav>
  );
};

export default Navigation;
