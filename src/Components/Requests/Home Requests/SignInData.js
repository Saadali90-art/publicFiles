const SignInData = async (link) => {
  let token = localStorage.getItem("tokenuserin");

  if (token) {
    let reqOpt = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: token,
      },
    };

    let result = await fetch(`http://127.0.0.1:8000/${link}`, reqOpt);
    let response = await result.json();

    return response.message;
  } else {
    return null;
  }
};

export default SignInData;
