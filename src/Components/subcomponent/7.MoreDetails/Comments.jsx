import React from "react";

const Comments = ({
  commentDiv,
  setCommentDiv,
  handlepost,
  handlecomment,
  setCommentValue,
  comments,
}) => {
  return (
    <>
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
                <div key={index} className=" my-[10px] ">
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
    </>
  );
};

export default Comments;
