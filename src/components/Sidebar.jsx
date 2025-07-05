import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Sidebar = ({ role }) => {
  const links = {
    admin: [{ path: '/admin/usuarios', label: 'Usuarios' }],
    empresa: [{ path: '/empresa/productos', label: 'Productos' }],
    cliente: [{ path: '/cliente/tienda', label: 'Tienda' }]
  };

  return (
    <aside className="bg-light p-3 border-end vh-100">
      <Nav className="flex-column">
        {links[role]?.map((item, i) => (
          <Nav.Link key={i} as={Link} to={item.path}>
            {item.label}
          </Nav.Link>
        ))}
      </Nav>
    </aside>
  );
};

export default Sidebar;
