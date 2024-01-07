import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'


export default function createHhospedagem() {
    const [hospedagem, setHospedagem] = useState({ nome: '', cidade: '', estado: '', endereco: '', tipo: '', telefone: '', valorDiaria: null })
    const router = useRouter();
    const {id} = router.query;

    useEffect(() => {
        axios
            .get("http://localhost:8080/hospedagens/" + hospedagem.id)
            .then((response) => {
                setHospedagem(response.data)
            })
            .catch((error) => {
                console.error("Erro ao buscar detalhes do destino", error)
            })
    }, [hospedagem.id])

    const handleUpdateHospedagem = () => {
        axios
            .put("http://localhost:8080/hospedagens/" + hospedagem.id, hospedagem)
            .then((response) => {
                router.push('/hospedagem')
            }
            )
            .catch((error) => {
                alert("Erro ao inserir novo Hospedagem:" + error)
            })
    }

    const handleInputChange = (e) => {
        setHospedagem({ ...hospedagem, [e.target.name]: e.target.value })
    }
    return (
        <div className="container">
            <div>

                <h2 className='text-muted text-center'>Dados da Hospedagem</h2>

                <div className="form-group my-3">
                    <label htmlFor="iId" className="form-label">
                        Id:
                    </label>
                    <input type="text" id="iId" name="id" value={hospedagem.id = id} onChange={handleInputChange} className="form-control" readOnly />
                </div>

                <div className="form-group my-3">
                    <label htmlFor="iNome" className="form-label">
                        Nome:
                    </label>
                    <input type="text" id="iNome" name="nome" value={hospedagem.nome} onChange={handleInputChange} className="form-control" />
                </div>
                <div className="form-group my-3">
                    <label htmlFor="iValorDiaria" className="form-label">
                        Valor da Diária (R$):
                    </label>
                    <input
                        type="text"
                        id="iValorDiaria"
                        name="valorDiaria" value={hospedagem.valorDiaria} onChange={handleInputChange}
                        className="form-control"
                    />
                </div>
                <div className="form-group my-3">
                    <label htmlFor="iTipo" className="form-label">
                        Tipo :
                    </label>
                    <input type="text" id="iTipo" name="tipo" value={hospedagem.tipo} onChange={handleInputChange} className="form-control" />
                </div>
                <div className="form-group my-3">
                    <label htmlFor="iTelefone" className="form-label">
                        Telefone:
                    </label>
                    <input
                        type="text"
                        id="iTelefone"
                        name="telefone" value={hospedagem.telefone} onChange={handleInputChange}
                        className="form-control"
                    />
                </div>
                <legend>Logradouro</legend>
                <div className="form-group my-3">
                    <label htmlFor="iEndereco" className="form-label">
                        Endereço:
                    </label>
                    <input
                        type="text"
                        id="iEndereco"
                        name="endereco" value={hospedagem.endereco} onChange={handleInputChange}
                        className="form-control"
                    />
                </div>
                <div className="form-group my-3">
                    <label htmlFor="iEstado" className="form-label">
                        Estado:
                    </label>
                    <input
                        type="text"
                        id="iEstado"
                        name="estado" value={hospedagem.estado} onChange={handleInputChange}
                        className="form-control"
                    />
                </div>
                <div className="form-group my-3">
                    <label htmlFor="iCidade" className="form-label">
                        Cidade:
                    </label>
                    <input
                        type="text"
                        id="iCidade"
                        name="cidade" value={hospedagem.cidade} onChange={handleInputChange}
                        className="form-control"
                    />
                </div>
                <button onClick={handleUpdateHospedagem} className="btn btn-primary">Atualizar</button>
                <Link href="/hospedagem" className="btn btn-danger mx-1">
                    Cancelar
                </Link>
            </div>
        </div>
    )
}
