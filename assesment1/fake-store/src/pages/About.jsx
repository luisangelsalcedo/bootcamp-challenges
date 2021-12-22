import Menu from "../components/Menu"

const About = () => (
  <div className="about">
    <Menu />
    <div className="container">
      <div className="title">
        <h2>About me</h2>
      </div>

      <h2>Luis Angel Salcedo Gavidia</h2>
      <p>Imagen</p>
      <p>
        <b>Lista de 3 cosas que hayas aprendido en este programa</b>
        <ul>
          <li>La destructuración </li>
          <li>El operador ??</li>
          <li>Que aun me falta mucho para aprender react</li>
        </ul>
      </p>
      <div>github</div>
    </div>
  </div>
)

export default About
