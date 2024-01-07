import React from 'react';
import axios from 'axios';
import Link from 'next/link'; // Importe o Link para criar links de navegação
import { useEffect, useState } from "react";

export default function Index() {
    const [usuarios, setDestinos] = useState([]);

    useEffect(() => {
        // Faça uma chamada GET para a API Spring Boot
        axios
            .get("http://localhost:8080/usuarios")
            .then((response) => {
                setDestinos(response.data);
            })
            .catch((error) => {
                console.error("Erro ao buscar a lista de Usuarios:", error);
            });
    }, []);

    return (
        <div className="container-fluid opacity">
            <a href="/usuario/create-usuario" className="btn btn-primary my-1">
                <span className="fw-bold">+</span>Usuario
            </a>
            <table className="table table-responsive table-hover">
                <thead className="table-dark">
                    <tr className="text-center">
                        <th scope="col">Id</th>
                        <th scope="col">Nome</th>
                        <th scope="col">email</th>
                        <th scope="col">Cidade</th>
                        <th scope="col">Estado</th>
                        <th scope="col">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {usuarios.map((usuario) => (

                        <tr className="text-center">
                            <th scope="row">
                                {usuario.id}
                            </th>
                            <td>
                                 {usuario.nome}
                            </td>
                            <td>
                                {usuario.email}
                            </td>
                            <td>
                                {usuario.cidade}
                            </td>
                            <td>
                                {usuario.estado}
                            </td>
                            
                            
                            <td>
                                <div className="text-center">
                                    <Link href={`/usuario/usuario-update/${usuario.id}`} className="btn btn-success" >
                                        Editar
                                    </Link>
                                    <Link href={`/usuario/usuario-delete/${usuario.id}`}
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
