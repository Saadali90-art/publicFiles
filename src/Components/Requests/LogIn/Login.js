const LogDataSend = async (data, link, navigate, setlogerror) => {
  let reqOpt = {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" },
  };

  let result = await fetch(`http://127.0.0.1:8000/${link}`, reqOpt);

  if (result.ok) {
    let response = await result.json();
    localStorage.setItem("tokenuserin", response.token);
    navigate("/");
  } else {
    setlogerror(true);
    setTimeout(() => {
      setlogerror(false);
    }, 3000);
  }
};

export default LogDataSend;
