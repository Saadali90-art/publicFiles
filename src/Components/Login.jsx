// ============== Notes =================
// in easy words when flex and flex-colis usd then the children will get the full width and by mx-auto center the children eleements

// ================ CODE

import { useNavigate } from "react-router-dom";
import "../animation.css";
import { useState } from "react";
import LogInContainer from "./subcomponent/2.Login/LogInContainer";

const Login = () => {
  const [logerror, setlogerror] = useState(false);
  const navigate = useNavigate();

  // ============FUNCTION SENDING DATA TO DB ===============

  const LogDataSend = async (data) => {
    let reqOpt = {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    };

    let result = await fetch("http://127.0.0.1:8000/login", reqOpt);

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
  // ================GETTING INFO FROM THE INPUT FIELDS ===================

  const handlesubmit = (e) => {
    e.preventDefault();

    let data = e.target;
    let formdata = new FormData(data);
    formdata = Object.fromEntries(formdata.entries());

    let dataobj = {
      email: formdata.email,
      password: formdata.password,
    };

    try {
      LogDataSend(dataobj);
    } catch (error) {
      console.log("Can Not Give Data To Log Data ", error.messsage);
    }
  };

  return (
    <div
      className="container max-w-screen h-screen bg-[url('https://img.freepik.com/free-vector/pink-blue-swirl-gradient_78370-261.jpg?t=st=1753040397~exp=1753043997~hmac=67aa93f6e498f3fac481bb715a2d9a33be318d7624d3def4b028b9e290ef1b43&w=826')] 
   bg-no-repeat bg-cover flex justify-center items-center"
    >
      <LogInContainer handlesubmit={handlesubmit} logerror={logerror} />
    </div>
  );
};

export default Login;
