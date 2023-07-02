import React, { useEffect, useState } from "react"
import { Table, Button } from "react-bootstrap"
import FormularioCliente from "./FormularioCliente"

const Cliente = () => {
    const [clientes, setClientes] = useState([])

    const getClientes = () => {
         fetch("http://localhost:3000/clientes")
         .then(resposta => resposta.json())
         .then(dados => {
             setClientes(dados)
         })
    }
    
    const deleteCliente = (id) => {
        fetch("http://localhost:3000/clientes/"+id, {method: 'DELETE'})
        .then(response => {
            if (response.ok) {
                getClientes()
            }     
        })
    }


    useEffect(() => {
        getClientes()   
    },[])

    return (
        <React.Fragment>
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>CPF</th>
                    <th>Nome</th>
                    <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        clientes.map((cliente) =>
                        <tr>
                            <td>{cliente.cpf}</td>
                            <td>{cliente.nome}</td>
                            <td><FormularioCliente/><Button variant="danger" onClick={() => deleteCliente(cliente.id)}>Excluir</Button>{'  '}</td>
                        </tr>
                        )

                    }
                    
                </tbody>
            </Table>
            

            

        </React.Fragment>
    )
}
export default Cliente