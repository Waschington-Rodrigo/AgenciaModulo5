import axios from 'axios'
import { useRouter } from 'next/router'
import { useState } from 'react'



export default function CreateDestino() {

    const [newDestino, setNewDestino] = useState({ cidade: '', estado: '', localDestino: '', valor: null });
    const router = useRouter();

    const handleAddDestino = () => {
        axios
            .post("http://localhost:8080/destinos", newDestino)
            .then((response) => {
                router.push('/destino')
            }
            )
            .catch((error) => {
                alert("Erro ao inserir novo Destino:" + error)
            })
    }

    const handleInputChange = (e) => {
        setNewDestino({ ...newDestino, [e.target.name]: e.target.value })
    }

    return (
        <>
            <div className="container">


                <h3 className='text-muted'>Novo Destino</h3>
                <div className="form-group my-3">
                    <label htmlFor="iLocalDestino" className="form-label">Local de Destino: </label>
                    <input type="text" id="iLocalDestino" name="localDestino" value={newDestino.localDestino} onChange={handleInputChange} className="form-control" />
                </div>
                <div className="form-group my-3">
                    <label htmlFor="iValor" className="form-label"> Valor: </label>
                    <input type="text" id="iValor" name="valor" value={newDestino.valor} onChange={handleInputChange} className="form-control" />
                </div>


                <div className="form-group my-3">
                    <label htmlFor="iEstado" className="form-label">Estado: </label>
                    <input type="text" id="iEstado" name="estado" value={newDestino.estado} onChange={handleInputChange} className="form-control" />
                </div>
                <div className="form-group my-3">
                    <label id="iCidade" className="form-label"> Cidade: </label>
                    <input type="text" id="iCidade" name="cidade" value={newDestino.cidade} onChange={handleInputChange} className="form-control" />
                </div>

                <button onClick={handleAddDestino} className="btn btn-primary">Cadastrar</button>
                <a href="/destino" className="btn btn-danger mx-3">
                    Cancelar
                </a>
            </div>
        </>

    )
}

