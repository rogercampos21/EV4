import React from 'react';
import { Dropdown, Nav } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header = ({ username }) => {
  const shortName = username?.length > 12 ? username.slice(0, 12) + '...' : username;

   return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-success">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src="/logo.png" alt="EcoFood" height="40" />
          </Link>
          <div className="d-flex align-items-center">
            <span className="text-white me-3">Usuario</span>
            <div className="dropdown">
              <button
                className="btn btn-light dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                <i className="bi bi-person-fill"></i>
              </button>
              <ul className="dropdown-menu dropdown-menu-end">
                <li>
                  <Link className="dropdown-item" to="/perfil">
                    <i className="bi bi-pencil-square me-2"></i>Editar Perfil
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <button className="dropdown-item text-danger">
                    <i className="bi bi-box-arrow-right me-2"></i>Cerrar Sesión
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    );
  };
export default Header;
