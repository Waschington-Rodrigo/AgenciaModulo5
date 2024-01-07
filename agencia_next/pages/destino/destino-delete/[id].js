import axios from 'axios'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { createStyleRegistry } from 'styled-jsx'

export default function DeleteId() {

    const router = useRouter()
    const { id } = router.query
    const [destinoId, setDestinoId] = useState(id)

    const handleDeleteDestino = () => {
        axios
            .delete("http://localhost:8080/destinos/" + destinoId)
            .then(() => {
                router.push("/destino")
            })
            .catch((error) => {
                alert("Erro ao excluir destino:" + error)
            })
    }

    return (
        <div className='container-fluid'>

            <h1 className="text-muted">Excluir Destino</h1>
            <table>
                <tbody>
                    <tr className='bg-secondary text-white'>
                        <td>
                            <label className='form-label'>ID do Destino a ser excluído:</label>
                        </td>
                        <td>
                            <input className='form-control'
                                type="text"
                                value={destinoId}
                                onChange={(e) => setDestinoId(e.target.value)} readOnly
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <button className='btn btn-danger' onClick={handleDeleteDestino}>Excluir Destino</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>)
}
