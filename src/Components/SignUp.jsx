import "../animation.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import SignUpContainer from "./subcomponent/3.SignUp/SignUpContainer";

const SignUp = () => {
  // ==============  HOOKS ---------------------------

  const [errorobj, seterrorobj] = useState([]);
  const [animateArr, setanimateArr] = useState([]);
  const [shake, setshake] = useState(false);
  const [showerror, setshowerror] = useState(false);
  const [showpass, setshowpass] = useState(false);
  const navigate = useNavigate();

  // =================== SENDING DATA TO DB ==================================

  const sendData = async (data) => {
    let infodata = JSON.stringify(data);

    let reqOpt = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: infodata,
    };

    let result = await fetch("http://127.0.0.1:8000", reqOpt);

    let response = await result.json();

    if (!result.ok) {
      seterrorobj((pre) => {
        return [response, ...pre];
      });
    } else {
      localStorage.setItem("tokenuserin", response.token);
      if (response.message === "Data Sended TO DB") {
        navigate("/");
      }
    }
  };

  // ================================ SUBMITTING THE FORM =================================

  const handlesubmit = (e) => {
    e.preventDefault();

    let data = e.target;
    let formdata = new FormData(data);
    let formentry = Object.fromEntries(formdata.entries());

    if (
      formentry.name === "" ||
      formentry.email === "" ||
      formentry.password === "" ||
      formentry.phone === ""
    ) {
      seterrorobj((pre) => {
        return [{ message: "Data Is Empty" }, ...pre];
      });
      return;
    }

    let datainfo = {
      name: formentry.name,
      email: formentry.email,
      password: formentry.password,
      phone: parseInt(formentry.phone),
    };

    if (formentry.password !== formentry.confirm) {
      seterrorobj((pre) => [{ message: "Password Do Not Match" }, ...pre]);
      setshowerror(true);

      setTimeout(() => {
        setshowerror(false);
      }, 2000);
    } else if (isNaN(datainfo.phone)) {
      seterrorobj((pre) => [{ message: "Phone Must Be In Number" }, ...pre]);
      setshowerror(true);

      setTimeout(() => {
        setshowerror(false);
      }, 2000);
    } else {
      if (!isNaN(datainfo.phone) && formentry.password === formentry.confirm) {
        try {
          sendData(datainfo);
        } catch (error) {
          console.log("Error While Sending Data To DB", error.message);
        }
      }
    }
  };

  // =================== SHAKE ANIMAATION ==========================================

  const shakeanimation = () => {
    if (animateArr[0] === "Data Is Empty") {
      setshake(true);
    }

    setTimeout(() => {
      setshake(false);
    }, 1000);
  };

  // ============================ useEffectes=======================================

  useEffect(() => {
    setanimateArr(errorobj.map((item) => item.message));
  }, [errorobj]);

  useEffect(() => {
    shakeanimation();
  }, [animateArr]);

  useEffect(() => {
    setshowerror(true);

    setTimeout(() => {
      setshowerror(false);
    }, 2000);
  }, [errorobj]);

  return (
    <div className="w-screen h-screen bg-[url('https://img.freepik.com/free-vector/minimalistic-blur-gradient-banner-web-app-backdrop-design_1017-44315.jpg')] bg-no-repeat bg-cover flex items-center justify-center select-none">
      <SignUpContainer
        handlesubmit={handlesubmit}
        showpass={showpass}
        setshowpass={setshowpass}
        showerror={showerror}
        shake={shake}
        animateArr={animateArr}
      />
    </div>
  );
};

export default SignUp;
