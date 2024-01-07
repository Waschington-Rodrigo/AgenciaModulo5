import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'


export default function passagemCreate() {
    const [destinos, setDestinos] = useState([]);
    const [newPassagem, setNewPassagem] = useState({ pacotePromo: 1, dataViagem: null, valorTotal: null, usuario: null, destino: null });
    const [quant, setQuant] = useState('');
    const [idDestino, setIdDestino] = useState(null);
    const [cpf, setCpf]= useState(null);
    const router = useRouter();
    const [cpfValido, setCpfValido] = useState(true);
    const [destinoValido, setDestinoValido] = useState(true);
    const [quantValido, setQuantValido] = useState(true);

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

    useEffect(() => {
        setQuant(0);
        axios
            .get("http://localhost:8080/destinos/" + idDestino)
            .then((response) => {
                setNewPassagem(prevState => {
                    return { ...prevState, destino: response.data }
                });
            })
            .catch((error) => {
                console.error("Erro ao buscar detalhes do destino", error)
            });
        
    }, [idDestino])

    useEffect(() => {

        if (typeof newPassagem.destino !== 'object' || newPassagem.destino === null) {
            setDestinoValido(true);
        }
        else {
            setDestinoValido(false);
        };
    }, [newPassagem.destino])

    useEffect(() => {

        if (typeof newPassagem.usuario !== 'object' || newPassagem.usuario === null) {
            setCpfValido(true);
        }
        else {
            setCpfValido(false);
        };

    }, [newPassagem.usuario]);

    useEffect(() => {
        axios
            .get("http://localhost:8080/usuarios/cpf/" + cpf)
            .then((response) => {
                setNewPassagem(prevState => {
                    return { ...prevState, usuario: response.data }
                });
            })
            .catch((error) => {
                console.error("CPF não encontrado ou Usuario não existe", error);
            })
    }, [cpf])

    useEffect(() => {
        setNewPassagem(prevState => {
            return { ...prevState, valorTotal: newPassagem.destino ? (quant * newPassagem.destino.valor) : null };
        });
        if (!Number.isInteger(quant) || quant <= 0) {
            setQuantValido(true);
        } else {
            setQuantValido(false);
        }
    }, [quant])

    const handleIdDestino = (e) => {
        setIdDestino(e.target.value)
    }

    const handleSetCpf = (e) => {
        setCpf(e.target.value);
    }

    const handlesetPassagem = (e) => {
        setNewPassagem({ ...newPassagem, [e.target.name]: e.target.value })
    }

    const handleSetQuant = (e) => {
        setQuant(parseFloat(e.target.value));
    }

    const handleAddPassagem = () => {
        axios
            .post("http://localhost:8080/passagens", newPassagem)
            .then((response) => {
                router.push('/passagem')
            }
            )
            .catch((error) => {
                alert("Erro ao inserir nova Passagem. Certifique se que todos campos foram preenchidos e tente novamente!")
            });
    }


    return (
        <div className="container">
            <div>
                <h1 className='text-center text-muted'>Compra de passagem</h1>
                <h4 className='text-muted fst-italic fw-normal'>Pacote Promocional</h4>
                <div className="form-group my-3">
                    <div className="form-check form-check-inline">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="pacotePromo"
                            id="iPacotePromo1"
                            value={1}
                            onChange={handlesetPassagem}
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
                            onChange={handlesetPassagem} />
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
                            onChange={handlesetPassagem} />
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
                    <label htmlFor="iDataViagem" className="form-label">
                        Data da Viagem:
                    </label>
                    <input
                        type="date"
                        id="iDataViagem"
                        name="dataViagem"
                        value={newPassagem.dataViagem}
                        className="form-control"
                        onChange={handlesetPassagem}
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
                    <label htmlFor="iDestino" className="form-label fw-bold">
                        Destino:
                    </label>
                    <select id="iDestino" name="id" onChange={handleIdDestino} required>
                        <option defaultChecked >Selecione o local de viagem</option>
                        {destinos.map((destino) => (
                            <option value={destino.id}>
                                {`${destino.localDestino} / ${destino.cidade}`}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="form-group my-3">
                    <label htmlFor="iQuantidade" className="form-label">
                        Quantidade de Passagens:
                    </label>
                    <input
                        type="number"
                        id="iQuantidade"
                        name="quant"
                        value={quant}
                        onChange={handleSetQuant}
                        className="form-control"
                        placeholder="Quantidade de passagens que deseja comprar."
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
                        value={newPassagem.valorTotal}
                        onChange={handlesetPassagem}
                        className="form-control" readOnly
                    />
                </div>

                {cpfValido || destinoValido || quantValido ? null : <button onClick={handleAddPassagem} className="btn btn-primary" >Comprar</button>}
                <a href="/passagem" className="btn btn-danger mx-2">
                    Cancelar
                </a>
            </div>
        </div>

    )
} 
