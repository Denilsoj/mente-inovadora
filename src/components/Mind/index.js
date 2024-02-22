import { minds } from "./news-minds";
import styled from "./styled.module.css";


export default function Mind(){
    return(
        <div className={styled.container}>
            <h3 className={styled.title}>Mentes Inovadoras Em Destaques </h3>
            <ul className={styled.listContainer}>
                {minds.map(mind => (
                    <li key={mind.id}>
                        <img src={mind.src} alt='fotos-feras' className={styled.fotoFeras}/>
                        <span>
                            <h4>{mind.name}</h4>
                            <p>🏆</p>
                            <p>{mind.description}</p>
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
}