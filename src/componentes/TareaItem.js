import React from 'react'

export default function TareaItem({ item }) {
    const miEstilo = () => {
        return {
            textDecoration: item.completado ? 'line-through' : 'none',
            margin: '20px',
            border: '1px solid #ff',
            backgroundColor: '#CCF7E3'
        }
    }
    return (
        <div style={miEstilo()}>
            {item.tarea}
        </div>
    )
}
