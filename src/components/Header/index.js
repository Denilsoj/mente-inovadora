'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { VscAccount } from "react-icons/vsc";
import { FaCartPlus, FaHamburger } from "react-icons/fa";
import { SlMenu } from "react-icons/sl"

import  styled  from './styled.module.css';
import HamburguerContainer from './HamburguerContainer';

const namesMenu = ['Cursos', 'Inove', 'Para empresas', 'Fale conosco'];

export default function Header() {

    useEffect(() => {
        function handleResize() {
            if(window.innerWidth < 980) {
              return  setHamburger(true);
            }else{
              return  setHamburger(false);
            }
        }
        setRender(true)
        handleResize() ;
        window.addEventListener("resize", handleResize);
        window.addEventListener("DOMContentLoaded", handleResize)
        console.log(window.innerWidth)

        return () =>{
            window.removeEventListener("resize", handleResize);
             window.removeEventListener("DOMContentLoaded", handleResize)
        }
    }, []);

    const menuNavBar = 
                    
                        <ul className={styled.list}>
                            {namesMenu.map((name) =>(
                            <Link href='/' key={name}><li>{name}</li></Link> 
                            ))}
                            <Link href='/'><li><VscAccount className={styled.login}/></li></Link>
                            <Link href='/'><li><FaCartPlus className={styled.cart} /></li></Link>
                        </ul>
                    
    const[hamburger, setHamburger] = useState(false);
    const [render, setRender] = useState(false);
    const[hamburgerContainer, setHamburgerContainer] = useState(false);

    const handleClick = () => {
       if(!hamburgerContainer){
         setHamburgerContainer(true);
       }else{
        setHamburgerContainer(false);
       }
    }

    if(render){
    return(
        <header className={styled.container}>
            <section className={styled.line}/>
            <section className={styled.nav}>
                        <img src='/logo.svg' alt='logo' className={styled.logo}/>
                        {hamburger ? <SlMenu onClick={handleClick} className={styled.hamburguer}/> : menuNavBar}
             </section>
             {hamburgerContainer && <HamburguerContainer/>}
        </header>
    );
    }
    return(
        <header className={styled.container}>
            <section className={styled.line}/>
            <section className={styled.nav}>
                        <img src='/logo.svg' alt='logo' className={styled.logo}/>
             </section>
        </header>
    );
    
}