import { useState } from 'react';
import './sideBar.css'

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      <button className="sidebar-toggle" onClick={toggleSidebar}>
        ☰
      </button>
      <aside className={`sidebar ${isOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <h2>Panel</h2>
        </div>
        <ul className="sidebar-links">
          <li><a href="#inicio">Inicio</a></li>
          <li><a href="#productos">Productos</a></li>
          <li><a href="#reportes">Reportes</a></li>
          <li><a href="#config">Configuración</a></li>
        </ul>
      </aside>
    </>
  );
}

export default Sidebar;

