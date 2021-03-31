import { getDefaultNormalizer } from '@testing-library/dom';
import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router';
import { userContext } from '../../App';


const PrivateRoute = ({children, ...rest}) => {
  const [loggedInUser, setLoggedInUser] = useContext(userContext);
  setLoggedInUser.email ='sohelrana@gmail.com'
    return (
        <Route
        {...rest}
        render={({ location }) =>
        loggedInUser.email? (
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
    );
};

export default PrivateRoute;