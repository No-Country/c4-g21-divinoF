// Estructura Básica para un componente de React:
// Import
// Código del componente
// Export

// Imports
// Acá importamos los componentes, estilos, métodos o recursos que necesitemos.
// Revisar las rutas donde se encuentran las cosas que necesitamos - Ejemplo:
// import "../styles/styles.css" - Notación para un CSS que está en otra carpeta
// import Icon from "./Icon" - Notación para otro componente que está en la misma carpeta

// Code
// Se compone de dos partes esenciales: lógica y render
// Primera parte: lógica - El funcionamiento. Acá se declaran los estados y las funciones que darán funcionamiento al componente.
// Segunda parte: render (return) - Lo que se renderiza en el DOM. Lo que esté dentro del return es lo que se visualizará en el navegador. JSX, el formato que utiliza React, permite una única etiqueta dentro de su return como elemento primario o principal, mientras que adentro de esta etiqueta pueden ir todas las necesarias. Recomendable usar <div></div> o fragment (<></>)
// Existen dos tipos de componentes: funcionales o de clase
// Generalmente se utilizan componentes funcionales, es decir, componentes que se declaran por medio de funciones. A su vez, existen dos tipos de escribirlos: de forma tradicional o como función flecha.

// Forma tradicional - Evitar - Common function - Descomentar para ver las palabras reservadas y los colores
// function NavBar(){
//     // Lógica
//     // Render
//     return (
//         <div>
//             {/* Acá van las etiquetas que queremos utilizar */}
//         </div>
//      )
// }

// Forma actual - Usar - Arrow Function - Descomentar para ver las palabras reservadas y los colores
// const NavBar = () => {
//     // Lógica
//     // Render
//     return (
//         <div>
//             {/* Acá van las etiquetas que queremos utilizar */}
//         </div>
//      )
// }

// Exports
// Cada componente o función debe ser exportado para poder utilizarlo en otro componente o lugar de la aplicación
// Existen dos formas: export y export default.
// Export se coloca al inicio en la declaración del componente. No permite renombrar al componente
// Export default se coloca al final del componente. Permite cambiarle el nombre cuando se invoca en otro lado

// imports
import Icon from "./Icon";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

// Code
const NavBar = () => {
  // Lógica
  // Render
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Divino</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Our</Nav.Link>
            <NavDropdown title="VINOS" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Contact</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <Icon />
    </Navbar>
  );
};

// Export
export default NavBar;
