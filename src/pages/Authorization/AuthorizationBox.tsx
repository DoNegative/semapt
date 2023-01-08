import React, { useState } from "react";
import CustomButton from "../../Components/UI/Button/CustomButton";
import CustomInput from "../../Components/UI/CustomInput/CustomInput";
//import { GetToken } from "./AuthorizationAPI";

function AuthorizationBox() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

//   async function getToken() {
//     try {
//       const response = await GetToken({ email: login, password: password });
//       console.log(response);
//       localStorage.setItem("accessToken", response.access_token);
//       window.location.href = "/";
//     } catch (e) {
//       console.error(e);
//     }
//   }

  return (
    <div className="BG">
    <div style={{height:"100vh", display:"flex", justifyContent:"center", alignItems:"center"}} >
    <div className="authorizationBox">
      <div className="inputFields">
        <div style={{ textAlign: "center" }}>
          <div className="TitleH1" style={{ color: "rgba(96, 159, 255, 1)" }}>
            Войти в систему
          </div>
          <div
            className="TitleH4"
            style={{
              color: "#9DAFBD",
              fontStyle: "normal",
              fontSize: "18px",
              fontWeight: "400",
            }}
          >
            Введите логин и пароль для входа в систему
          </div>
        </div>
        <CustomInput
          style={{ height: "40px" }}
          placeholder="Логин"
          value={login}
          onChange={setLogin}
          className="authorizationInput"
        ></CustomInput>
        <CustomInput
          placeholder="Пароль"
          style={{ height: "40px" }}
          value={password}
          type={"password"}
          onChange={setPassword}
          className="authorizationInput"
        ></CustomInput>
        <CustomButton
          style={{ width: "100%", height: "54px" }}
          onClick={() => ""}
        >
          Войти
        </CustomButton>
      </div>
    </div>
    </div>
    </div>
  );
}

export default AuthorizationBox;
