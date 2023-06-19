import { Image } from "antd";
import { Navbar } from "../navbar";
import style from "./style.module.css";

export function Header() {
  return (
    <>
      <header className={style.header}>
        <div>
          <Image src="/logo.png" preview={false} width={75} />
          <h3 className={style.h3}>Star Movie</h3>
        </div>
        <Navbar />
      </header>
    </>
  );
}
