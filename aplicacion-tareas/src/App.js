
import './App.css';
import freeCodeCampLogo from'./imagenes/fcc_logo.svg'
import ListaDeTareas from './componentes/listaDeTareas';

function App() {
  return (
    <div className="aplicacion-tareas">
      <div className='freecodecamp-logo-contenedor'>
        <img
          src={freeCodeCampLogo}
          alt='freecodecampLogo'
          className='freecodecamp-logo' />
      </div>
      <div className='tareas-lista-principal'>
        <h1>Mis Tareas</h1>
        <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
