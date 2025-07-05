import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

export const Layout = ({ userType = "cliente" }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // Sidebar items por tipo de usuario
  const sidebarItems = {
    admin: [
      { name: "Dashboard", icon: "speedometer2", path: "/admin" },
      { name: "Usuarios", icon: "people", path: "/admin/users" },
    ],
    cliente: [
      { name: "Pedidos", icon: "cart", path: "/pedidos" },
      { name: "Historial", icon: "clock-history", path: "/historial" },
    ],
  };

  return (
    <div className="d-flex flex-column vh-100">
      {/* Header */}
      <nav className="navbar navbar-dark bg-success">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src="/logo.png" alt="EcoFood" height="40" />
          </Link>
          <div className="d-flex align-items-center">
            <span className="text-white me-3">NombreUsuario</span>
            <div className="dropdown">
              <button
                className="btn btn-light dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                <i className={`bi bi-person-fill`}></i>
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

      {/* Sidebar + Content */}
      <div className="d-flex flex-grow-1">
        {/* Sidebar */}
        <div
          className={`bg-light ${sidebarOpen ? "sidebar-open" : "sidebar-collapsed"}`}
        >
          <ul className="nav flex-column">
            {sidebarItems[userType]?.map((item) => (
              <li key={item.name} className="nav-item">
                <Link className="nav-link" to={item.path}>
                  <i className={`bi bi-${item.icon} me-2`}></i>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Main Content */}
        <main className="flex-grow-1 p-4">
          <Outlet /> {/* Contenido dinámico de rutas */}
        </main>
      </div>
    </div>
  );
};
