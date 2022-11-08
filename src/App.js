import React, {useState} from 'react';
import datos from './componentes/datos.json';
import ListaTareas from './componentes/ListaTareas';

function App() {
const [tareas, setTareas]=useState(datos);

  return (
    <div className="App">
     <ListaTareas lista = {tareas} />
    </div>
  );
}

export default App;
