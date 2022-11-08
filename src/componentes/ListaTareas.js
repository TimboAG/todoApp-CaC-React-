import React from 'react'
import TareaItem from './TareaItem';

function ListaTareas({ lista }) {
    return (
        <div>
            {
                lista.map((tarea) =>
                    <TareaItem item={tarea} key={tarea.id} />
                )
            }
        </div>
    )
}
export default ListaTareas;