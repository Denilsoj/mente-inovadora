'use client'
import { useState } from "react";

const styled = {
    width: "100%",
    height: 180,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    gap: 1.5,
    // paddingTop: 15,
    paddingLeft: 10,
    fontSize: 15,
    backgroundColor: "rgba(241, 241, 241, .9)",
    position: "absolute",
    top: 170,
    cursor: "pointer",
}


const menu = ['Cursos', 'Inove', 'Para empresas', 'Fale conosco', 'Login', 'Carrinho'];

export default function HamburguerContainer() {
    return(
        <div 
        style={styled}
        >
            {menu.map((item) =>(
                <p key={item}
                >{item}
                </p>
            ))}
        </div>
    )
}
