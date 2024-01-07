import axios from 'axios'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { createStyleRegistry } from 'styled-jsx'

export default function DeleteId() {

    const router = useRouter()
    const { id } = router.query
    const [usuarioId, setUsuarioId] = useState(id)

    const handleDeleteUsuario = () => {
        axios
            .delete("http://localhost:8080/usuarios/" + usuarioId)
            .then(() => {
                router.push("/usuario")
            })
            .catch((error) => {
                alert("Erro ao excluir usuario:" + error)
            })
    }

    return (
        <div className='container-fluid'>

            <h1 className="text-muted">Excluir Usuario</h1>
            <table>
                <tbody>
                    <tr className='bg-secondary text-white'>
                        <td>
                            <label className='form-label'>ID do Usuario a ser excluído:</label>
                        </td>
                        <td>
                            <input className='form-control'
                                type="text"
                                value={usuarioId}
                                onChange={(e) => setUsuarioId(e.target.value)} readOnly
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <button className='btn btn-danger' onClick={handleDeleteUsuario}>Excluir Usuario</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>)
}
