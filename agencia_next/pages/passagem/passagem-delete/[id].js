import axios from 'axios'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { createStyleRegistry } from 'styled-jsx'

export default function DeleteId() {

    const router = useRouter()
    const { id } = router.query
    const [passagemId, setPassagemId] = useState(id)

    const handleDeletePassagem = () => {
        axios
            .delete("http://localhost:8080/passagens/" + passagemId)
            .then(() => {
                router.push("/passagem")
            })
            .catch((error) => {
                alert("Erro ao excluir passagem:" + error)
            })
    }

    return (
        <div className='container-fluid'>

            <h1 className="text-muted">Excluir Passagem</h1>
            <table>
                <tbody>
                    <tr className='bg-secondary text-white'>
                        <td>
                            <label className='form-label'>ID do Passagem a ser excluído:</label>
                        </td>
                        <td>
                            <input className='form-control'
                                type="text"
                                value={passagemId}
                                onChange={(e) => setPassagemId(e.target.value)} readOnly
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <button className='btn btn-danger' onClick={handleDeletePassagem}>Excluir Passagem</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>)
}
