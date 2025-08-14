import { useContext, useEffect, useState } from "react";
import bgimg from "../../../assets/bgimg.jpg";
import { useNavigate } from "react-router-dom";
import { PiSignOut } from "react-icons/pi";
import userdelete from "../../../assets/userdelete.svg";
import { SignData } from "../../../Context/SignContext";
import { IoIosArrowDown } from "react-icons/io";

const Navigation = ({ deletepopup }) => {
  const { signdata } = useContext(SignData);
  const [contextData, setContextData] = useState(null);
  const [userInfo, setuserInfo] = useState(null);
  const [signout, setsignout] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setuserInfo(contextData);
  }, [contextData]);

  useEffect(() => {
    setContextData(signdata);
  }, []);

  const handlesignout = () => {
    localStorage.removeItem("tokenuserin");
    location.reload();
  };

  return (
    <div className="container max-w-[80%]  mx-auto flex items-center justify-between relative">
      <div className="flex items-center">
        <h1
          className="font-[900] text-[40px]  text-transparent bg-clip-text px-[20px]  bg-cover"
          style={{
            fontFamily: "'Dancing Script', sans-serif",
            backgroundImage: `url(${bgimg})`,
            animation: "mover 8s ease infinite",
          }}
        >
          Book Craze
        </h1>
      </div>

      <div
        className="flex items-center "
        style={{ fontFamily: "Montserrat, sans-serif" }}
      >
        <div
          style={{
            display: localStorage.getItem("tokenuserin") ? "visible" : "none",
          }}
        >
          <button
            onClick={() => navigate("/user/dashboard")}
            className=" mr-[25px] text-[16px] font-[550] cursor-pointer underline decoration-transparent decoration-[3px] underline-offset-[15px] hover:decoration-blue-600 hover:underline-offset-[5px] transition-all duration-200 ease"
          >
            Dashboard
          </button>
          <button
            onClick={() => navigate("/user/publish")}
            className=" mr-[25px] text-[16px] font-[550] cursor-pointer underline decoration-transparent decoration-[3px] underline-offset-[15px] hover:decoration-blue-600 hover:underline-offset-[5px] transition-all duration-200 ease"
          >
            Publish
          </button>
          <button
            onClick={() => navigate("/user/cart")}
            className=" mr-[25px] text-[16px] font-[550] cursor-pointer underline decoration-transparent decoration-[3px] underline-offset-[15px] hover:decoration-blue-600 hover:underline-offset-[5px] transition-all duration-200 ease"
          >
            My Cart
          </button>
        </div>

        <button
          style={{
            display: localStorage.getItem("tokenuserin") ? "none" : "visible",
          }}
          onClick={() => navigate("/login")}
          className="  mr-[25px] font-[550] text-[16px] cursor-pointer underline decoration-transparent decoration-[3px] underline-offset-[15px] hover:decoration-blue-600 hover:underline-offset-[5px] transition-all duration-200 ease"
        >
          Log In
        </button>
        {userInfo !== null ? (
          <button
            className="text-white bg-linear-to-br from-blue-600 to-purple-600 capitalize rounded-xl px-[12px] py-[7px] font-[600] cursor-pointer text-[15px] mr-[18px] flex items-center gap-[10px]"
            onMouseEnter={() => setsignout(true)}
            onMouseLeave={() => setsignout(false)}
          >
            Hello {signdata.name} <IoIosArrowDown />
          </button>
        ) : (
          <button
            onClick={() => navigate("/signup")}
            className="text-white bg-linear-to-br from-blue-600 to-purple-600  uppercase rounded-2xl px-[17px] py-[7px] font-[600] active:scale-95 active:brightness-70 cursor-pointer text-[15px]  mr-[18px]"
          >
            Sign in
          </button>
        )}
      </div>

      <div
        onMouseEnter={() => setsignout(true)}
        onMouseLeave={() => setsignout(false)}
        className="absolute z-22  top-[80%] right-[20px] h-[80px] "
      >
        {signout && (
          <div className="w-[150px] flex items-center flex-col  bg-white rounded-xl border-[1px] mt-[10px] py-[5px]">
            <button
              className="border-black flex items-center w-[80%] gap-x-[5px] border-[1px] border-none text-[16px] py-[5px] cursor-pointer "
              onClick={handlesignout}
            >
              <PiSignOut />
              Sign Out
            </button>
            <button
              onClick={deletepopup}
              className="border-black flex items-center w-[80%] gap-x-[5px] border-[1px] border-none text-[16px] py-[5px] cursor-pointer"
            >
              <img src={userdelete} alt="" className="w-[20px] h-[20px]" />
              Delete User
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navigation;

// import { useContext, useEffect, useState } from "react";
// import bgimg from "../../../assets/bgimg.jpg";
// import { useNavigate } from "react-router-dom";
// import { PiSignOut } from "react-icons/pi";
// import userdelete from "../../../assets/userdelete.svg";
// import { SignData } from "../../../Context/SignContext";
// import { IoIosArrowDown } from "react-icons/io";

// const Navigation = ({ deletepopup }) => {
//   const { signdata } = useContext(SignData); // ✅ Hook at top level
//   const [userInfo, setUserInfo] = useState(null);
//   const [signout, setSignout] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     setUserInfo(signdata);
//   }, [signdata]); // ✅ Update when context changes

//   const handleSignout = () => {
//     localStorage.removeItem("tokenuserin");
//     navigate("/login"); // ✅ No full page reload
//   };

//   const isLoggedIn = Boolean(localStorage.getItem("tokenuserin"));

//   return (
//     <div className="container max-w-[80%] mx-auto flex items-center justify-between relative">
//       {/* Logo */}
//       <div className="flex items-center">
//         <h1
//           className="font-[900] text-[40px] text-transparent bg-clip-text px-[20px] bg-cover"
//           style={{
//             fontFamily: "'Dancing Script', sans-serif",
//             backgroundImage: `url(${bgimg})`,
//             animation: "mover 8s ease infinite",
//           }}
//         >
//           Book Craze
//         </h1>
//       </div>

//       {/* Navigation buttons */}
//       <div
//         className="flex items-center"
//         style={{ fontFamily: "Montserrat, sans-serif" }}
//       >
//         {/* Logged in user menu */}
//         <div style={{ display: isLoggedIn ? "flex" : "none" }}>
//           <button
//             onClick={() => navigate("/user/dashboard")}
//             className="mr-[25px] text-[16px] font-[550] cursor-pointer underline decoration-transparent decoration-[3px] underline-offset-[15px] hover:decoration-blue-600 hover:underline-offset-[5px] transition-all duration-200 ease"
//           >
//             Dashboard
//           </button>
//           <button
//             onClick={() => navigate("/user/publish")}
//             className="mr-[25px] text-[16px] font-[550] cursor-pointer underline decoration-transparent decoration-[3px] underline-offset-[15px] hover:decoration-blue-600 hover:underline-offset-[5px] transition-all duration-200 ease"
//           >
//             Publish
//           </button>
//           <button
//             onClick={() => navigate("/user/cart")}
//             className="mr-[25px] text-[16px] font-[550] cursor-pointer underline decoration-transparent decoration-[3px] underline-offset-[15px] hover:decoration-blue-600 hover:underline-offset-[5px] transition-all duration-200 ease"
//           >
//             My Cart
//           </button>
//         </div>

//         {/* Login button */}
//         <button
//           style={{ display: isLoggedIn ? "none" : "block" }}
//           onClick={() => navigate("/login")}
//           className="mr-[25px] font-[550] text-[16px] cursor-pointer underline decoration-transparent decoration-[3px] underline-offset-[15px] hover:decoration-blue-600 hover:underline-offset-[5px] transition-all duration-200 ease"
//         >
//           Log In
//         </button>

//         {/* User greeting / Sign in button */}
//         {userInfo ? (
//           <button
//             className="text-white bg-linear-to-br from-blue-600 to-purple-600 capitalize rounded-xl px-[12px] py-[7px] font-[600] cursor-pointer text-[15px] mr-[18px] flex items-center gap-[10px]"
//             onMouseEnter={() => setSignout(true)}
//             onMouseLeave={() => setSignout(false)}
//           >
//             Hello {userInfo?.name} <IoIosArrowDown />
//           </button>
//         ) : (
//           <button
//             onClick={() => navigate("/signup")}
//             className="text-white bg-linear-to-br from-blue-600 to-purple-600 uppercase rounded-2xl px-[17px] py-[7px] font-[600] active:scale-95 active:brightness-70 cursor-pointer text-[15px] mr-[18px]"
//           >
//             Sign in
//           </button>
//         )}
//       </div>

//       {/* Dropdown for signout/delete */}
//       <div
//         onMouseEnter={() => setSignout(true)}
//         onMouseLeave={() => setSignout(false)}
//         className="absolute z-22 top-[80%] right-[20px] h-[80px]"
//       >
//         {signout && (
//           <div className="w-[150px] flex items-center flex-col bg-white rounded-xl border-[1px] mt-[10px] py-[5px]">
//             <button
//               className="flex items-center w-[80%] gap-x-[5px] text-[16px] py-[5px] cursor-pointer"
//               onClick={handleSignout}
//             >
//               <PiSignOut />
//               Sign Out
//             </button>
//             <button
//               onClick={deletepopup}
//               className="flex items-center w-[80%] gap-x-[5px] text-[16px] py-[5px] cursor-pointer"
//             >
//               <img src={userdelete} alt="" className="w-[20px] h-[20px]" />
//               Delete User
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Navigation;
