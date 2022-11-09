import React, {useState} from 'react';
import datos from './componentes/datos.json';
import ListaTareas from './componentes/ListaTareas';
import AgregarTarea from './componentes/AgregarTarea';

function App() {
const [tareas, setTareas]=useState(datos);

const completarTarea = (id) =>{
 setTareas( tareas.map( (tareaItem) =>{
  return tareaItem.id === id ? {...tareaItem, completado: !tareaItem.completado} : {...tareaItem};
}));
}

const eliminarTarea = (id) =>{
setTareas( [...tareas].filter(tareaItem => tareaItem.id !== id) );
}

  return (
    <div className="App">
      <AgregarTarea/>
     <ListaTareas lista = {tareas} completarTarea={completarTarea} eliminarTarea={eliminarTarea}/>
    </div>
  );
}

export default App;
