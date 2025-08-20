import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navigation from "./subcomponent/1.Home/Navigation";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { TbCategoryPlus } from "react-icons/tb";
import { CgGenderFemale } from "react-icons/cg";
import { CgGenderMale } from "react-icons/cg";
import { FaRegCalendarAlt } from "react-icons/fa";
import { TfiControlShuffle } from "react-icons/tfi";
import { FaEye } from "react-icons/fa";
import Cards from "./Cards";

const MoreDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  let data = location.state;

  const [moreInfo, setMoreInfo] = useState(null);
  const [youLike, setYouLike] = useState([]);
  const [comments, setComments] = useState([]);
  const [commentDiv, setCommentDiv] = useState(false);
  const [commentValue, setCommentValue] = useState("");

  // ========================== FINDING DATA IN DATA BASE ============================

  const getMoreInfo = async () => {
    let reqopt = {
      method: "POST",
      body: JSON.stringify({ id: data }),
      headers: { "Content-Type": "application/json" },
    };

    let result = await fetch("http://127.0.0.1:8000/getmoreinfo", reqopt);
    let response = await result.json();
    setMoreInfo(response);
  };

  useEffect(() => {
    getMoreInfo();
  }, []);

  //======================== GETTING THE LIKED DATA  =============================

  const getLikeData = async () => {
    let categoryinfo = moreInfo?.category;

    let reqOpt = {
      method: "POST",
      body: JSON.stringify({ category: categoryinfo }),
      headers: { "Content-Type": "application/json" },
    };

    let result = await fetch("http://127.0.0.1:8000/youlike", reqOpt);
    let response = await result.json();

    let rmPresent = response.message;
    rmPresent = rmPresent.filter((item) => item.title !== moreInfo.title);
    rmPresent = rmPresent.slice(0, 6);
    setYouLike(rmPresent);
  };

  useEffect(() => {
    getLikeData();
  }, [moreInfo]);

  // ============================= CHECKING THE USER IS AUTHORIZED =========================

  const handlecomment = () => {
    let token = localStorage.getItem("tokenuserin");

    if (token) {
      setCommentDiv(true);
    } else {
      navigate("/login");
    }
  };

  // ======================= GETTING THE COMMENT DATA FROM THE DB =======================

  const getComments = async () => {
    let reqOpt = {
      method: "POST",
      body: JSON.stringify({ title: moreInfo?.title }),
      headers: { "Content-Type": "application/json" },
    };

    let result = await fetch("http://127.0.0.1:8000/allcomments", reqOpt);
    let response = await result.json();
    setComments(response.map((item) => item));
  };

  // ============================= SENDING COMMENT TO DB ================================

  const handlepost = async () => {
    let token = localStorage.getItem("tokenuserin");
    let dataToSend = { title: moreInfo?.title, token, commentValue };

    let reqOpt = {
      method: "POST",
      body: JSON.stringify(dataToSend),
      headers: { "Content-Type": "application/json" },
    };

    let result = await fetch("http://127.0.0.1:8000/comment", reqOpt);

    if (result.ok) {
      console.log("Comment Uploaded");
    } else {
      console.log("Not Uploaded Comment");
    }

    await getComments();

    setCommentDiv(false);
    console.log("i am done");
  };

  useEffect(() => {
    getComments();
  }, []);

  const handlemore = (item) => {
    console.log(item);
  };

  return (
    <div className="select-none">
      {/* ================== MORE DETAIL NAV BAR  ======================== */}

      <nav className="w-[100%] bg-white fixed top-0 z-20">
        <Navigation />
        <div className="flex-grow h-[2px] bg-[#eaeaea]"></div>
      </nav>

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
                src={moreInfo.image}
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
                <button className="bg-red-500 px-[9px] py-[7px] font-[500] rounded-lg text-white hover:bg-white hover:text-black border-transparent border-[1px] hover:border-black tranistion-all duration-500 ease hover:font-[500] cursor-pointer">
                  Read
                </button>
                <button className="bg-blue-500 px-[9px] py-[7px] font-[500] rounded-lg text-white hover:bg-white hover:text-black border-transparent border-[1px] hover:border-black tranistion-all duration-500 ease hover:font-[500] cursor-pointer">
                  Add To Cart
                </button>
                <button className="bg-purple-500 px-[9px] py-[7px] font-[500] rounded-lg text-white hover:bg-white hover:text-black border-transparent border-[1px] hover:border-black tranistion-all duration-500 ease hover:font-[500] cursor-pointer">
                  Download Now
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

      {/* ============================== YOU MAY ALSO LIKE ============================= */}

      <div className="w-[100%] h-[420px] mt-[30px] bg-gray-200">
        <div className="w-[80%] h-full my-[20px] mx-auto ">
          <p className="text-[24px] font-[700] py-[20px]">You May Also Like</p>

          <div className="flex flex-wrap justify-between ">
            {youLike.map((item, index) => (
              <Cards handlemore={handlemore} item={item} key={index} />
            ))}
          </div>
        </div>
      </div>

      {/* ================================== COMMENTS SECTION ================================= */}

      <div className="w-[100%] min-h-[150px] mb-[30px] ">
        <div className="w-[80%] h-full mx-auto">
          <div className="w-full  flex justify-between items-center py-[20px]">
            <p className="text-[24px] font-[700] ">Comments</p>

            {commentDiv ? (
              <div className="flex flex-row gap-x-[10px]">
                <button
                  onClick={() => setCommentDiv(false)}
                  className="px-[15px] py-[8px] rounded-lg font-[500] text-[16px] transition-all duration-300 ease bg-black text-white hover:bg-transparent hover:text-black border-transparent border-[1px] hover:border-black  cursor-pointer"
                >
                  Back
                </button>

                <button
                  onClick={handlepost}
                  className="px-[15px] py-[8px] rounded-lg font-[500] text-[16px] transition-all duration-300 ease bg-black text-white hover:bg-transparent hover:text-black border-transparent border-[1px] hover:border-black  cursor-pointer"
                >
                  Post
                </button>
              </div>
            ) : (
              <button
                onClick={handlecomment}
                className="px-[15px] py-[8px] rounded-lg font-[500] text-[16px] transition-all duration-300 ease bg-black text-white hover:bg-transparent hover:text-black border-transparent border-[1px] hover:border-black  cursor-pointer"
              >
                Comment
              </button>
            )}
          </div>

          {commentDiv ? (
            <div
              className="flex flex-col relative z-10"
              style={{
                height: commentDiv ? "200px" : "0px",
                opacity: commentDiv ? 1 : 0,
                transition: "height 700ms ease, opacity 700ms ease",
              }}
            >
              <textarea
                onChange={(e) => setCommentValue(e.target.value)}
                className="outline-[1px] rounded-lg px-[10px] py-[5px] h-[200px] resize-none transition-all duration-400 ease hover:outline-blue-400 focus:outline-blue-400"
                contentEditable
              ></textarea>
            </div>
          ) : comments.length === 0 ? (
            <div
              className="mx-auto w-full h-[70px] flex justify-center items-center"
              style={{
                height: commentDiv ? "0px" : "70px",
                opacity: commentDiv ? 0 : 1,
                transition: "height 700ms ease, opacity 700ms ease",
              }}
            >
              <p className="text-[17px] font-[600] ">No Recent Comments</p>
            </div>
          ) : (
            <div
              style={{
                height: commentDiv ? "0px" : "70px",
                opacity: commentDiv ? 0 : 1,
                transition: "height 700ms ease, opacity 700ms ease",
              }}
            >
              {comments.map((item, index) => (
                <div key={index} className=" my-[10px] bg-yellow-500">
                  <div className="flex items-center gap-x-[20px] ">
                    <p className="capitalize text-[17px] text-[500] font-[600]">
                      {item.name}
                    </p>

                    {item.Author && (
                      <p className="text-sm font-[600] bg-blue-500 px-[2px] rounded-md">
                        Author
                      </p>
                    )}
                  </div>
                  <p>{item.commentValue}</p>

                  <div className="grow bg-gray-300 h-[1px] my-[20px]"></div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MoreDetails;

// let rating = Math.random() * (5 - 1) + 1;
// if (rating > 4.8) rating = 5;
// let stararr = Array.from({ length: 5 });

// {/* ========================= RATINGS ============================ */}

//       <div className="flex mt-[10px] items-center">
//         {stararr.map((_, i) => (
//           <div key={i}>
//             {Math.floor(rating) > i ? (
//               <FaStar fill="yellow" size={"24px"} />
//             ) : (
//               <CiStar size={"24px"} />
//             )}
//           </div>
//         ))}
//         <p
//           style={{ fontFamily: "Libertinus Serif, serif" }}
//           className="text-[24px] font-[600] pl-[15px]"
//         >
//           {rating.toFixed(1)}
//         </p>
//       </div>
