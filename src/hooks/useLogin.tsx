import { AxiosError } from "axios";
import api from "../config/axios";
import { useState } from "react";

export function useLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function login() {
    try {
      const response = await api.post("/auth/login", {
        email,
        password,
      });

      sessionStorage.setItem("token", response.data.token);
      sessionStorage.setItem("id", response.data.id);
      sessionStorage.setItem("name", response.data.name);
      sessionStorage.setItem("email", response.data.email);
    } catch (error) {
      if (error instanceof AxiosError) {
        console.log(error.response?.data);
      }
    }
  }

  return {
    login,
    email,
    password,
    setEmail,
    setPassword,
  };
}
