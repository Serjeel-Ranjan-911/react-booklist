import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import AuthenticateRoute from './AuthenticateRoute';

import LandingPage from '../pages/Landing';
import DashboardPage from '../pages/Dashboard';
import ProfilePage from '../pages/Profile';
import AddBook from '../pages/AddBook';
import Lists from '../pages/Lists';

function App() {
  const { isAuthenticated } = useAuth0();
  const authedRedirect = (Component) =>
    isAuthenticated ? <Redirect to="/dashboard" /> : <Component />;
  return (
    <>
      <main>
        <Switch>
          <Route path="/" exact>
            {authedRedirect(LandingPage)}
          </Route>
          <AuthenticateRoute path="/dashboard">
            <DashboardPage />
          </AuthenticateRoute>
          <AuthenticateRoute path="/profile">
            <ProfilePage />
          </AuthenticateRoute>
          <AuthenticateRoute path="/addBook">
            <AddBook />
          </AuthenticateRoute>
          <AuthenticateRoute path="/lists">
            <Lists />
          </AuthenticateRoute>
        </Switch>
      </main>
    </>
  );
}

export default App;
