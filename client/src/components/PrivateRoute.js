// PrivateRoute.js
import React,{useNavigate} from 'react';
import { Route } from 'react-router-dom';
import { useAuth } from './AuthContext';

const PrivateRoute = ({ component: Component, userType, ...rest }) => {
  const { user } = useAuth();
  const navigate = useNavigate();

  return (
    <Route
      {...rest}
      render={(props) => {
        if (user && user.userType === userType) {
          return <Component {...props} />;
        } else if (!user) {
          // User is not logged in, navigate to the login page
          navigate('/login');
          return null;
        } else {
          // User is logged in but not the correct user type, you can handle this as needed
          return <div>Unauthorized Access</div>;
        }
      }}
    />
  );
};

export default PrivateRoute;
