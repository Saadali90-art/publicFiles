const sendData = async (data, link, seterror, navigate) => {
  let token = localStorage.getItem("tokenuserin");

  let reqOpt = {
    method: "POST",
    body: data,
    headers: { tokenuser: token },
  };

  let result = await fetch(`http://127.0.0.1:8000/${link}`, reqOpt);

  if (!result.ok) {
    let response = await result.json();
    if (response.message === "Data Not Present") {
      seterror(true);
      setTimeout(() => {
        seterror(false);
      }, 4000);
    }
  } else {
    navigate("/user/dashboard");
  }
};

export default sendData;
