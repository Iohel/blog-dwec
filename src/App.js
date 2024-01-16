
import Navbar from './Navbar';
import Inicio from './Inicio';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Crear from './Crear';
import Detalle from './Detalle';

function App() {

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path = "/">
              <Inicio/>
            </Route>
            <Route path = "/create">
              <Crear/>
            </Route>
            <Route path = "/detalle">
              <Detalle/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
