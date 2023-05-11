import React from "react";

function LoginForm() {
  /*
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [checkbox, setCheckbox] = useState(false); */
  //or

  const [data, setData] = useState({
    username: "",
    password: "",
    checkbox: false,
  });

  const handleInputChanges = () => {
    const { name, type, value, checked } = event.target;

    setData((data) => {
      return {
        ...data,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  };
  
  console.log(data);

  return (
    <form>
      <input
        onChange={handleInputChanges}
        value={data.username}
        name="username"
      />
      <input
        onChange={handleInputChanges}
        value={data.password}
        type="password"
        name="password"
      />
      <input
        onChange={handleInputChanges}
        value={data.checkbox}
        type="checkbox"
        name="remember"
      />
    </form>
  );
}

export default LoginForm;
