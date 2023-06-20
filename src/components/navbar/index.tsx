import { Link } from "react-router-dom";
import style from "./style.module.css";
export function Navbar() {
  return (
    <>
      <div className={style.nav}>
        <Link to="/" onClick={() => sessionStorage.clear()}>
          Sair
        </Link>
      </div>
    </>
  );
}
