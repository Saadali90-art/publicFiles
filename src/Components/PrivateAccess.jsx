import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

const PrivateAccess = ({ children }) => {
  const [isAuth, setisAuth] = useState(null);
  let token = localStorage.getItem("tokenuserin");

  useEffect(() => {
    const ProtectedPage = async () => {
      let reqOpt = {
        method: "GET",
        headers: { "Content-Type": "text/json", token: token },
      };

      if (!token) {
        setisAuth(false);
        return;
      }

      let result = await fetch("http://127.0.0.1:8000/protect", reqOpt);
      let response = await result.json();
      setisAuth(response.userVerf);
    };

    ProtectedPage();
  }, []);

  if (isAuth === null) return <div>Loading....</div>;
  if (!isAuth) return <Navigate to={"/login"} />;
  return children;
};

export default PrivateAccess;
