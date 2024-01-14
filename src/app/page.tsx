import Image from "next/image";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.headerInner}>
          <a className={styles.headerLogo} href="#">
            <img src="/images/logo.svg" alt="" />
          </a>

          <div className={styles.headerMenu}>
            <ul className={`${styles.headerMenuList} list-reset`}>
              <li className={styles.headerMenuItem}>
                <a className={styles.headerMenuLink} href="#">
                  Услуги
                </a>
              </li>
              <li className={styles.headerMenuItem}>
                <a className={styles.headerMenuLink} href="#">
                  Портфолио
                </a>
              </li>
              <li className={styles.headerMenuItem}>
                <a className={styles.headerMenuLink} href="#">
                  Этапы работы
                </a>
              </li>
            </ul>
          </div>

          <button className={styles.headerMenuBtn}>Написать в телеграм</button>
        </div>
      </div>
    </header>
  );
}
