/**
 * ==============================
 * Página principal do aplicativo
 * ==============================
 */

  /**
  * Não existe herança de estilos no react native;
  * cada elemento precisa do seu próprio estilo
  */
import React from 'react';

/**
 * Import das rotas
 */

 import Routes from './src/routes';

export default function App() {
  return (
    <Routes/>
  );
}
