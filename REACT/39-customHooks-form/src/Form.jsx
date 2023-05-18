import { useForm } from "./useForm.jsx";

function Form() {
  const { userHandle, passHandle, loginHandle, data } = useForm();

  return (
    <form onSubmit={loginHandle}>
      <input type="text" name="username" onChange={userHandle} />
      <input type="password" name="password" onChange={passHandle} />
      <button type="submit">
        Login
      </button>
    </form>
  );
}

export default Form;
