import React, { useEffect, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import "../animation.css";
import PublishForm from "./subcomponent/5.Publish/PublishForm";
import sendData from "./Requests/Publish/PublishData";

const Publish = () => {
  // =========== HOOKS OR OTHER DATA =====================

  const navigate = useNavigate();
  const [currentimage, setcurrentimage] = useState(
    "https://img.freepik.com/free-vector/blank-book-cover-white-vector-illustration_1284-41903.jpg?semt=ais_hybrid&w=740"
  );
  const [url, seturl] = useState(false);
  const [drop, setdrop] = useState(false);
  const [browse, setbrowse] = useState(false);
  const [error, seterror] = useState(false);

  // ================== FOR REMOVING THE DEFAULT BEHAVIOUR OF MVING TO OTHER TABS

  useEffect(() => {
    window.addEventListener("drop", (e) => e.preventDefault());
    window.addEventListener("dragover", (e) => e.preventDefault());
  }, []);

  // ============== FORM DATA TO OBJECT ======================

  const handlesubmit = (e) => {
    e.preventDefault();

    let data = e.target;
    let formData = new FormData(data);
    formData = Object.fromEntries(formData.entries());
    formData.image = currentimage;

    let DataPost = {
      title: formData.title,
      category: formData.category,
      gender: formData.gender,
      image: formData.image,
      price: formData.price,
      description: formData.description,
    };

    try {
      sendData(DataPost, "user/publish", seterror, navigate);
    } catch (error) {
      console.log("Error While Giving Data", error.message);
    }
  };

  // ================== FOR BROWSING FILE FROM COMPUTER =======================

  const handleclick = (e) => {
    e.preventDefault();

    let data = e.target.files[0];

    if (data) {
      let reader = new FileReader();
      reader.readAsDataURL(data);
      reader.onloadend = () => {
        setcurrentimage(reader.result);
      };
    }
  };

  // =================== FOR DROPING IMAGE ON DIV ====================

  const handledrop = (e) => {
    e.preventDefault();

    let data = e.dataTransfer.files[0];

    if (data) {
      let reader = new FileReader();

      reader.readAsDataURL(data);

      reader.onloadend = () => {
        const base64 = reader.result;
        setcurrentimage(base64);
      };
    }
  };

  return (
    <div
      style={{ fontFamily: "Montserrat, sans-serif" }}
      className="select-none"
    >
      {/* ============ Publish NAV BARR ==================*/}

      <div className="container max-w-[100%]  h-[70px]  bg-gray-100 fixed z-20">
        <div className="w-[80%] mx-auto h-[70px] flex items-center justify-center  ">
          <button
            className="absolute my-auto left-[15px] p-2 rounded-[50%] bg-transparent cursor-pointer max-[395px]:left-[1px]"
            onClick={() => navigate(-1)}
          >
            <IoIosArrowBack size={"24px"} />
          </button>
          <p className="text-[24px] font-[600] text-[#1c1c1c] max-[500px]:text-[22px] ">
            Publishing Book
          </p>
        </div>
        <div className="flex-grow h-[2px] bg-[#eaeaea]"></div>
      </div>

      {/* ===================== INPUT FORM AREA ======================== */}

      <PublishForm
        handlesubmit={handlesubmit}
        url={url}
        browse={browse}
        drop={drop}
        error={error}
        seturl={seturl}
        setbrowse={setbrowse}
        setdrop={setdrop}
        handledrop={handledrop}
        handleclick={handleclick}
        currentimage={currentimage}
        setcurrentimage={setcurrentimage}
      />
    </div>
  );
};

export default Publish;
