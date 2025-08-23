import { useState, useEffect } from "react";
import bgimg from "../../../assets/bgimg.jpg";
import { Link, useNavigate } from "react-router-dom";
import { PiSignOut } from "react-icons/pi";
import userdelete from "../../../assets/userdelete.svg";
import { IoIosArrowDown } from "react-icons/io";
import more from "../../../assets/more.png";
import logoMain from "../../../assets/logoMain.webp";
import SignInData from "../../Requests/Home Requests/SignInData.js";
import { IoSearch } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import newBooks from "../../Requests/Home Requests/NewBooks.js";

const Navigation = ({ deletepopup }) => {
  const [userInfo, setUserInfo] = useState(null);
  const [signout, setsignout] = useState(false);
  const [sideBar, setSideBar] = useState(false);
  const [search, setSearch] = useState(false);
  const [titles, setTitles] = useState([]);
  const [searchInfo, setSearchInfo] = useState("");
  const [suggestion, setSuggestion] = useState(false);
  const [suggestArr, setSuggestArr] = useState([]);

  const navigate = useNavigate();

  // ======================= GETTING THE USER INFORMATION FOR SIGN UP ==========================

  useEffect(() => {
    const fetchData = async (link, link2) => {
      let data = await SignInData(link);
      setUserInfo(data);
      let titles = await newBooks(link2);
      setTitles(titles);
    };

    fetchData("signindata", "titles");
  }, []);

  const handleSearch = (e) => {
    setSearchInfo(e.target.value);
    setSuggestion(true);

    setSuggestArr(
      titles.filter((item) =>
        item.toLowerCase().includes(searchInfo.toLowerCase())
      )
    );
  };

  const handleSearchOff = () => {
    setSearch(false);
    setSuggestion(false);
  };

  const handleValue = (item) => {
    navigate(`/search/${item}`);
  };

  // =============================== HANDLING THE SIGN OUT ================================

  const handlesignout = () => {
    localStorage.removeItem("tokenuserin");
    location.reload();
  };

  return (
    <nav className="w-[100%] bg-white  fixed top-0 z-20">
      <div
        style={{
          opacity: search ? 0 : 1,
          transform: search ? "translateX(-1350px)" : "translateX(0px)",
          transition: "transform 500ms ease, opacity 300ms ease",
        }}
      >
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

        {/* ======================== NAV BAR ============================ */}

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
                display: localStorage.getItem("tokenuserin")
                  ? "visible"
                  : "none",
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
            {userInfo !== null ? (
              <div className="w-[150px] flex flex-row-reverse justify-between items-center">
                <button
                  className="text-white bg-linear-to-br from-blue-600 to-purple-600 capitalize rounded-lg px-[8px] py-[5px] font-[500] cursor-pointer text-[14.5px] active:scale-95 active:brightness-70 flex items-center gap-x-[5px] "
                  onMouseEnter={() => setsignout(true)}
                  onMouseLeave={() => setsignout(false)}
                >
                  Hello {userInfo.name} <IoIosArrowDown />
                </button>
                <button
                  className="w-[30px] h-[30px] border-[1px] border-gray-400 flex items-center justify-center rounded-[50%] cursor-pointer"
                  onClick={() => setSearch(true)}
                >
                  <IoSearch size={20} color="#9ca3af" />
                </button>
              </div>
            ) : (
              <div className="w-[180px] flex flex-row-reverse justify-between items-center">
                <button
                  onClick={() => navigate("/signup")}
                  className="text-white bg-linear-to-br from-blue-600 to-purple-600 capitalize rounded-lg px-[8px] py-[8px] font-[500] cursor-pointer text-[14.5px] active:scale-95 active:brightness-70"
                >
                  Sign in
                </button>

                <button
                  style={{
                    display: localStorage.getItem("tokenuserin")
                      ? "none"
                      : "visible",
                  }}
                  onClick={() => navigate("/login")}
                  className=" text-[15px] font-[600] cursor-pointer underline decoration-transparent decoration-[3px] underline-offset-[15px] hover:decoration-blue-600 hover:underline-offset-[5px] transition-all duration-200 ease  flex items-center justify-center"
                >
                  Log In
                </button>
                <button
                  className="w-[30px] h-[30px] border-[1px] border-gray-400 flex items-center justify-center rounded-[50%] cursor-pointer"
                  onClick={() => setSearch(true)}
                >
                  <IoSearch size={20} color="#9ca3af" />
                </button>
              </div>
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
      </div>

      {/* ============================= SEARCH FIELD ================================= */}

      <div
        className="w-full absolute top-0 h-[70px]"
        style={{
          opacity: search ? 1 : 0,
          transform: search ? "translateX(0)" : "translateX(1350px)",
          transition: "transform 500ms ease, opacity 300ms ease",
        }}
      >
        <div className="flex items-center w-full h-full justify-center gap-x-[10px]">
          <div className="flex items-center bg-gray-200 rounded-2xl px-[10px] py-[4px] ">
            <IoSearch />
            <input
              type="text"
              value={searchInfo}
              placeholder="Search.."
              onChange={handleSearch}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  navigate(`/search/${searchInfo}`);
                }
              }}
              className="w-[550px] h-[30px] px-[10px] py-[6px] text-[15px] outline-none  "
            />
            <button
              className="w-[30px] h-[30px] rounded-[50%] cursor-pointer flex items-center justify-center "
              onClick={handleSearchOff}
            >
              <IoClose />
            </button>
          </div>
        </div>
        <div className="flex-grow h-[2px] bg-[#eaeaea]"></div>
      </div>

      {/* ================================== SUGGESTION BOX ================================ */}

      {suggestion && (
        <div className="absolute top-[70px] left-[27.3%] w-[615px] min-h-[80px] border-[2px] bg-white border-gray-200 rounded-md">
          {suggestArr.length === 0 ? (
            <div className="w-full h-[80px] flex items-center justify-center">
              <p className="text-black font-[500]">No Records Found</p>
            </div>
          ) : (
            <div>
              {suggestArr.map((item, index) => (
                <p
                  key={index}
                  className="text-sm px-[10px] py-[8px] hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleValue(item)}
                >
                  {item}
                </p>
              ))}
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navigation;
