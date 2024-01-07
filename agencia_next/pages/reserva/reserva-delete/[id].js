import axios from 'axios'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { createStyleRegistry } from 'styled-jsx'

export default function DeleteId() {

    const router = useRouter()
    const { id } = router.query
    const [reservaId, setReservaId] = useState(id)

    const handleDeleteReserva = () => {
        axios
            .delete("http://localhost:8080/reservas/" + reservaId)
            .then(() => {
                router.push("/reserva")
            })
            .catch((error) => {
                alert("Erro ao excluir reserva:" + error)
            })
    }

    return (
        <div className='container-fluid'>

            <h1 className="text-muted">Excluir Reserva</h1>
            <table>
                <tbody>
                    <tr className='bg-secondary text-white'>
                        <td>
                            <label className='form-label'>ID do Reserva a ser excluído:</label>
                        </td>
                        <td>
                            <input className='form-control'
                                type="text"
                                value={reservaId}
                                onChange={(e) => setReservaId(e.target.value)} readOnly
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <button className='btn btn-danger' onClick={handleDeleteReserva}>Excluir Reserva</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>)
}
