import { useEffect, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import styles from "./styles.module.scss";
import useSWR from "swr";
import { useAuthentication } from "@shared/hooks/useAuthentication";

export default function Login() {
  const [name, setName] = useState("");
  const { data } = useSWR(`/api/users/${name || 'null'}`)
  const { setAuthenticated } = useAuthentication();

  useEffect(() => {
  }, [data])
  
  function handleSubmit(event: React.ChangeEvent<HTMLFormElement>) {
    event.preventDefault();
    setAuthenticated(!!data)
  }

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h1>Login</h1>
        <div>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            required
            autoComplete="off"
            value={name}
            onChange={(event) => setName(event.target.value)}
            autoFocus
          />
        </div>
        <button>
          <FaCheckCircle />
        </button>
      </form>
    </div>
  );
}
