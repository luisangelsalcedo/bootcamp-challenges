import Menu from "../components/Menu"

const About = () => (
  <div className="about">
    <Menu />
    <div className="container">
      <div className="aboutme_image">
        <figure>
          <img
            src="https://avatars.githubusercontent.com/u/8843955?s=500"
            alt=""
          />
        </figure>
        <div>
          <div className="title">
            <h2>Luis Angel Salcedo Gavidia</h2>
          </div>
          <div className="country">
            <i className="fa fa-map-marker" aria-hidden="true" />
            &nbsp;Lima / Perú
          </div>
          <div className="country">
            <i className="fa fa-envelope-o" aria-hidden="true" />
            &nbsp;seemc9@gmail.com
          </div>
          <a
            className="btn"
            href="https://github.com/luisangelsalcedo"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa fa-github" aria-hidden="true" /> Ver repositorio en
            GitHub
          </a>
        </div>
      </div>
      <div className="aboutme_info">
        <div>
          <h3>Descripción</h3>
          <p>
            Diseñador gráfico y desarrollador web autodidacta, con todas las
            ganas de aprender y seguir mejorando.
          </p>
        </div>
        <div>
          <h3>3 cosas que aprendí en este programa</h3>
          <ul>
            <li>
              Entendí como funciona git y los principales comandos para el
              manejo de versiones.Así también como crear mi primer repositorio
              en gitHub, el cual se ha vuelto indispensable. Además uso más la
              consola que antes.
            </li>
            <li>
              Conceptos de javascript, el hoisting y la mutabilidad, ES6, la
              destructuración, el Spread Operator (...) y el operador ??, el
              cual me ha ayudado en más de una ocasión.
            </li>
            <li>
              Ya comprendo mejor las promesas, el then, async await y el consumo
              de Apis y vamos por más.
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
)

export default About
