import { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import styles from "./styles.module.scss";
import axios from "axios";
import { useAuthentication } from "@shared/hooks/useAuthentication";

export default function Login() {
  const [name, setName] = useState("");
  const { setAuthenticated } = useAuthentication();


  async function handleSubmit(event: React.ChangeEvent<HTMLFormElement>) {
    event.preventDefault();
    const { data: user } = await axios(`/api/users/${name}`);
    setAuthenticated(!!user)
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
