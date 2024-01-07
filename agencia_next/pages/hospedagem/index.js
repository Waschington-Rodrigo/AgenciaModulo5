import React from 'react';
import axios from 'axios';
import Link from 'next/link'; // Importe o Link para criar links de navegação
import { useEffect, useState } from "react";


export default function index() {

  const [hospedagens, setHospedagens] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/hospedagens")
      .then((response) => {
        setHospedagens(response.data)
        console.log(hospedagens)
      })
      .catch((error) => {
        console.error("Erro ao buscar a lista de hospedagens:", error);
      });
  }, []);

  return (
    <div className="container-fluid opacity">
      <a
        href="/hospedagem/create-hospedagem"
        className="btn btn-primary my-1"
      >
        <span className="fw-bold">+</span>Hospedagem
      </a>
      <table className="table table-responsive table-hover">
        <thead className="table-dark">
          <tr className="text-center">
            <th scope="col">Id</th>
            <th scope="col">Nome</th>
            <th scope="col">Valor Diária</th>
            <th scope="col">tipo</th>
            <th scope="col">Estado</th>
            <th scope="col">Cidade</th>
            <th scope="col">telefone</th>
            <th scope="col">Ações</th>
          </tr>
        </thead>
        <tbody>
          {hospedagens.map((hospedagem) => (
            <tr className="text-center">
              <th scope="row">
                {hospedagem.id}
              </th>
              <td>
                {hospedagem.nome}
              </td>
              <td>
               <span className='fw-bold'>R$</span> {hospedagem.valorDiaria}
              </td>
              <td>
                {hospedagem.tipo}
              </td>
              <td>
                {hospedagem.estado}
              </td>
              <td>
                {hospedagem.cidade}
              </td>
              <td>
                {hospedagem.telefone}
              </td>
              <td>
                <div className="text-center">
                  <Link
                    href={`hospedagem/hospedagem-update/${hospedagem.id}`}
                    className="btn btn-success"
                  >
                    Editar
                  </Link>
                  <Link
                    href={`hospedagem/hospedagem-delete/${hospedagem.id}`}
                    className="btn btn-danger"
                  >
                    Excluir
                  </Link>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

  )
}
