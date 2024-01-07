import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router'
import React, { useState } from 'react'


export default function createHhospedagem() {
    const [newHospedagem, setNewHospedagem] = useState({ nome: '', cidade: '', estado: '', endereco: '', tipo: '', telefone: '', valorDiaria: null })
    const router = useRouter();

    const handleAddHospedagem = () => {
        axios
            .post("http://localhost:8080/hospedagens", newHospedagem)
            .then((response) => {
                router.push('/hospedagem')
            }
            )
            .catch((error) => {
                alert("Erro ao inserir novo Hospedagem:" + error)
            })
    }

    const handleInputChange = (e) => {
        setNewHospedagem({ ...newHospedagem, [e.target.name]: e.target.value })
    }
    return (
        <div className="container">
            <div>

                <h2 className='text-muted text-center'>Dados da Hospedagem</h2>
                <div className="form-group my-3">
                    <label htmlFor="iNome" className="form-label">
                        Nome:
                    </label>
                    <input type="text" id="iNome" name="nome" value={newHospedagem.nome} onChange={handleInputChange} className="form-control" />
                </div>
                <div className="form-group my-3">
                    <label htmlFor="iValorDiaria" className="form-label">
                        Valor da Diária (R$):
                    </label>
                    <input
                        type="text"
                        id="iValorDiaria"
                        name="valorDiaria" value={newHospedagem.valorDiaria} onChange={handleInputChange}
                        className="form-control"
                    />
                </div>
                <div className="form-group my-3">
                    <label htmlFor="iTipo" className="form-label">
                        Tipo :
                    </label>
                    <input type="text" id="iTipo" name="tipo" value={newHospedagem.tipo} onChange={handleInputChange} className="form-control" />
                </div>
                <div className="form-group my-3">
                    <label htmlFor="iTelefone" className="form-label">
                        Telefone:
                    </label>
                    <input
                        type="text"
                        id="iTelefone"
                        name="telefone" value={newHospedagem.telefone} onChange={handleInputChange}
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
                        name="endereco" value={newHospedagem.endereco} onChange={handleInputChange}
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
                        name="estado" value={newHospedagem.estado} onChange={handleInputChange}
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
                        name="cidade" value={newHospedagem.cidade} onChange={handleInputChange}
                        className="form-control"
                    />
                </div>
                <button onClick={handleAddHospedagem} className="btn btn-primary">Cadastrar</button>
                <Link href="/hospedagem" className="btn btn-danger">
                    Cancelar
                </Link>
            </div>
        </div>
    )
}
