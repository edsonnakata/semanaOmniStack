import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

/**
 * importar as páginas
 */

import Logon from './pages/Logon';
import Register from './pages/Register';
import Profile from './pages/Profile';
import NewIncident from './pages/NewIncident'

/**
 * Precisa exportar as rotas
 */

export default function Routes() {
  return (
    /**
     * As rotas precisam estar envolto do BrowserRouter
     */
    <BrowserRouter>
      {/**
       * O Switch executa apenas 1 rota por vez
       */}
      <Switch>
       <Route path="/" exact component={Logon} />
       <Route path="/register" component={Register} />
       <Route path="/profile" component={Profile} />
       <Route path="/incidents/new" component={NewIncident}/>
      </Switch>
    </BrowserRouter>
  );
}