import { Link } from "react-router-dom";
import style from "./style.module.css";
export function Navbar() {
  return (
    <>
      <div className={style.nav}>
        <Link to="/movies">Filmes</Link>
        <Link to="/users">Usuários</Link>
        <Link to="/logout">Sair</Link>
      </div>
    </>
  );
}
