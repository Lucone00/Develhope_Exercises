import { useForm } from "./useForm.jsx";

function Form() {
  const { userHandle, passHandle, loginHandle } = useForm();

  return (
    <form>
      <input type="text" onChange={userHandle} />
      <input type="password" onChange={passHandle} />
      <button type="submit" onClick={loginHandle}>
        Login
      </button>
    </form>
  );
}

export default Form;
