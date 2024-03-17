import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Buscador from './componentes/Buscador';
import Listado from './componentes/Listado';
import Formulario from './componentes/Formulario';
import Alert from './componentes/Alert';
import { BaseColaboradores } from './BaseColaboradores';

function App() {
  const [baseColaboradores, setBaseColaboradores] = useState(BaseColaboradores);
  const [colaboradoresFiltrado, setBaseColaboradoresFiltrado] = useState(BaseColaboradores);

  const [alert, setAlert] = useState({
    texto: '',
    tipo: '',
    estado: false,
  });

  const addAlert = (newAlert) => {
    setAlert(newAlert);
  };

  return (
    <>
      <h1 className="my-4"><i className="fa-solid fa-user-group"></i> Lista de Colaboradores</h1>
      <Buscador 
        data={baseColaboradores}
        dataFilter={setBaseColaboradoresFiltrado}
      />
      <div className="row row-cols-2 justify-content-end m-0">
        <Listado
          data={baseColaboradores}
          setData={setBaseColaboradores}
          dataFilter={colaboradoresFiltrado}
          setDataFilter={setBaseColaboradoresFiltrado}
        />
        <Formulario
          className="formulario"
          addAlert={addAlert}
          data={baseColaboradores}
          setData={setBaseColaboradores}
          dataFilter={colaboradoresFiltrado}
          setDataFilter={setBaseColaboradoresFiltrado}
        />
        <Alert className="alert" alerta={alert}/>
      </div>
    </>
  );
}

export default App;
