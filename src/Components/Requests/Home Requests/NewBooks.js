const newBooks = async (link) => {
  let reqOpt = {
    method: "GET",
    headers: { "Content-Type": "text/json" },
  };

  let result = await fetch(`http://127.0.0.1:8000/${link}`, reqOpt);
  let response = await result.json();
  return response;
};

export default newBooks;
