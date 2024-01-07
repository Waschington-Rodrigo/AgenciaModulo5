import React from 'react'

export default function Promocoes() {
    return (

        <>
            {/*cards da pagina promoções*/}
            <section id="sectionPromo" className="container">

                <div id="cardPromo" className="card my-3">
                    <div className="card-header">Pacote Econômico</div>
                    <div className="card-body opacity">
                        <h5 className="card-title">Economize em tudo</h5>
                        <p className="card-text ">Com este pacote você consegue economizar
                            até na sua hospedagem. Além do mais, você economiza em passagens,
                            viajando em baixa temporada.</p>
                        <a href="../reserva-create"
                            className="btn btn-primary">Ir agora</a>
                    </div>
                </div>
                <div id="cardPromo" className="card my-3">
                    <div className="card-header">Pacote Tranquilidade</div>
                    <div className="card-body opacity">
                        <h5 className="card-title">Eu mereço</h5>
                        <p className="card-text">Viajar com um conforto e hospedar em
                            hotéis conceituados.</p>
                        <a href="../reserva-create"
                            className="btn btn-primary">Ir agora</a>
                    </div>
                </div>
                <div id="cardPromo" className="card my-3">
                    <div className="card-header">Pacote Luxo</div>
                    <div className="card-body opacity">
                        <h5 className="card-title">Quero o melhor</h5>
                        <p className="card-text">Hospedar em hotéis 5 estrelas e viajar na
                            classe A.</p>
                        <a href="../reserva-create"
                            className="btn btn-primary">Ir agora</a>
                    </div>
                </div>




            </section>
        </>

    )
}
