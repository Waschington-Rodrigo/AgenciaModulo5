import React from 'react';
import axios from 'axios';
import Link from 'next/link'; // Importe o Link para criar links de navegação
import { useEffect, useState } from "react";

export default function Index() {
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
        <div className="container-fluid opacity">
            <a href="/destino/create-destino" className="btn btn-primary my-1">
                <span className="fw-bold">+</span>Destino
            </a>
            <table className="table table-responsive table-hover">
                <thead className="table-dark">
                    <tr className="text-center">
                        <th scope="col">Id</th>
                        <th scope="col">Cidade</th>
                        <th scope="col">Estado</th>
                        <th scope="col">Local do Destino</th>
                        <th scope="col">Valor R$</th>
                        <th scope="col">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {destinos.map((destino) => (

                        <tr className="text-center">
                            <th scope="row">
                                {destino.id}
                            </th>
                            <td>
                                {destino.cidade}
                            </td>
                            <td>
                                {destino.estado}
                            </td>
                            <td>
                                {destino.localDestino}
                            </td>
                            <td>
                                R$ {destino.valor}
                            </td>
                            <td>
                                <div className="text-center">
                                    <Link href={`/destino/destino-update/${destino.id}`} className="btn btn-success" >
                                        Editar
                                    </Link>
                                    <Link href={`/destino/destino-delete/${destino.id}`}
                                        className="btn btn-danger mx-1"
                                    >Excluir </Link>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
