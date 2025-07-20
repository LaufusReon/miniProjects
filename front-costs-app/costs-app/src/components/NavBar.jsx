import { useState } from "react";
import "./Navbar.css";


const mainRoutes = ['Inicio','Nosotros','Mis Datos'];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className="navbar-logo">MiSitio</div>
      <button className="navbar-toggle" onClick={toggleMenu}>
        ☰
      </button>
      <ul className={`navbar-links ${isOpen ? "open" : ""}`}>
        {mainRoutes.map(titles=>{
            return <li><a href="">{titles}</a></li>
        })}
      </ul>
    </nav>
  );
}

export default Navbar;
