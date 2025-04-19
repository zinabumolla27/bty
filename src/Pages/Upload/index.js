import React from "react";
import UploadNews from "./UpoloadNews";
import Login from "../Login";

const UploadPage = () => {
  const token = localStorage.getItem("token");
  // "homepage": "https://zinabumolla27.github.io/btytradingplc",
  return <div>{token ? <UploadNews /> : <Login />}</div>;
};

export default UploadPage;
