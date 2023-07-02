import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import './FormularioCliente.css'
import React, {useState} from 'react';
import Cliente from './Cliente';

const FormularioCliente = () => {

    const [cliente,setCliente] = useState({
        cpf:'',
        nome:''
    })

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const atualizarCliente = (e) => {
        setCliente(
            {
                cpf: e.target.value
            }
        )
    }

    const submit = () => {
        let cliente = {
            cpf: cliente.cpf,
            nome: cliente.nome
        }
        cadastrarCliente(cliente)
    }
    const cadastrarCliente = (cliente) => {
        fetch("http://localhost:3000/clientes", {method: 'POST', headers: {'Content-Type':'application/json'}, body: JSON.stringify(cliente)})
        .then(response => {
            if (response.ok) {
                Cliente().getClientes()
            }else {
                alert('Não foi possível adiconar cliente à base')
            }
        })
    }

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Editar
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Alterar cadastro</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicCpf">
                            <Form.Label>CPF</Form.Label>
                            <Form.Control type="text" placeholder="" value={cliente.cpf} onChange={(e) => atualizarCliente(e)}/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Nome</Form.Label>
                            <Form.Control type="password" placeholder="" value={cliente.nome} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={submit()}>
                        Salvar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );

}
export default FormularioCliente