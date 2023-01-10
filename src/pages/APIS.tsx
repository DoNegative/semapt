import axios from "axios";

//информация о пользователе для подгрузки в окно редактирования информации и хедер
export interface UsersInterface{
    id:number,
    FIO: string,
    email: string,
    number_phone: string,
    position: PositionInterface
    position_id: number
}
export interface PositionInterface{

      name: string,
      wage: number
    
}
export const GetUserInfo = async () => {
  const { data } = await axios.get<UsersInterface[]>(
    `http://127.0.0.1:8000/users/all`
  );

  return data;
};

export interface UsersInterfacePost{

    FIO: string,
    email: string,
    number_phone: string,
    position_id: number
}
export const postUserInfo = async (body:UsersInterfacePost) => {
    const { data } = await axios.post< UsersInterfacePost>(
      `http://127.0.0.1:8000/users/`, body
    );
  
    return data;
  };

export interface PositionInterface{
    id: number
    name: string,
    wage: number
  
}
export const GetPosition = async () => {
const { data } = await axios.get<PositionInterface[]>(
  `http://127.0.0.1:8000/posiations/all`
);
return data;
};
//Удаление пользователей
export const DeleteUserInfo = async (id: number) => {
    const { data } = await axios.delete(`http://127.0.0.1:8000/users/delete/${id}`);
  
    return data;
  };

export const putUserInfo = async (id:number , body:UsersInterfacePost) => {
    const { data } = await axios.put< UsersInterfacePost>(
      `http://127.0.0.1:8000/users/put/${id}`, body
    );
  
    return data;
  };