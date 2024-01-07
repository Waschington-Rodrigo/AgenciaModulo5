import axios from 'axios'
import { useRouter } from 'next/router'
import { useState } from 'react'



export default function CreateUsuario() {

    const [newUsuario, setNewUsuario] = useState({ nome: '', cpf: '', dataNascimento: null, email: '', telefone: '', endereco: '', cidade: '', estado: '' });
    const router = useRouter();

    const handleAddUsuario = () => {
        axios
            .post("http://localhost:8080/usuarios", newUsuario)
            .then((response) => {
                router.push('/usuario')
            }
            )
            .catch((error) => {
                alert("Erro ao inserir novo Usuario:" + error);
                console.log(newUsuario);
            })
    }

    const handleInputChange = (e) => {
        setNewUsuario({ ...newUsuario, [e.target.name]: e.target.value })
    }

    return (
        <>
            <div className="container">


                <h3 className='text-muted'>Novo Usuario</h3>

                <div className="form-group my-3">
                    <label htmlFor="iNome" className="form-label">Nome: </label>
                    <input required type="text" id="iNome" name="nome" value={newUsuario.nome} onChange={handleInputChange} className="form-control" />
                </div>

                <div className="form-group my-3">
                    <label htmlFor="iCpf" className="form-label"> CPF: </label>
                    <input required maxLength={11} type="text" id="iCpf" name="cpf" value={newUsuario.cpf} onChange={handleInputChange} className="form-control" />
                </div>

                <div className="form-group my-3">
                    <label htmlFor="iData" className="form-label"> Data de Nascimento: </label>
                    <input required type="date" id="iData" name="dataNascimento" value={newUsuario.dataNascimento} onChange={handleInputChange} className="form-control" />
                </div>

                <div className="form-group my-3">
                    <label htmlFor="iEmail" className="form-label"> Email: </label>
                    <input required type="text" id="iEmail" name="email" value={newUsuario.email} onChange={handleInputChange} className="form-control" />
                </div>

                <div className="form-group my-3">
                    <label htmlFor="iTelefone" className="form-label"> Telefone: </label>
                    <input required type="text" id="iTelefone" name="telefone" value={newUsuario.telefone} onChange={handleInputChange} className="form-control" />
                </div>

                <div className="form-group my-3">
                    <label htmlFor="iEndereco" className="form-label"> Endereco: </label>
                    <input required type="text" id="iEndereco" name="endereco" value={newUsuario.endereco} onChange={handleInputChange} className="form-control" />
                </div>

                <div className="form-group my-3">
                    <label htmlFor="iEstado" className="form-label">Estado: </label>
                    <input required type="text" id="iEstado" name="estado" value={newUsuario.estado} onChange={handleInputChange} className="form-control" />
                </div>

                <div className="form-group my-3">
                    <label id="iCidade" className="form-label"> Cidade: </label>
                    <input required type="text" id="iCidade" name="cidade" value={newUsuario.cidade} onChange={handleInputChange} className="form-control" />
                </div>

                <button onClick={handleAddUsuario} className="btn btn-primary">Cadastrar</button>
                <a href="/usuario" className="btn btn-danger mx-3">
                    Cancelar
                </a>
            </div>
        </>

    )
}

