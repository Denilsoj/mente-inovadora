'use client'
import { curses } from "./curses";
import styled from "./styled.module.css";





export default function Curses () {
    return(
        <section  className={styled.container}>
            <header className={styled.headerContainer}>
                <h2 className={styled.title}>Cursos abertos</h2>
            </header>
            <div>
                <ul className={styled.listContainer}>
                   {curses.map((curse) => (
                    <li key={curse.title} className={styled.listItem}>
                        <div>
                            <img src={curse.src} alt={curse.alt}/>
                        </div>
                        <div className={styled.descriptionContainer}>
                           <h4 className={styled.titleDescription}>{curse.title}</h4>
                            <p className={styled.description}>
                                {curse.description}
                                <span>
                                    {curse.price}
                                    <button>confira</button>
                                </span>
                            </p>
                        </div>
                    </li>
                   ))} 
                </ul>
            </div>
            
        </section>
    );
}