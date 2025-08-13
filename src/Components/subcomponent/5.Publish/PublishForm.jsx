import React, { useEffect } from "react";
import { RxDragHandleVertical } from "react-icons/rx";
import { TbBrandComedyCentral } from "react-icons/tb";

const PublishForm = ({
  handlesubmit,
  url,
  seturl,
  browse,
  setbrowse,
  error,
  drop,
  setdrop,
  handledrop,
  handleclick,
  currentimage,
  setcurrentimage,
}) => {
  return (
    <>
      <div className="w-[100%]  ">
        <div className="w-[45%] max-[890px]:w-[50%] max-[763px]:w-[60%] max-[637px]:w-[80%] max-[471px]:w-[95%] mx-auto h-[500px] pt-[90px] ">
          <form className="w-full flex flex-col" onSubmit={handlesubmit}>
            {/* =========================== BOOK NAME SECTION ======================================= */}

            <p className="text-[17px] pb-[10px] ">Book Name</p>
            <input
              type="text"
              name="title"
              placeholder="Title.."
              className="w-full outline-black outline-[1px] hover:outline-blue-400 focus:outline-blue-400  rounded-lg px-[10px] py-[5px] transition-all duration-400 ease"
            />

            {/* =========================== CATEGORY SECTION ======================================= */}

            <p className="text-[17px] py-[10px]">Category</p>
            {/* <input
              type="text"
              name="category"
              placeholder="Category.."
              className="w-full mx-auto outline-black outline-[1px] hover:outline-blue-400 focus:outline-blue-400  rounded-lg px-[10px] py-[5px] transition-all duration-400 ease"
            /> */}

            <select
              name="category"
              className="w-full mx-auto outline-black outline-[1px] hover:outline-blue-400 focus:outline-blue-400  rounded-lg px-[10px] py-[8px] transition-all duration-400 ease"
            >
              <option value="Fantasy">Fantasy</option>
              <option value="Romance">Romance</option>
              <option value="Fiction">Fiction</option>
              <option value="Cartoons">Cartoons</option>
              <option value="Empty">None</option>
            </select>

            {/* =========================== GENDER SECTION ======================================= */}

            <p className="text-[17px] py-[14px]">Gender Oriented</p>

            {/* ================= MALE  */}

            <div className="w-[50%] pb-[14px] mx-auto flex justify-between max-[360px]:w-[80%]">
              <label htmlFor="Male" className="cursor-pointer">
                Male
                <input
                  type="radio"
                  id="Male"
                  name="gender"
                  value={"Male"}
                  className="accent-black scale-110 cursor-pointer ml-[20px] max-[395px]:ml-[10px] "
                />
              </label>

              {/* ================= FEMALE  */}

              <label htmlFor="Female" className="cursor-pointer">
                Female
                <input
                  type="radio"
                  name="gender"
                  id="Female"
                  value={"Female"}
                  className="accent-black scale-110 cursor-pointer ml-[20px] max-[395px]:ml-[10px] "
                />
              </label>
            </div>

            {/* ======================= IMAGE COVER ========================================== */}

            <p className="text-[17px] pb-[14px]">Image Cover</p>
            <img
              src={currentimage}
              className="w-[120px] h-[120px] rounded-lg mb-[14px]"
            />

            {/* =========================== WISH OF IMAGE FORM ================================= */}

            <div
              className="max-[354px]:h-[130px]"
              style={{
                opacity: url || browse || drop ? 0 : 1,
                height: url || browse || drop ? "0px" : "110px",
                // transform:
                //   url || browse || drop ? "translateX(500px)" : "translateX(0px)",
                transition: "height ease 500ms, opacity ease 500ms",
                paddingBottom: "5px",
                overflow: "hidden",
              }}
            >
              <p className="text-[17px] ">
                How would you like to add your image?
              </p>
              <div className="w-[80%] max-[992px]:w-[85%] max-[926px]:w-[90%] max-[891px]:w-[93%] mx-auto flex justify-between py-[14px]">
                <button
                  onClick={() => seturl(true)}
                  type="button"
                  className="rounded-lg px-[10px] py-[5px] shadow-[1px_2px_19px_3px_rgba(0,0,0,0.2)] hover:shadow-[1px_2px_19px_3px_rgba(59,130,246,0.8)] cursor-pointer transition ease duration-300 max-[408px]:text-sm max-[408px]:px-[10px] max-[408px]:py-[4px] max-[364px]:px-[5px] max-[320px]:text-[12px] active:bg-black/50 active:text-white "
                >
                  Image URL
                </button>

                <button
                  onClick={() => setdrop(true)}
                  type="button"
                  className="rounded-lg px-[10px] py-[5px] shadow-[1px_2px_19px_3px_rgba(0,0,0,0.2)] hover:shadow-[1px_2px_19px_3px_rgba(59,130,246,0.8)] cursor-pointer transition ease duration-300 max-[408px]:text-sm max-[408px]:px-[10px] max-[408px]:py-[4px] max-[364px]:px-[5px] max-[320px]:text-[12px] active:bg-black/50 active:text-white "
                >
                  Drag & Drop
                </button>
                <button
                  onClick={() => setbrowse(true)}
                  type="button"
                  className="rounded-lg px-[10px] py-[5px] shadow-[1px_2px_19px_3px_rgba(0,0,0,0.2)] hover:shadow-[1px_2px_19px_3px_rgba(59,130,246,0.8)] cursor-pointer transition ease duration-300 max-[408px]:text-sm max-[408px]:px-[10px] max-[408px]:py-[4px] max-[364px]:px-[5px] max-[320px]:text-[12px] active:bg-black/50 active:text-white "
                >
                  Browse Files
                </button>
              </div>
            </div>

            {/* =========================== URL DIV ================================= */}

            <div
              style={{
                opacity: url ? 100 : 0,
                height: url ? "auto" : "0px",
                transition: "opacity ease 1s, height ease 1s",
                transitionDelay: "200ms",
              }}
            >
              <p className="text-[17px] pb-[14px]">Enter Image URL</p>
              <input
                type="text"
                placeholder="Enter Image URL.."
                className="w-full mx-auto outline-black outline-[1px] hover:outline-blue-400 focus:outline-blue-400  rounded-lg px-[10px] py-[5px] transition-all duration-400 ease"
                onChange={(e) => setcurrentimage(e.target.value)}
              />
            </div>

            {/* =========================== DRAG AND DROP SECTION =========================== */}

            <div
              className="w-[100%]  mx-auto "
              style={{
                opacity: drop ? 100 : 0,
                height: drop ? "auto" : "0px",
                transition: "opacity ease 1s, height ease 1s",
                transitionDelay: "200ms",
              }}
              onDrop={handledrop}
            >
              <div
                onDragOver={(e) => e.preventDefault()}
                className="w-full h-[250px] bg-gray-200 flex justify-center items-center rounded-xl"
              >
                <p className="text-[17px]">Drop Your Image Here</p>
              </div>
            </div>

            {/* ==================================== BROWSE FILES ============================== */}

            <div
              className="relative"
              style={{
                opacity: browse ? 1 : 0,
                height: browse ? "30px" : "0px",
                transition: "height 1s ease, opacity 500ms ease",
                transitionDelay: "200ms",
              }}
            >
              <input
                type="file"
                accept="image/*"
                onChange={handleclick}
                className="absolute z-10 border-[1px] rounded-[10px] border-black px-[10px] py-[4px] w-[230px] outline-none"
                style={{
                  opacity: browse ? 1 : 0,
                  transition: "opacity ease 1s",
                }}
              />
            </div>

            {/* ================================ CONTENT DIV ================================ */}
            <div className="flex flex-col relative z-10">
              <p className="text-[17px] py-[14px] ">Content Of Book</p>
              <textarea
                name="description"
                className="outline-[1px] rounded-lg px-[10px] py-[5px] h-[200px] resize-none transition-all duration-400 ease hover:outline-blue-400 focus:outline-blue-400"
                contentEditable
                placeholder="Content Or Description Of Book"
              ></textarea>
            </div>

            <div className="flex flex-col">
              <p
                style={{
                  opacity: error ? 1 : 0,
                  height: error ? "20px" : "0px",
                  transition: "opacity ease 700ms, height ease 700ms",
                }}
                className="text-red-500 mx-auto my-[5px] font-[500]"
              >
                All Data Fields Must Be Filled
              </p>
            </div>

            <div className="flex items-center justify-end w-full ">
              <button
                type="submit"
                className=" my-[14px] mb-[20px] px-[15px] py-[5px] text-[17px] bg-blue-500 rounded-lg font-[500] text-white cursor-pointer active:brightness-60 active:scale-95"
              >
                Submit
              </button>
            </div>
          </form>

          {/* =========================== FORMS END ============================= */}
        </div>
      </div>
    </>
  );
};

export default PublishForm;
