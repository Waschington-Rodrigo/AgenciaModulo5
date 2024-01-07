import axios from 'axios'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'



export default function UpdateUsuario() {

    const [usuario, setUsuario] = useState({ id: null, nome: '', cpf: '', dataNascimento: null, email: '', telefone: '', endereco: '', cidade: '', estado: '' });
    const router = useRouter();
    const {id} = router.query;

    useEffect(()=>{
        axios
        .get("http://localhost:8080/usuarios/"+ usuario.id)
        .then((response)=>{
            setUsuario(response.data)
        })
        .catch((error) => {
            console.error("Erro ao buscar detalhes do destino", error)
        })
    },[usuario.id])

    const handleUpdateUsuario = () => {
        axios
            .put("http://localhost:8080/usuarios/" + usuario.id, usuario)
            .then((response) => {
                router.push('/usuario')
            }
            )
            .catch((error) => {
                alert("Erro ao inserir novo Usuario:" + error);
                console.log(usuario);
            })
    }

    const handleInputChange = (e) => {
        setUsuario({ ...usuario, [e.target.name]: e.target.value })
    }

    return (
        <>
            <div className="container">


                <h3 className='text-muted'>Atualizar Usuario</h3>

                <div className="form-group my-3">
                    <label htmlFor="iID" className="form-label">Id do usuario: </label>
                    <input required type="text" id="iID" name="id" value={usuario.id = id} onChange={handleInputChange} className="form-control" readOnly />
                </div>

                <div className="form-group my-3">
                    <label htmlFor="iNome" className="form-label">Nome: </label>
                    <input required type="text" id="iNome" name="nome" value={usuario.nome} onChange={handleInputChange} className="form-control" />
                </div>

                <div className="form-group my-3">
                    <label htmlFor="iCpf" className="form-label"> CPF: </label>
                    <input required type="text" id="iCpf" name="cpf" maxLength={11} value={usuario.cpf} onChange={handleInputChange} className="form-control" />
                </div>

                <div className="form-group my-3">
                    <label htmlFor="iData" className="form-label"> Data de Nascimento: </label>
                    <input required type="date" id="iData" name="dataNascimento" value={usuario.dataNascimento} onChange={handleInputChange} className="form-control" />
                </div>

                <div className="form-group my-3">
                    <label htmlFor="iEmail" className="form-label"> Email: </label>
                    <input required type="text" id="iEmail" name="email" value={usuario.email} onChange={handleInputChange} className="form-control" />
                </div>

                <div className="form-group my-3">
                    <label htmlFor="iTelefone" className="form-label"> Telefone: </label>
                    <input required type="text" id="iTelefone" name="telefone" value={usuario.telefone} onChange={handleInputChange} className="form-control" />
                </div>

                <div className="form-group my-3">
                    <label htmlFor="iEndereco" className="form-label"> Endereco: </label>
                    <input required type="text" id="iEndereco" name="endereco" value={usuario.endereco} onChange={handleInputChange} className="form-control" />
                </div>

                <div className="form-group my-3">
                    <label htmlFor="iEstado" className="form-label">Estado: </label>
                    <input required type="text" id="iEstado" name="estado" value={usuario.estado} onChange={handleInputChange} className="form-control" />
                </div>

                <div className="form-group my-3">
                    <label id="iCidade" className="form-label"> Cidade: </label>
                    <input required type="text" id="iCidade" name="cidade" value={usuario.cidade} onChange={handleInputChange} className="form-control" />
                </div>

                <button onClick={handleUpdateUsuario} className="btn btn-primary">Atualizar</button>
                <a href="/usuario" className="btn btn-danger mx-1">
                    Cancelar
                </a>
            </div>
        </>

    )
}

