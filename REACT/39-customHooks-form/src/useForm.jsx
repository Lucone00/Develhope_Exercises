import { useState } from "react";

export const useForm = () => {
  const [data, setData] = useState({ username: "", password: "" });

  const userHandleValues = (e) => {
    setData({ ...data, username: e.target.value });
  };
  const passwordHandleValues = (e) => {
    setData({ ...data, password: e.target.value });
  };
  const handleLogin = (e) => {
    e.preventDefault();
    let values = {
      username: data.username,
      pass: data.pass,
    };
    console.log(values);
  };
  return {
    userHandle: userHandleValues,
    passHandle: passwordHandleValues,
    loginHandle: handleLogin,
  };
};

export default useForm;
