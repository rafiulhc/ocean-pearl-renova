import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router';
import { GlobalContext } from '../../App';

const PrivateRoute = ({ children, ...rest }) => {
    const [loggedInUser, setLoggedInUser] = useContext(GlobalContext)
    return (
        <div>
            <Route
      {...rest}
      render={({ location }) =>
        loggedInUser.email || sessionStorage.getItem('token') ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
        </div>
    );
};

export default PrivateRoute;