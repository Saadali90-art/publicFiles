import React, { createContext, useEffect, useState } from "react";

export const SignData = createContext();

const SignContext = ({ children }) => {
  const [signdata, setsigndata] = useState(null);

  return (
    <SignData.Provider value={{ signdata, setsigndata }}>
      {children}
    </SignData.Provider>
  );
};

export default SignContext;
