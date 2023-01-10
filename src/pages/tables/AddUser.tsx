import React, { useState, useEffect } from "react";
import CustomInput from "../../Components/UI/CustomInput/CustomInput";
import CustomButton from "../../Components/UI/Button/CustomButton";
import { Select } from "antd";
import { PositionInterface, GetPosition, postUserInfo } from "../APIS";
import { UsersInterface, GetUserInfo, putUserInfo } from "../APIS";

interface AddUserInterface {
  setActive: (check: boolean) => void;
  active: boolean;
  getUserInfoProps: () => void;
  checkEdit?: boolean;
  id?: number;
}
const AddUser: React.FC<AddUserInterface> = ({
  setActive,
  active,
  getUserInfoProps,
  checkEdit,
  id,
}) => {
  const [fio, setFio] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [positions, setPositions] = useState<PositionInterface[]>([]);
  const [position, setPosition] = useState<number>(-1);

  async function GetPositionApi() {
    try {
      const response = await GetPosition();
      setPositions(response);

      console.log(response);
    } catch (e) {
      console.log(e);
    }
  }
  async function getUserInfo() {
    try {
      const response = await GetUserInfo();
      console.log(id);
      response.forEach((e) => {
        if (id !== undefined && e.id === id) {
          setFio(e.FIO);
          setEmail(e.email);
          setPhone(e.number_phone);
          setPosition(e.position_id);
        }
      });
    } catch (e) {
      console.log(e);
    }
  }

  async function PostUserInfo() {
    try {
      const response = await postUserInfo({
        FIO: fio,
        email: email,
        number_phone: phone,
        position_id: position,
      });
      getUserInfoProps();
      setActive(false);
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  }
  async function PutUserInfo() {
    try {
      if (id !== undefined) {
        await putUserInfo(id, {
          FIO: fio,
          email: email,
          number_phone: phone,
          position_id: position,
        });
      }
      getUserInfoProps();
      setActive(false);
    } catch (e) {
      console.log(e);
    }
  }
  useEffect(() => {
    if (checkEdit) {
      getUserInfo();
    }
    GetPositionApi();
  }, []);

  return (
    <div>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "8px",
        }}
      >
        Добавление работника
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        <CustomInput
          onChange={setFio}
          placeholder="Введите..."
          value={fio}
          labelName="ФИО"
        ></CustomInput>
        <CustomInput
          onChange={setEmail}
          value={email}
          placeholder="Введите..."
          labelName="Email"
        ></CustomInput>
        <CustomInput
          onChange={setPhone}
          value={phone}
          placeholder="Введите..."
          labelName="Номер телефона"
        ></CustomInput>
        <div className="TitleH4">Выберите должность</div>
        <Select
          placeholder="Выберите..."
          style={{ width: "100%" }}
          onChange={setPosition}
          value={position}
        >
          <option hidden value={-1}>
            Выберите...
          </option>
          {positions.map((p) => (
            <option value={p.id}>{p.name}</option>
          ))}
        </Select>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            marginTop: "16px",
          }}
        >
          {checkEdit ? (
            <CustomButton
              className="primary TextStyle"
              onClick={() => PutUserInfo()}
            >
              Сохранить изменения
            </CustomButton>
          ) : (
            <CustomButton
              className="primary TextStyle"
              onClick={() => PostUserInfo()}
            >
              Добавить работника
            </CustomButton>
          )}

          <CustomButton
            className="primary TextStyle"
            onClick={() => setActive(false)}
          >
            Отмена
          </CustomButton>
        </div>
      </div>
    </div>
  );
};

export default AddUser;
