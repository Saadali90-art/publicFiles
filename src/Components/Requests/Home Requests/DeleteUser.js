const deleteUser = async (setshowpop, link) => {
  let data = localStorage.getItem("tokenuserin");

  let reqOpt = {
    method: "DELETE",
    headers: { "Content-Type": "application/json", token: data },
  };

  let result = await fetch(`http://127.0.0.1:8000/${link}`, reqOpt);

  if (result.ok) {
    let response = await result.json();
    localStorage.removeItem("tokenuserin");
    location.reload();
    return setshowpop(false);
  }
};

export default deleteUser;
