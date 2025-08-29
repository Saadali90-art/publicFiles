import { jwtDecode } from "jwt-decode";
const accountData = async (link, data) => {
  let token = localStorage.getItem("tokenuserin");

  let reqopt = {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json", tokeninfo: token },
  };

  let result = await fetch(`http://127.0.0.1:8000/${link}`, reqopt);
  let response = await result.json();
  return response;
};

export default accountData;
