import Image from "next/image";
import styles from "./page.module.scss";
import portfolioBg from '../../public/images/bg.jpg'

export default function Home() {
    return (
        <div>
            <header className={styles.header}>
                <div className="container">
                    <div className={styles.headerInner}>
                        <a className={styles.headerLogo} href="#">
                            <img src="/images/logo.svg" alt=""/>
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
            <div className="hero">
                <div className="container">
                    <div className="heroInner">
                        <div className="heroImage">
                            <img src="" alt=""/>
                        </div>
                        <div className="heroContent">
                            <div className="heroTitle">
                                <span>UX/UI дизайнер</span>
                                создаю стильные продающие сайты
                            </div>
                            <div className="heroText">
                                <p>
                                    Разрабатываю продуманные сайты на основе маркетиногого исследования с комплексной
                                    упаковкой
                                </p>
                            </div>
                            <button className={styles.headerMenuBtn} style={{background: '#000', color: "#fff"}}>
                                Обсудить проект
                                <img src="/icons/arrow-right-bottom.svg" alt=""/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.portfolio}>
               <div className="container">
                   <h2 className={styles.portfolioTitle}>Реализованные проекты</h2>
                   <ul className={styles.portfolioWorks}>
                       <li className={styles.portfolioBlock} style={{backgroundImage: `url(${portfolioBg.src})`}}>
                           <div className={styles.portfolioBlockContent}>
                               <ul className={styles.portfolioTagsList}>
                                   <li className={styles.portfolioTag}>TailwindCSS</li>
                                   <li className={styles.portfolioTag}>React</li>
                               </ul>
                               <div className={styles.portfolioBlockTitle}>
                                   Блог Веб Разработчика
                               </div>
                           </div>
                       </li>
                       <li className={styles.portfolioBlock} style={{backgroundImage: `url(${portfolioBg.src})`}}>
                           <div className={styles.portfolioBlockContent}>
                               <ul className={styles.portfolioTagsList}>
                                   <li className={styles.portfolioTag}>TailwindCSS</li>
                                   <li className={styles.portfolioTag}>React</li>
                               </ul>
                               <div className={styles.portfolioBlockTitle}>
                                   Блог Веб Разработчика
                               </div>
                           </div>
                       </li>
                       <li className={styles.portfolioBlock} style={{backgroundImage: `url(${portfolioBg.src})`}}>
                           <div className={styles.portfolioBlockContent}>
                               <ul className={styles.portfolioTagsList}>
                                   <li className={styles.portfolioTag}>TailwindCSS</li>
                                   <li className={styles.portfolioTag}>React</li>
                               </ul>
                               <div className={styles.portfolioBlockTitle}>
                                   Блог Веб Разработчика
                               </div>
                           </div>
                       </li>
                       <li className={styles.portfolioBlock} style={{backgroundImage: `url(${portfolioBg.src})`}}>
                           <div className={styles.portfolioBlockContent}>
                               <ul className={styles.portfolioTagsList}>
                                   <li className={styles.portfolioTag}>TailwindCSS</li>
                                   <li className={styles.portfolioTag}>React</li>
                               </ul>
                               <div className={styles.portfolioBlockTitle}>
                                   Блог Веб Разработчика
                               </div>
                           </div>
                       </li>
                       <li className={styles.portfolioBlock} style={{backgroundImage: `url(${portfolioBg.src})`}}>
                           <div className={styles.portfolioBlockContent}>
                               <ul className={styles.portfolioTagsList}>
                                   <li className={styles.portfolioTag}>TailwindCSS</li>
                                   <li className={styles.portfolioTag}>React</li>
                               </ul>
                               <div className={styles.portfolioBlockTitle}>
                                   Блог Веб Разработчика
                               </div>
                           </div>
                       </li>
                   </ul>
               </div>
            </div>
        </div>
    );
}
