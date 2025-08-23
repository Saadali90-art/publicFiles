import React, { useEffect, useState } from "react";
import TopBooks from "../../Requests/Home Requests/TopBooks.js";
import Cards from "../../Cards";

const TopPicks = ({ handlemore }) => {
  const [monthlyPicks, setMonthlyPicks] = useState([]);

  useEffect(() => {
    const fetchData = async (link) => {
      let data = await TopBooks(link);
      setMonthlyPicks(data);
    };

    fetchData("monthlypicks");
  }, []);

  return (
    <>
      <div className="container max-w-screen pb-[20px] bg-[#e9e9e9]">
        <div
          className="container w-[70%] max-[1170px]:w-[80%]  max-[924px]:w-[90%] 
         mx-auto"
        >
          <h1 className="text-[24px] font-[700] py-[20px] ">
            Monthly Spotlight
          </h1>

          <div className="flex flex-wrap justify-between ">
            {monthlyPicks.map((item, index) => (
              <div
                key={index}
                className="min-w-[100px] h-[220px] relative overflow-hidden rounded-md"
                onClick={() => handlemore(item)}
              >
                <img
                  src={item.image}
                  alt={index + 1}
                  className="w-[110px] h-[140px] rounded-sm hover:scale-110 transition-all duration-200 ease"
                />
                <p className="text-[15px] font-[600] px-[3px] py-[10px] w-[100px]">
                  {item.title}
                </p>
                <p className="text-[12px] text-gray-600 absolute bottom-[3px] left-[5px]">
                  {item.category}
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-row justify-between mx-auto  mt-[20px] "></div>
        </div>
      </div>
    </>
  );
};

export default TopPicks;
