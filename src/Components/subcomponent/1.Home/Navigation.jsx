import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SignInData from "../../Requests/Home Requests/SignInData.js";
import newBooks from "../../Requests/Home Requests/NewBooks.js";
import SideBar from "./subHome/SideBar.jsx";
import NavBar from "./subHome/NavBar.jsx";
import SearchData from "./subHome/SearchData.jsx";

const Navigation = () => {
  const [userInfo, setUserInfo] = useState(null);
  const [signout, setsignout] = useState(false);
  const [sideBar, setSideBar] = useState(false);
  const [search, setSearch] = useState(false);
  const [titles, setTitles] = useState([]);
  const [searchInfo, setSearchInfo] = useState("");
  const [suggestion, setSuggestion] = useState(false);
  const [showpop, setshowpop] = useState(false);
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

  // =========================== DELETING POPUP=============================

  const deletepopup = () => {
    setshowpop(true);
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

        <SideBar
          sideBar={sideBar}
          setSideBar={setSideBar}
          userInfo={userInfo}
        />

        {/* ======================== NAV BAR ============================ */}

        <NavBar
          setSideBar={setSideBar}
          userInfo={userInfo}
          setsignout={setsignout}
          setSearch={setSearch}
          showpop={showpop}
          signout={signout}
          handlesignout={handlesignout}
          setshowpop={setshowpop}
          deletepopup={deletepopup}
        />

        <div className="flex-grow h-[2px] bg-[#eaeaea]"></div>
      </div>

      {/* ============================= SEARCH FIELD ================================= */}

      <SearchData
        search={search}
        handleSearch={handleSearch}
        handleSearchOff={handleSearchOff}
        suggestArr={suggestArr}
        suggestion={suggestion}
        handleValue={handleValue}
        searchInfo={searchInfo}
      />
    </nav>
  );
};

export default Navigation;
