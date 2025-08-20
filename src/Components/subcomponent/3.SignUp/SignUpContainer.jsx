import logoMain from "../../../assets/logoMain.webp";
import "../../../animation.css";
import bgimg from "../../../assets/bgimg.jpg";
import { Link } from "react-router-dom";
import SignUpForm from "./SignUpForm";
import facebook from "../../../assets/facebook.png";
import instagram from "../../../assets/instagram.png";

const SignUpContainer = ({
  handlesubmit,
  showpass,
  setshowpass,
  showerror,
  shake,
  animateArr,
}) => {
  return (
    <>
      {/* ================================= SIGN UP CONTAINER ================================== */}

      <div className="w-[350px] max-[369px]:w-[250px]  h-[600px] max-[369px]:h-[550px] bg-white rounded-md flex items-center justify-center">
        <div className=" w-[85%] h-[95%]  flex flex-col ">
          {/* ==================== NAV BAR SIGN UP CONTAINER =========================== */}

          <div className="flex items-center justify-center">
            <img
              src={logoMain}
              alt="Logo Image"
              className="w-[70px] h-[70px] max-[369px]:w-[50px] max-[369px]:h-[50px] rounded-[50%]"
            />
            <h1
              className="font-[900] text-[40px] max-[369px]:text-[30px] text-transparent bg-clip-text px-[20px] max-[369px]:px-[10px] bg-cover"
              style={{
                fontFamily: "'Dancing Script', sans-serif",
                backgroundImage: `url(${bgimg})`,
                animation: "mover 8s ease infinite",
              }}
            >
              Book Craze
            </h1>
          </div>

          <p className="text-[12px] max-[369px]:text-[10px] max-[369px]:w-[84%] text-center pb-[10px] text-gray-500 w-[90%] mx-auto font-[400] ">
            Join Book Craze and unlock a wild world of stories, shelves, and
            surprises!
          </p>

          {/* ===================== FORM SIGN UP ======================================  */}

          <SignUpForm
            handlesubmit={handlesubmit}
            showpass={showpass}
            setshowpass={setshowpass}
          />

          {/* ============================= LAST BUTTONS ==================================  */}

          <p className=" text-[10px] text-[#747272] mx-auto ">
            Already Have Account
            <Link to="/login" className="text-blue-500 underline">
              Log In
            </Link>
          </p>

          <p
            className=" text-[13px]  mx-auto py-[3px] text-red-600 transition duration-1000 delay-70 "
            style={{ opacity: showerror ? 100 : 0 }}
          >
            {animateArr[0]}
          </p>

          <button
            form="formsignup"
            type="submit"
            className="text-white bg-linear-to-bl from-blue-600 to-purple-600 w-[46%] uppercase rounded-4xl py-[6px] font-[600] mx-auto my-[18px] active:scale-95 active:brightness-70 cursor-pointer"
            style={{
              animation: shake ? "wrong 0.15s ease 3" : "none",
            }}
          >
            Sign Up
          </button>

          <div className="flex items-center gap-x-[3.5px]">
            <div className="flex-grow h-[1.5px] bg-[#cecccc]"></div>
            <span className="text-gray-400 font-[500]">OR</span>
            <div className="flex-grow h-[1.5px] bg-[#cecccc]"></div>
          </div>

          {/* ===================== MORE SIGN UP OPTIONS ======================================== */}

          <div className="w-[90%] mx-auto my-auto flex justify-between ">
            <img
              className="w-[35px] h-[35px] p-[1px] rounded-[50%]"
              src="https://img.icons8.com/?size=512&id=4hR4Ih04Je2t&format=png"
              alt="Google Icon"
            />

            <img
              className="w-[35px] h-[35px] p-[1px] rounded-[50%]"
              src={facebook}
              alt="Facebook Icon"
            />

            <img
              className="w-[35px] h-[35px] p-[1px] rounded-[50%]"
              src="https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_960_720.png"
              alt="Github Icon"
            />

            <img
              className="w-[35px] h-[35px] p-[1px] rounded-[50%]"
              src={instagram}
              alt="Instagram Icon"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUpContainer;
