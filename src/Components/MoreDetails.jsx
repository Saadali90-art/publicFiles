import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navigation from "./subcomponent/1.Home/Navigation";
import Cards from "./subcomponent/1.Home/subHome/Cards.jsx";
import MoreDetail from "./Requests/MoreDetails/More.js";
import NovelDetails from "./subcomponent/7.MoreDetails/NovelDetails.jsx";
import Comments from "./subcomponent/7.MoreDetails/Comments.jsx";

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

  useEffect(() => {
    const fetchData = async (data, link) => {
      let moreDetails = await MoreDetail(data, link);
      setMoreInfo(moreDetails);
    };

    fetchData({ id: data }, "getmoreinfo");
  }, []);

  //======================== GETTING THE LIKED DATA  =============================

  useEffect(() => {
    const fetchData = async (data, link) => {
      let youLiked = await MoreDetail(data, link);
      setYouLike(youLiked.message);
    };

    fetchData({ category: moreInfo?.category }, "youlike");
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

  const getComments = async (data, link) => {
    let commentInfo = await MoreDetail(data, link);
    setComments(commentInfo);
  };

  // ============================= SENDING COMMENT TO DB ================================

  const handlepost = async () => {
    if (moreInfo !== null) {
      let token = localStorage.getItem("tokenuserin");
      let dataToSend = { title: moreInfo?.title, token, commentValue };

      await MoreDetail(dataToSend, "comment");

      await getComments({ title: moreInfo?.title }, "allcomments");

      setCommentDiv(false);
    }
  };

  useEffect(() => {
    if (moreInfo !== null) {
      getComments({ title: moreInfo?.title }, "allcomments");
    }
  }, [moreInfo]);

  const handlemore = (item) => {
    console.log(item);
  };

  return (
    <div className="select-none">
      {/* ================== MORE DETAIL NAV BAR  ======================== */}

      <Navigation />

      {/* ======================= SPECIFIC NOVEK DETAILS =========================== */}

      <NovelDetails moreInfo={moreInfo} />

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

      <Comments
        commentDiv={commentDiv}
        setCommentDiv={setCommentDiv}
        handlepost={handlepost}
        handlecomment={handlecomment}
        comments={comments}
        setCommentValue={setCommentValue}
      />
    </div>
  );
};

export default MoreDetails;
