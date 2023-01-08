import React, { useState, useEffect } from "react";
// import {
//   BrowserRouter as Router,
//   Routes as Switch,
//   Route,
//   Link,
//   Navigate,
// } from "react-router-dom";
import AuthorizationBox from "./pages/Authorization/AuthorizationBox";
import "./pages/Authorization/Authorization.css"
import MainPage from "./pages/MainPage";

function App() {
  useEffect(() => {
    //localStorage.removeItem("accessToken")
    console.log(accessToken);
    console.log("app");
  }, []);
  const accessToken = localStorage.getItem("accessToken");
  return (
    <MainPage></MainPage>
    ///<AuthorizationBox></AuthorizationBox>
    // <Router >
    //   {accessToken ? (
    //     // токен есть
    //     <Switch>
    //       <Route path="*" element={<Users />}></Route>
    //     </Switch>
    //   ) : (
    //     // токена нет
    //     <Switch>
    //       <Route path="*" element={<AuthorizationBox />}></Route>
    //     </Switch>
    //   )}
    // </Router>
  );
}

export default App;
