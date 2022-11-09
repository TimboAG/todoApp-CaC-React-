import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import './css/estilo.css';


function AgregarTarea() {
    const [agregar, setAgregar] = useState("");
    const agregarTarea = (e) => {
        setAgregar(e.currentTarget.value);   
     }

     const enviar = (e) =>{
e.preventDefault();

     }

    return (
        <div className="agregarTarea">
            <form onSubmit={enviar()}>
            <InputGroup className="mb-3 ">
                <Form.Control
                    placeholder="Escriba tarea a agregar"
                    aria-label="Escriba tarea a agregar"
                    aria-describedby="Escriba tarea a agregar"
                    onChange={agregarTarea()}
                />
                <Button variant="outline-secondary" id="button-addon2">
                    Agregar
                </Button>
            </InputGroup>
            </form>           
        </div>
    )
}

export default AgregarTarea
