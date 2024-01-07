import React from 'react';
import axios from 'axios';
import Link from 'next/link'; // Importe o Link para criar links de navegação
import { useEffect, useState } from "react";


export default function Lugares() {

  const [destinos, setDestinos] = useState([]);

  useEffect(() => {
    // Faça uma chamada GET para a API Spring Boot
    axios
      .get("http://localhost:8080/destinos")
      .then((response) => {
        setDestinos(response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar a lista de Destinos:", error);
      });
  }, []);

  return (
    <>

      {/*seção com cards com alguns destinos para escolha*/}

      <section id="cardDestino" className="container">
        <a className='btn btn-success mt-1' href='/destino/create-destino'>+ Destino </a>

        <div className='row'>
          {destinos.map((destino) => (

            <div className="card-deck mb-3 col-4">
              <div className="card opacity my-3">
                <img
                  className="card-img-top"
                  src="img/Viajou.com.png"
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h5 className="card-title">
                    {destino.cidade} / {destino.estado}
                  </h5>
                  <p className="card-text">
                    <b>LocaL do Desembarque: </b> {destino.localDestino}
                  </p>
                  <p className="card-text">
                    <b>Valor R$: </b> {destino.valor}
                  </p>
                </div>
                <div className="card-footer">
                  <a className="btn btn-sm btn-primary" href="/passagem/passagem-create">
                    Quero Conhecer
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </section>
    </>

  )
}
