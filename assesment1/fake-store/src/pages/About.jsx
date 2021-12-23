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
          <h3>3 cosas que aprendi en este programa</h3>
          <ul>
            <li>
              Entendí como es que funciona git y los principales comandos para
              el manejo de versiones y crear mi primer repositorio en gitHub que
              se ha vuelto indispensable (también uso más la consola que antes).
            </li>
            <li>
              Conceptos de javascript, el hoisting y la mutabilidad, ES6, la
              destructuración, el Spread Operator (...) y el operador ?? (que me
              han ayudado en más de una ocación)
            </li>
            <li>
              Ya voy entendiendo las promesas, el then, async await y el consumo
              de Apis y vamos por más.
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
)

export default About
