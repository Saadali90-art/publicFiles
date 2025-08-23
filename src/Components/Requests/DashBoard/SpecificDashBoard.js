const specificBooks = async (link) => {
  let token = localStorage.getItem("tokenuserin");

  let reqOpt = {
    method: "GET",
    headers: { "Content-Type": "text/json", tokenuser: token },
  };

  let result = await fetch(`http://127.0.0.1:8000/${link}`, reqOpt);
  let response = await result.json();

  return response.message;
};

export default specificBooks;
