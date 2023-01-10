import React, { useState, useEffect } from "react";
import Table from "./Table";
import CustomButton from "../../Components/UI/Button/CustomButton";
import ModalWindow from "../../Components/ModalWindow/ModalWindow";
import AddUser from "./AddUser";
import { UsersInterface, GetUserInfo } from "../APIS";

function Users() {
  const [activeAdd, setActiveAdd] = useState(false);
  const [activeZP, setActiveZP] = useState(false);
  const [activeFront, setActiveFront] = useState(false);
  const [activeBack, setActiveBack] = useState(false);
  const [activeAllZP, setActiveAllZP] = useState(false);
  const [users, setUsers] = useState<UsersInterface[]>([]);
  const [wage, setWage] = useState(0);
  const [wageAll, setWageAll] = useState(0);
  const [front, setFront] = useState(0);
  const [back, setBack] = useState(0);
  async function getUserInfo() {
    try {
      const response = await GetUserInfo();
      setUsers(response);
      var zpAVRG = 0
      var frontCount= 0
      var backCount= 0
      response.forEach((e)=>{
        zpAVRG += e.position.wage
        if(e.position_id===7){
          frontCount+=1
        }
        if(e.position_id===8){
          backCount+=1
        }
      })
      setWageAll(zpAVRG)
      setWage(zpAVRG/response.length)
      setFront(frontCount)
      setBack(backCount)
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  }
  useEffect(() => {
    //localStorage.removeItem("accessToken")
    getUserInfo();
    console.log("users");
  }, []);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "12px",
        marginTop:"20px"
      }}
    >
      <div
        style={{
          width: "80vw",
          height: "80vh",
          backgroundColor: "white",
          borderRadius: "12px",
          boxShadow: "0px 4px 14px rgba(3, 0, 124, 0.1)",
        }}
      >
        <div
          style={{
            marginTop: "20px",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <CustomButton onClick={()=>setActiveZP(true)}>Показать среднюю ЗП</CustomButton>
          <CustomButton onClick={()=>setActiveFront(true)}>Показать количество фронтов</CustomButton>
          <CustomButton onClick={()=>setActiveBack(true)}>Показать количество бэков</CustomButton>
          <CustomButton onClick={()=>setActiveAllZP(true)}>Показать траты на ЗП</CustomButton>
          <CustomButton onClick={() => setActiveAdd(true)}>
            Добавить работника
          </CustomButton>
        </div>
        <ModalWindow setActive={setActiveAllZP} active={activeAllZP}>
            <div>{wageAll}</div>
        </ModalWindow>
        <ModalWindow setActive={setActiveZP} active={activeZP}>
            <div>{wage}</div>
        </ModalWindow>
        <ModalWindow setActive={setActiveFront} active={activeFront}>
            <div>{front}</div>
        </ModalWindow>
        <ModalWindow setActive={setActiveBack} active={activeBack}>
            <div>{back}</div>
        </ModalWindow>
        <ModalWindow setActive={setActiveAdd} active={activeAdd}>
          <AddUser setActive={setActiveAdd} active={activeAdd}  getUserInfoProps={ getUserInfo}></AddUser>
        </ModalWindow>
        <Table users={users} getUserInfo={ getUserInfo}></Table>
      </div>
    </div>
  );
}

export default Users;
