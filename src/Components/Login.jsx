import { useNavigate } from "react-router-dom";
import "../animation.css";
import { useState } from "react";
import LogInContainer from "./subcomponent/2.Login/LogInContainer";
import LogDataSend from "./Requests/LogIn/Login.js";

const Login = () => {
  const [logerror, setlogerror] = useState(false);
  const navigate = useNavigate();

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
      LogDataSend(dataobj, "login", navigate, setlogerror);
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
