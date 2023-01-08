import React, { useState, useEffect } from "react";

function Users() {
  useEffect(() => {
    //localStorage.removeItem("accessToken")
    console.log("users");
  }, []);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius:"12px",
      
      }}
    >
      <div
        style={{
          width: "80%",
          height: "80%",
          backgroundColor: "white",
          boxShadow: "0px 4px 14px rgba(3, 0, 124, 0.1)",
 
        }}
      >
        <div>123123123</div>
        <div>123123123</div>
        <div>123123123</div>
        <div>123123123</div> <div>123123123</div>
        <div>123123123</div>
  
      </div>
    </div>
  );
}

export default Users;
