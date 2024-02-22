import styled from "./styled.module.css";

export default function Contact() {
    return(
        <section>
        <h2 className={styled.title}>Não hesite em entrar em contato</h2>
        <div className={styled.container}>
            <div>
                <div className={styled.contacContainer}>
                    <img src="/icon-nuv.png"/>
                    <span>
                        <h4>Suporte técnico</h4>
                        <p>(82) 4567-8901</p>
                    </span>
                </div>
                <div className={styled.contacContainer}>
                    <img src="/icon-mao.png"/>
                    <span>
                        <h4>Helpdesk da Empresa</h4>
                        <p>(82) 4567-8901</p>
                    </span>
                </div>
                <div className={styled.contacContainer}>
                    <img src="/icon-doc.png"/>
                    <span>
                        <h4>Assuntos de RH</h4>
                        <p>(82) 4567-8901</p>
                    </span>
                </div>
                <div className={styled.contacContainer}>
                    <img src="/icon-papel.png"/>
                    <span>
                        <h4>Reportar um incidente</h4>
                        <p>(82) 4567-8901</p>
                    </span>
                </div>
                
            </div>
            <img src="/img/contato-com-o-cliente.jpg" className={styled.bannerContac}/>
        </div>
        </section>
    );
}