import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'


export default function reservaCreate() {
    const [hospedagens, setHospedagens] = useState([]);
    const [newReserva, setNewReserva] = useState({ pacotePromo: 1, dataReserva: null, qtdDias: null, valorTotal: null, usuario: null, hospedagem: null });
    const [idHospedagem, setIdHospedagem] = useState(null);
    const [cpf, setCpf] = useState(null);
    const router = useRouter();
    const [cpfValido, setCpfValido] = useState(true);
    const [hospedagemValido, setHospedagemValido] = useState(true);
    const [quantValido, setQuantValido] = useState(true);

    useEffect(() => {
        // Faça uma chamada GET para a API Spring Boot
        axios
            .get("http://localhost:8080/hospedagens")
            .then((response) => {
                setHospedagens(response.data);
            })
            .catch((error) => {
                console.error("Erro ao buscar a lista de Hospedagens:", error);
            });
    }, []);

    useEffect(() => {
        setNewReserva(prevState => {
            return { ...prevState, qtdDias: 0 }
        });
        axios
            .get("http://localhost:8080/hospedagens/" + idHospedagem)
            .then((response) => {
                setNewReserva(prevState => {
                    return { ...prevState, hospedagem: response.data }
                });
            })
            .catch((error) => {
                console.error("Erro ao buscar detalhes do hospedagem", error)
            });

    }, [idHospedagem])

    useEffect(() => {

        if (typeof newReserva.hospedagem !== 'object' || newReserva.hospedagem === null) {
            setHospedagemValido(true);
        }
        else {
            setHospedagemValido(false);
        };
    }, [newReserva.hospedagem])

    useEffect(() => {

        if (typeof newReserva.usuario !== 'object' || newReserva.usuario === null) {
            setCpfValido(true);
        }
        else {
            setCpfValido(false);
        };

    }, [newReserva.usuario]);

    useEffect(() => {
        axios
            .get("http://localhost:8080/usuarios/cpf/" + cpf)
            .then((response) => {
                setNewReserva(prevState => {
                    return { ...prevState, usuario: response.data }
                });
            })
            .catch((error) => {
                console.error("CPF não encontrado ou Usuario não existe", error);
            })
    }, [cpf])

    useEffect(() => {
        setNewReserva(prevState => {
            return { ...prevState, valorTotal: newReserva.hospedagem ? (newReserva.qtdDias * newReserva.hospedagem.valorDiaria) : null };
        });
        if (!Number.isInteger(newReserva.qtdDias) || newReserva.qtdDias <= 0) {
            setQuantValido(true);
        } else {
            setQuantValido(false);
        }
    }, [newReserva.qtdDias])

    const handleIdHospedagem = (e) => {
        setIdHospedagem(e.target.value)
    }

    const handleSetCpf = (e) => {
        setCpf(e.target.value);
    }

    const handlesetReserva = (e) => {
        setNewReserva({ ...newReserva, [e.target.name]: e.target.value })
    }

    const handleSetQuant = (e) => {
        setNewReserva(prevState => {
            return { ...prevState, qtdDias:parseFloat(e.target.value) }
        });
    }

    const handleAddReserva = () => {
        axios
            .post("http://localhost:8080/reservas", newReserva)
            .then((response) => {
                router.push('/reserva')
            }
            )
            .catch((error) => {
                alert("Erro ao inserir nova Reserva. Certifique se que todos campos foram preenchidos e tente novamente!",error)
            });
    }

console.log(newReserva);
    return (
        <div className="container">
            <div>
                <h1 className='text-center text-muted'>Compra de reserva</h1>
                <h4 className='text-muted fst-italic fw-normal'>Pacote Promocional</h4>
                <div className="form-group my-3">
                    <div className="form-check form-check-inline">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="pacotePromo"
                            id="iPacotePromo1"
                            value={1}
                            onChange={handlesetReserva}
                        />

                        <label
                            className="form-check-label font-weight-bold"
                            htmlFor="iPacotePromo1"
                        >
                            Pacote Econômico
                        </label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="pacotePromo"
                            id="iPacotePromo2"
                            value={2}
                            onChange={handlesetReserva} />
                        <label
                            className="form-check-label font-weight-bold"
                            htmlFor="iPacotePromo2"
                        >
                            Pacote Tranquilidade
                        </label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="pacotePromo"
                            id="iPacotePromo3"
                            value={3}
                            onChange={handlesetReserva} />
                        <label
                            className="form-check-label font-weight-bold"
                            htmlFor="iPacotePromo3"
                        >
                            Pacote Luxo
                        </label>
                    </div>
                </div>
                <legend>Dados para Compra</legend>
                <div className="form-group my-3">
                    <label htmlFor="iDataReserva" className="form-label">
                        Data da Viagem:
                    </label>
                    <input
                        type="date"
                        id="iDataReserva"
                        name="dataReserva"
                        value={newReserva.dataReserva}
                        className="form-control"
                        onChange={handlesetReserva}
                    />
                </div>
                <div className="form-group my-3">
                    <label htmlFor="iCPFUsuario" className="form-label">
                        CPF:
                    </label>
                    <input
                        maxLength={11}
                        type="text"
                        id="iCPFUsuario"
                        name="cpf"
                        onChange={handleSetCpf}
                        className="form-control"
                        placeholder="É necessario ter cadastro de usuario, para realizar compras!"
                    />
                </div>
                <div className="form-group my-3">
                    <label htmlFor="iHospedagem" className="form-label fw-bold">
                        Hospedagem:
                    </label>
                    <select id="iHospedagem" name="id" onChange={handleIdHospedagem} required>
                        <option defaultChecked >Selecione o local de viagem</option>
                        {hospedagens.map((hospedagem) => (
                            <option value={hospedagem.id}>
                                {`${hospedagem.nome} / ${hospedagem.cidade}`}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="form-group my-3">
                    <label htmlFor="iQuantidade" className="form-label">
                        Quantidade de dias:
                    </label>
                    <input
                        type="number"
                        id="iQuantidade"
                        name="qtdDias"
                        value={newReserva.qtdDias}
                        onChange={handleSetQuant}
                        className="form-control"
                        placeholder="Quantidade de dias que deseja reservar."
                        required
                    />
                </div>
                <div className="form-group my-3">
                    <label htmlFor="iValorTotal" className="form-label fw-bold">
                        Valor a pagar R$:
                    </label>
                    <input
                        type="text"
                        id="iValorTotal"
                        name="valorTotal"
                        value={newReserva.valorTotal}
                        className="form-control" readOnly
                    />
                </div>

                {cpfValido || hospedagemValido || quantValido ? null : <button onClick={handleAddReserva} className="btn btn-primary" >Comprar</button>}
                <a href="/reserva" className="btn btn-danger mx-2">
                    Cancelar
                </a>
            </div>
        </div>

    )
} 
