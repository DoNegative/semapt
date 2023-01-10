import React, { useState, useEffect } from "react";
import "./table.css";
import TrTable from "./TrTable";
import {UsersInterface, GetUserInfo} from "../APIS"



  interface TableInteface {
    users: UsersInterface[];
    getUserInfo:()=>void
  }
  
  const Table: React.FC<TableInteface> = ({ users,getUserInfo }) => {



  useEffect(() => {
    //localStorage.removeItem("accessToken")

  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <table style={{ width: "90%", marginTop:"20px" }} className="table">
        <thead>
          <tr>
            <th>
              <span>FIO</span>
            </th>
            <th>
              <span>email</span>
            </th>
            <th>
              <span>number_phone</span>
            </th>
            <th>
              <span>name_position</span>
            </th>
            <th>
              <span>wage</span>
            </th>
            <th></th>
          </tr>
        </thead>

        <tbody>
            {users.map((tr)=><TrTable tr={tr} getUserInfo={getUserInfo}></TrTable>)}
          
        </tbody>
      </table>
    </div>
  );
}

export default Table;
