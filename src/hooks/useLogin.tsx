import { AxiosError } from "axios";
import api from "../config/axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function login() {
    try {
      if (email === "" || password === "") {
        toast.error("Preencha todos os campos!");
        return;
      }

      if (password.length < 6) {
        toast.error("A senha deve ter no mínimo 6 caracteres!");
        return;
      }

      const response = await api.post("/auth/login", {
        email,
        password,
      });

      sessionStorage.setItem("token", response.data.token);
      sessionStorage.setItem("id", response.data.id);
      sessionStorage.setItem("name", response.data.name);
      sessionStorage.setItem("email", response.data.email);

      toast.success("Login realizado com sucesso!");
      navigate("/movies");
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error("Email ou senha incorretos!");
        sessionStorage.clear();
        return;
      }
    }
  }

  return {
    login,
    email,
    password,
    setEmail,
    setPassword,
    navigate,
  };
}
