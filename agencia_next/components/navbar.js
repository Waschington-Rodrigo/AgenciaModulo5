import React from 'react'
import Head from 'next/head'

export default function Navbar() {
    return (
        <>

            <nav className="navbar navbar-expand-sm navbar-dark">
                {/*botão que abre o menu de navegação do site quando a largura da tela screen for small*/}
                <a className="navbar-brand" href="/home"><img
                    src="/img/LogoViajou.com.png" alt="" /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#como" aria-controls="como" aria-expanded="false"
                    aria-label="Altena navegação">
                    <span class="navbar-toggler-icon"></span>
                </button>

                {/*Lista de opções do menu de navegação*/}
                <div class="collapse navbar-collapse" id="como">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item "><a className="nav-link"
                            href="/home"> Home</a></li>
                        <li className="nav-item"><a className="nav-link"
                            href="/lugares">Lugares</a></li>
                        <li className="nav-item"><a className="nav-link"
                            href="/promocoes">Promoções</a></li>
                        <li className="nav-item "><a className="nav-link"
                            href="/contato">Contatos</a></li >
                        <li className="nav-item dropdown"><a
                            className="nav-link dropdown-toggle" href="" role="button"
                            data-bs-toggle="dropdown" aria-expanded="false"> Controles</a>

                            <ul className="dropdown-menu fundo-nav">
                                <li><a className="dropdown-item"
                                    href="/usuario">Usuários</a></li>
                                <li><a className="dropdown-item"
                                    href="/destino">Destinos</a></li >
                                <li><a className="dropdown-item"
                                    href="/hospedagem">Hospedagens</a></li >
                                <li><a class="dropdown-item"
                                    href="/passagem">Passagens</a></li >
                                <li><a className="dropdown-item"
                                    href="/reserva">Reservas</a></li >
                            </ul >
                        </li >
                    </ul >
                </div >
            </nav >

            
        </>


    )
}
