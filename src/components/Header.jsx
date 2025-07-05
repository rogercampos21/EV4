import React from 'react';
import { Dropdown, Nav } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';

const Header = ({ username }) => {
  const shortName = username?.length > 12 ? username.slice(0, 12) + '...' : username;

  return (
    <header className="d-flex justify-content-between align-items-center px-3 py-2 bg-light border-bottom">
      <h4>EcoFood</h4>
      <div className="d-flex align-items-center">
        <span className="me-2">{shortName}</span>
        <Dropdown>
          <Dropdown.Toggle variant="light" id="dropdown-user">
            <FaUserCircle size={24} />
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="/editar-perfil">Editar Perfil</Dropdown.Item>
            <Dropdown.Item href="/logout">Cerrar Sesión</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </header>
  );
};

export default Header;
