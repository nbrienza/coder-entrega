import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import navbar from './componentes/navegacion/navbar';
import inicio from './componentes/navegacion/paginas/inicio';
import imagenes from './componentes/navegacion/paginas/imagenes';
import catalogo from './componentes/navegacion/paginas/catalogo';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/src/componentes/navegacion/paginas/inicio.js" component={inicio} />
        <Route exact path="/src/componentes/navegacion/paginas/imagenes.js" component={imagenes} />
        <Route exact path="/src/componentes/navegacion/paginas/catalogo" component={catalogo} />
      </Switch>
    </Router>
  );
}

export default App;