import styled from "./style.module.css"

export default function Sale (){
    return(
        <div className={styled.container}>
            <span>
                <img src="/megafone.png"/>
            </span>
            <p>
            Atenção! Uma oferta imperdível está à sua espera. Os 100 primeiros novos alunos que se 
            matricularem terão a matrícula gratuita! Não perca esta oportunidade única. Lembre-se, 
            esta promoção é válida apenas para esta semana. Agarre essa chance enquanto 
            ainda há tempo!
            </p>
        </div>
    )
}