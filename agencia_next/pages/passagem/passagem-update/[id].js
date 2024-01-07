import axios from 'axios'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'


export default function UpdateId() {

    const [destinos, setDestinos] = useState([]);
    const [Passagem, setPassagem] = useState({ id: null, pacotePromo: 1, dataViagem: null, valorTotal: null, usuario: null, destino: null });
    const [quant, setQuant] = useState(0);
    const [idDestino, setIdDestino] = useState(null);
    const router = useRouter();
    const [cpfValido, setCpfValido] = useState(true);
    const [quantValido, setQuantValido] = useState(true);
    const { id } = router.query;
    const [cpf, setCpf] = useState(null);



    useEffect(() => {
        //Faça uma chamada GET para a API obtendo o Objeto a ser atualizado
        axios
            .get("http://localhost:8080/passagens/" + Passagem.id)
            .then((response) => {
                setPassagem(response.data)
            })
            .catch((error) => {
                console.error("Erro ao buscar detalhes do passagem", error)
            });

        axios
            .get("http://localhost:8080/destinos")
            .then((response) => {
                setDestinos(response.data);
            })
            .catch((error) => {
                console.error("Erro ao buscar a lista de Destinos:", error);
            });
    }, [Passagem.id])


    useEffect(() => {
        setQuant(0);
        axios
            .get("http://localhost:8080/destinos/" + idDestino)
            .then((response) => {
                setPassagem(prevState => {
                    return { ...prevState, destino: response.data }
                });
            })
            .catch((error) => {
                console.error("Erro ao buscar detalhes do destino", error)
            });
        setPassagem(prevState => {
            return { ...prevState, valorTotal: Passagem.destino ? (quant * Passagem.destino.valor) : null };
        });
    }, [idDestino])

    useEffect(() => {

        if (typeof Passagem.usuario !== 'object' || Passagem.usuario === null) {
            setCpfValido(true);
        } else {
            setCpfValido(false);
        }
    }, [Passagem.usuario])


    useEffect(() => {
        axios
            .get("http://localhost:8080/usuarios/cpf/" + cpf)
            .then((response) => {
                setPassagem(prevState => {
                    return { ...prevState, usuario: response.data }
                });
            })
            .catch((error) => {
                console.error("CPF não encontrado ou Usuario não existe", error);
            })
    }, [cpf])

    useEffect(() => {
        setPassagem(prevState => {
            return { ...prevState, valorTotal: Passagem.destino ? (quant * Passagem.destino.valor) : null };
        });
        if (!Number.isInteger(quant) || quant <= 0) {
            setQuantValido(true);
        } else {
            setQuantValido(false);
        }
    }, [quant])

    const handleIdDestino = (e) => {
        setIdDestino(e.target.value);

    }

    const handleSetCpf = (e) => {
        setCpf(e.target.value);
    }

    const handlesetPassagem = (e) => {
        setPassagem({ ...Passagem, [e.target.name]: e.target.value })
    }

    const handleSetQuant = (e) => {
        setQuant(parseFloat(e.target.value));
    }

    const handleUpdatePassagem = () => {
        axios
        .put("http://localhost:8080/passagens/"+ Passagem.id, Passagem)
        .then((response)=>{
            router.push('/passagem')
        })
        .catch((error) => {
            alert("Erro ao inserir novo destino:" + error)
        })
    }

    return (
        <>
            <div className="container">
                <div>
                    <h1 className='text-center text-muted'>Compra de passagem</h1>
                    <h4 className='text-muted fst-italic fw-normal'>Pacote Promocional</h4>
                    <div className="form-group my-3">

                        <div className="form-group my-3">
                            <label htmlFor="iId" className="form-label">Id da Passagem: </label>
                            <input type="text" id="iId" name="id" value={Passagem.id = id} onChange={handlesetPassagem} className="form-control" readOnly />
                        </div>
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
                            value={Passagem.dataViagem}
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
                            value={Passagem.usuario ? Passagem.usuario.cpf : null}
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
                            value={Passagem.valorTotal}
                            onChange={handlesetPassagem}
                            className="form-control" readOnly
                        />
                    </div>

                    {cpfValido || quantValido ? null : <button onClick={handleUpdatePassagem} className="btn btn-primary" >Atualizar</button>}
                    <a href="/passagem" className="btn btn-danger mx-2">
                        Cancelar
                    </a>
                </div>
            </div>

        </>

    )
}

