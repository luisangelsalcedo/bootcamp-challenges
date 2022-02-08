import { Elecciones } from "../pages/Elecciones";
import { RegistrarCandidato } from "./../pages/RegistrarCandidato";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../redux";

export const VotosApp = () => {
  return (
    <div>
      <h1>votos-app-redux</h1>
      <hr />
      <Provider store={store}>
        <BrowserRouter>
          <nav className="navbar navbar-dark bg-dark mb-3">
            <ul className="navbar-nav d-flex flex-row">
              <li className="nav-item mr-4">
                <Link className="nav-link" to="/">
                  Elecciones
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="registrar">
                  Regitrar
                </Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/" element={<Elecciones />} />
            <Route path="registrar" element={<RegistrarCandidato />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
};
