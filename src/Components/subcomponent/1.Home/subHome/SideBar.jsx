import logoMain from "../../../../assets/Login/logoMain(2).png";
import { Link, useNavigate } from "react-router-dom";

const SideBar = ({ sideBar, setSideBar, userInfo }) => {
  const navigate = useNavigate();

  return (
    <>
      <div>
        <div
          style={{
            height: sideBar ? `${window.innerHeight}px` : "0px",
            transform: sideBar ? "translateX(0px)" : "translateX(-300px)",
            transition: "transform 0.4s ease",
            backgroundImage: `url(${"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwoICAgICAoPBwcHCAoHBwcHDQ8ICQcKFREWFiARHxMYHSggGBolGxUfITEhJSkrLi4uFx8zODMsNygtLisBCgoKDg0OFQ8PFSsZFRktKystLSsrKysrNys3LS03LTctNy0tLSstKysrLSsrNysrKysrKysrKysrKysrKysrK//AABEIASwAqAMBIgACEQEDEQH/xAAXAAEBAQEAAAAAAAAAAAAAAAABAAID/8QAFxABAQEBAAAAAAAAAAAAAAAAABEBEv/EABgBAQEBAQEAAAAAAAAAAAAAAAABAgYD/8QAFxEBAQEBAAAAAAAAAAAAAAAAABEBIf/aAAwDAQACEQMRAD8A0G2dx1WOH0Applka1rIzqDSGQkgSMQJJAkkCRUAInMFGYmswiwrSow9WNwNiNYm4xuKNRRWNxkNbigyymooEZJigBGKAEYYEGGHMUFghzDFBrMSIFjQKYekAaEXECKjTG4II0hIzFCggihQkEUJFjJJgrMJhCBQxC5giaiFCOqMNwIpcRlHUqBQoSCKFBGYcw4YUZhhiKBQ8mAIsxpBBESNZgRKVYyjEisxQpUZUaS4jMUaQMxRpQGY0kJEiggKQsSRzBcxLMMOYNQQNxBGEUxhGUU0gBSAihQJFKkChhhRmGFFBDmI4VRDGootagzGoswpVGYmoijkjFGRlQxKRkwoSCKGGCRmGNIqs5iaSUjMU1tQpGZhzDmFVghhKVYIjDBBmJpKsc9wRpIsYTSEjKaUCMmNRQIzCVgQKNIBFDDmAyTDmCjMOYYUBmKEpVgxNJRxijcUMViCNxQSM5ijRBiKNpRiNQpmgijSKQRQw5i1YIo1FBIzDmGHMRcwQwwxKsETUSVY4qNRRcIzFCikEUaUWpGYo1FCkZhjSiEZijcUKRmHMazFAEUMIsGYYYYLmMwwwwVmJqJOEc4OWgYRmKNJUjMMJgCKFBBFDDmCwRGKIQExQpBDCcSrBmGElIzCUKkYEI5JqKBGNxRsQSBGGFIzCYYtGcTUKarJhMQjMMJCMxNRRaoTUSEGErCqImkVXIRqKDMZijSCMwlBmBGKC5iRigQQlRCJIlWBElUIxQpATCAiMKDkjFCkEEaUEjMUaiBmEqKoKhgCJqLMAKNRRAZhhQBFJVSSKIrEEZEaTKsxRpNZozFCipBFCSkZhKKApQIlEQCaUARFC4ooYgCawAzFCoyrMUaiAIqKQIxQIIoSEZJSIIoTBWSYcwWMmGKYEGFRSFIkYSqxFGgiRlNRQIzDCgEUKARQoVRQoSCFKLQIxRKqEaQozCjABREZghSKEUoEUUjJhQQZihQRIoqhFCQImAzCUlFEVEoE0gYSQ0kkokkARQgOJYKkUiKJIEk1gCFIEQUEkko//2Q=="})`,
          }}
          className="absolute top-0 w-[270px] z-30 h-screen border-r-[2px] border-gray-400 bg-cover bg-no-repeat text-white/95"
        >
          {/* ================== SIDEBAR TOP SECTION ========================== */}

          <div
            style={{
              opacity: sideBar ? 1 : 0,
              transform: sideBar ? "translateY(0px)" : "translateY(10px)",
              transition: "transform 0.8s ease 0.3s, opacity 0.5s ease 0.2s ",
            }}
            className="w-[95%] flex  justify-between items-center"
          >
            <img src={logoMain} alt="" className="w-[90px] h-[60px]" />
            <img
              onClick={() => setSideBar(false)}
              src="https://www.svgrepo.com/show/408883/hide-sidebar-horiz.svg"
              className="w-[20px] h-[20px] cursor-pointer invert"
              alt=""
            />
          </div>

          {/* ===================== SIDEBAR BUTTONS ======================= */}

          <div
            className="px-[20px] "
            style={{
              opacity: sideBar ? 1 : 0,
              transform: sideBar ? "translateY(0px)" : "translateY(10px)",
              transition: "transform 0.8s ease 0.4s, opacity 0.5s ease 0.3s ",
              fontFamily: "Archivo, sans-serif",
            }}
          >
            <button className="flex pl-[5px] my-[2px] cursor-pointer py-[10px] w-full hover:bg-gray-200 rounded-md text-[16px] font-[400]">
              <Link to={"/"}> Home</Link>
            </button>
            <button className="flex pl-[5px] my-[2px] cursor-pointer py-[10px] w-full hover:bg-gray-200 rounded-md text-[16px] font-[400]">
              <Link to={"/user/publish"}> Publish</Link>
            </button>
            <button className="flex pl-[5px] my-[2px] cursor-pointer py-[10px] w-full hover:bg-gray-200 rounded-md text-[16px] font-[400]">
              <Link to={"/user/dashboard"}> Dashboard</Link>
            </button>
            <button className="flex pl-[5px] my-[2px] cursor-pointer py-[10px] w-full hover:bg-gray-200 rounded-md text-[16px] font-[400]">
              <Link to={"/user/cart"}>My Cart</Link>
            </button>

            <button className="flex pl-[5px] my-[2px] cursor-pointer py-[10px] w-full hover:bg-gray-200 rounded-md text-[16px] font-[400]">
              <Link to={"/empowering/discover%20new%20worlds"}>
                Discover Ideas
              </Link>
            </button>
            <button className="flex pl-[5px] my-[2px] cursor-pointer py-[10px] w-full hover:bg-gray-200 rounded-md text-[16px] font-[400]">
              <Link to={"/login"}> Log In</Link>
            </button>
            <button
              className="flex pl-[5px] my-[2px] cursor-pointer py-[10px] w-full hover:bg-gray-200 rounded-md text-[16px] font-[400]"
              onClick={() => navigate("/search")}
            >
              Search
            </button>
            <button className="flex pl-[5px] my-[2px] cursor-pointer py-[10px] w-full hover:bg-gray-200 rounded-md text-[16px] font-[400]">
              <Link to={`/user/${userInfo?.name}`}>My Account</Link>
            </button>
            <button className="flex pl-[5px] my-[2px] cursor-pointer py-[10px] w-full hover:bg-gray-200 rounded-md text-[16px] font-[400]">
              <Link to={"/empowering/our%20purpose%20%26%20plans"}>
                About Us
              </Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
