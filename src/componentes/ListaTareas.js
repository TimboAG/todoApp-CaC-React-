import React from 'react'
import TareaItem from './TareaItem';

function ListaTareas({ lista, completarTarea, eliminarTarea }) {
    return (
        <div className="tarea">
            {
                lista.map((tarea) =>
                    <TareaItem item={tarea} key={tarea.id} completarTarea={completarTarea} eliminarTarea={eliminarTarea}/>
                )
            }
        </div>
    )
}
export default ListaTareas;