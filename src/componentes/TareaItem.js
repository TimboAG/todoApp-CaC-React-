import React from 'react';
import Button from 'react-bootstrap/Button';
import './css/estilo.css';
import Alert from 'react-bootstrap/Alert';

export default function TareaItem({ item, completarTarea, eliminarTarea }) {
    const miEstilo = () => {
        return {
            textDecoration: item.completado ? 'line-through' : 'none',
        }
    }
    return (
        <div style={miEstilo()} >
            <Alert key="light" variant="light">
                <input type="checkbox" checked={item.completado} className='check'
                    onChange={() => completarTarea(item.id)} />
                {item.tarea}
                <Button variant="primary" type="submit" className='btn' onClick={ () => eliminarTarea(item.id)}>
                    X
                </Button>
            </Alert>
        </div>
    )
}
