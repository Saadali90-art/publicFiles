import React from "react";
import Cards from "../../Cards";

const NewArrivals = ({ handlemore, newArrival }) => {
  return (
    <>
      <div className="container max-w-[100%] mb-[20px] h-[420px] mt-[20px] ">
        <div className="container w-[70%] max-[1170px]:w-[80%]  max-[924px]:w-[90%] relative mx-auto ">
          <h1 className="text-[24px] font-[700] py-[20px]">New Arrivals</h1>

          <div className="flex flex-wrap justify-between ">
            {newArrival.map((item, index) => (
              <Cards
                handlemore={handlemore}
                item={item}
                index={index}
                key={index}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default NewArrivals;
