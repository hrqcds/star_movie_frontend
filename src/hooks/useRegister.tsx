import { AxiosError } from "axios";
import api from "../config/axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useRegister() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  async function register() {
    if (name === "" || email === "" || password === "") {
      toast.error("Preencha todos os campos!");
      return;
    }

    if (password.length < 6) {
      toast.error("A senha deve ter no mínimo 6 caracteres!");
      return;
    }

    try {
      await api.post("/auth/register", {
        name,
        email,
        password,
      });

      toast.success("Cadastro realizado com sucesso!");

      navigate("/");
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error("Erro ao realizar cadastro!");
        return;
      }
    }
  }

  return {
    name,
    email,
    password,
    register,
    setName,
    setEmail,
    setPassword,
    navigate,
  };
}
