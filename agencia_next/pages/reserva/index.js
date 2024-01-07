import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'


export default function index() {
    const [reservas, setReservas] = useState([]);

    useEffect(() => {
        // Faça uma chamada GET para a API Spring Boot
        axios
            .get("http://localhost:8080/reservas")
            .then((response) => {
                setReservas(response.data);
            })
            .catch((error) => {
                console.error("Erro ao buscar a lista de Reservas:", error);
            });
    }, []);
    return (
        <div className="container-fluid opacity">
            <a href="reserva/reserva-create/" className="btn btn-primary my-1">
                <span className="fw-bold">+</span>Reserva
            </a>
            <table className="table table-responsive table-hover">
                <thead className="table-dark">
                    <tr className="text-center">
                        <th scope="col">Id</th>
                        <th scope="col">Pacote Promocional</th>
                        <th scope="col">Data da Reserva</th>
                        <th scope="col">Dias Reservados</th>
                        <th scope="col">Usuario</th>
                        <th scope="col">Hospedagem</th>
                        <th scope="col">Valor</th>
                        <th scope="col">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {reservas.map((reserva)=>(
                    <tr className="text-center">
                        <th scope="row">
                            {reserva.id}
                        </th>
                        <td>
                            {reserva.pacotePromo}
                        </td>
                        <td>
                            {reserva.dataReserva}
                        </td>
                        <td>
                            {reserva.qtdDias}
                        </td>
                        <td>
                            {reserva.usuario.nome}
                        </td>
                        <td>
                            {reserva.hospedagem.nome}
                        </td>
                        <td>
                           <span className='fw-bold'>R$</span> {reserva.valorTotal}
                        </td>
                        <td>
                            <div className="text-center">
                                <Link
                                    href={`/reserva/reserva-update/${reserva.id}`}
                                    className="btn btn-success"
                                >
                                    Editar
                                </Link>
                                <Link
                                    href={`/reserva/reserva-delete/${reserva.id}`}
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
