// src/pages/Home.jsx
import React from 'react'
import CerrarSesion from '../components/CerrarSesion' 

export default function Home() {
return (
  <div className="text-center p-5 bg-light">
    <h1>Bienvenido a EcoFood</h1>
    <p className="lead">Alimentos saludables para todos</p>
    <div className="d-flex justify-content-center gap-3 mt-4">
      <a href="/login" className="btn btn-outline-primary">Iniciar Sesión</a>
      <a href="/register" className="btn btn-primary">Registrarse</a>
    </div>
  </div>
);

}