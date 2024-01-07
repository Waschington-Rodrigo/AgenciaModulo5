import axios from 'axios'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'


export default function UpdateId() {

    const [destino, setDestino] = useState({id:null, cidade: "", estado: "", localDestino: "", valor: null})
    const router = useRouter()
    const { id } = router.query

    useEffect(() => {
        //Faça uma chamada GET para a API obtendo o Objeto a ser atualizado
        axios
            .get("http://localhost:8080/destinos/" + destino.id)
            .then((response) => {
                setDestino(response.data)
            })
            .catch((error) => {
                console.error("Erro ao buscar detalhes do destino", error)
            })
    }, [destino.id])
   

    const handleUpdateDestino = () => {
        axios
            .put("http://localhost:8080/destinos/"+ destino.id, destino)
            .then((response) => {
                router.push('/destino')
            }
            )
            .catch((error) => {
                alert("Erro ao inserir novo destino:" + error)
            })
    }

    const handleInputChange = (e) => {
        setDestino({ ...destino, [e.target.name]: e.target.value })
    }

    return (
        <>
            <div className="container">


                <h3 className='text-muted'>Atualizar destino</h3>
                <div className="form-group my-3">
                    <label htmlFor="iId" className="form-label">Id do destino: </label>
                    <input type="text" id="iId" name="id" value={destino.id = id} onChange={handleInputChange} className="form-control" readOnly/>
                </div>

                <div className="form-group my-3">
                    <label htmlFor="iLocaldestino" className="form-label">Local de destino: </label>
                    <input type="text" id="iLocaldestino" name="localDestino" value={destino.localDestino} onChange={handleInputChange} className="form-control" />
                </div>
                <div className="form-group my-3">
                    <label htmlFor="iValor" className="form-label"> Valor: </label>
                    <input type="text" id="iValor" name="valor" value={destino.valor} onChange={handleInputChange} className="form-control" />
                </div>


                <div className="form-group my-3">
                    <label htmlFor="iEstado" className="form-label">Estado: </label>
                    <input type="text" id="iEstado" name="estado" value={destino.estado} onChange={handleInputChange} className="form-control" />
                </div>
                <div className="form-group my-3">
                    <label id="iCidade" className="form-label"> Cidade: </label>
                    <input type="text" id="iCidade" name="cidade" value={destino.cidade} onChange={handleInputChange} className="form-control" />
                </div>

                <button onClick={handleUpdateDestino} className="btn btn-primary">Atualizar</button>
                <a href="/destino" className="btn btn-danger mx-3">
                    Cancelar
                </a>
            </div>
        </>

    )
}

