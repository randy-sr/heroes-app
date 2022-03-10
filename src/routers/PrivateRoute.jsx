import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../auth/authContext';


export const PrivateRoute = ( { children } ) => {

    const { user } = useContext( AuthContext );

    const { pathname, search } = useLocation();


    // ultimo path en el cual se navego esta guardado en el local storage
    localStorage.setItem('lastPath', pathname + search );


    return user.logged
        ? children
        : <Navigate  to="/login"/>
}
