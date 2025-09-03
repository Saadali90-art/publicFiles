const accountData = async (link, dataobj) => {
  let token = localStorage.getItem("tokenuserin");

  let reqopt = {
    method: "POST",
    body: JSON.stringify(dataobj),
    headers: { tokeninfo: token },
  };

  let result = await fetch(`http://127.0.0.1:8000/${link}`, reqopt);
  let response = await result.json();
  return response;
};

export default accountData;
