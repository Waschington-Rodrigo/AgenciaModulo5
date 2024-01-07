import React from "react"


React

export default function Home() {
  return (
    <>
      
        <section id="sectionHome" className="container">

          {/*cards da pagina inicial para navegar pelo menu*/}
          <div id="cardHome" className="card my-3">
            <div className="card-header">Lugares Incriveis</div>
            <div class="">
              <img className="card-img-top" src="img/paredaoCEU.jpg"
                alt="Card image cap" />
            </div>

            <div className="card-body opacity">
              <h5 className="card-title">Diversidade é aqui!</h5>
              <p className="card-text ">Conheça diversos locais turísticos e suas
                culturas. Temos aqui uma variedade de locais atrativos com a
                melhor hospedagem</p>
              <a href="./lugares" className="btn btn-primary">Ir agora</a>
            </div>
          </div>
          <div id="cardHome" className="card my-3">
            <div className="card-header">Economize</div>
            <img className="card-img-" src="img/economia-2.webp"
              alt="Card image cap" />

            <div className="card-body opacity">
              <h5 className="card-title">Seu dinheiro rende mais!</h5>
              <p className="card-text">Temos promoções para você. conheça nossos
                pacotes promocionais. Veja onde economizar cada centavo do seu
                bolso.</p>
              <a href="./promocoes" className="btn btn-primary">Ir agora</a>
            </div>
          </div>
          <div id="cardHome" className="card my-3">
            <div className="card-header">Vem conosco</div>
            <img className="card-img-" src="img/redesSociais.png"
              alt="Card image cap" />

            <div className="card-body opacity">
              <h5 className="card-title">Eu te mostro muito mais!</h5>
              <p className="card-text">Entre em nossas redes sociais e viaje na
                sua "telinha". Mostramos pra você, um pouco dessa diversão. Se
                quizer, pode tirar suas dúvidas através do nosso WhatsApp ou
                e-mail. Você escolhe!</p>
              <a href="./contato" class="btn btn-primary">Ir agora</a>
            </div>
          </div>




        </section>
    </>
  )
}
