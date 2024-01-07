import axios from 'axios'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { createStyleRegistry } from 'styled-jsx'

export default function DeleteId() {

    const router = useRouter()
    const { id } = router.query
    const [hospedagemId, setHospedagemId] = useState(id)

    const handleDeleteHospedagem = () => {
        axios
            .delete("http://localhost:8080/hospedagens/" + hospedagemId)
            .then(() => {
                router.push("/hospedagem")
            })
            .catch((error) => {
                alert("Erro ao excluir hospedagem:" + error)
            })
    }

    return (
        <div className='container-fluid'>

            <h1 className="text-muted">Excluir Hospedagem</h1>
            <table>
                <tbody>
                    <tr className='bg-secondary text-white'>
                        <td>
                            <label className='form-label'>ID da Hospedagem a ser excluído:</label>
                        </td>
                        <td>
                            <input className='form-control'
                                type="text"
                                value={hospedagemId}
                                onChange={(e) => setHospedagemId(e.target.value)} readOnly
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <button className='btn btn-danger' onClick={handleDeleteHospedagem}>Excluir Hospedagem</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>)
}
