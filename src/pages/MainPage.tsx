import React, { useState, useEffect } from "react";
import { Tabs } from "antd";
import Users from "./tables/Users";


function MainPage() {
  useEffect(() => {
    //localStorage.removeItem("accessToken")
    console.log("MainPage");
  }, []);
  const onChange = (key: string) => {
    console.log(key);
  };
  const { TabPane } = Tabs;
  return (
    <div style={{backgroundColor:"#ebf1ff", height:"100vh"}}>
      <div
        className="BG header"
      >
        Кабинет администратора
      </div>
      <Users ></Users>
      {/* <Tabs
        defaultActiveKey="1"
        onChange={onChange}
        centered={true}
        style={{ width: "100%", margin: "0" }}
      >
        <TabPane
          tab={<span style={{ fontSize: "24px" }}>Работники</span>}
          key="1"
        >
        
        </TabPane>
        <TabPane
          tab={<span style={{ fontSize: "24px" }}>Должности</span>}
          key="2"
        >
          123123
        </TabPane>
      </Tabs> */}
    </div>
  );
}

export default MainPage;
