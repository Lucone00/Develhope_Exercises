import { useEffect, useState } from "react";

function useGithubUser({ username }) {
  const [user, setUser] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `https://api.github.com/users/${username}`
        );
        const data = await response.json();
        setUser(data);
        console.log(data);
      } catch (error) {
        console.error(error);
        setUser(null);
      }
    }
    fetchData();
  }, [username]);

  return { user: user };
}

export default useGithubUser;
