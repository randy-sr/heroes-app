import React, { useContext } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../auth/authContext';
import { types } from '../../types/types';

export const Navbar = () => {

    const navigate = useNavigate();

    // el contexto que quiero usar es AuthContext para eso uso el hook useContext
    // de ahi saco la variable user que es un valor de mi AuthContext.Provider que  es padre de toda la app
    const { user, dispatch } = useContext( AuthContext );

    const handlelogout = () => {

        dispatch( {type: types.logout} );

        navigate('/login', { 
            replace: true
        } );
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Asociaciones
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        className={ ( {isActive} ) => 'nav-item nav-link ' + ( isActive ? 'active' : '' )} 
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                        className={ ( {isActive} ) => 'nav-item nav-link ' + ( isActive ? 'active' : '' )} 
                        to="/dc"
                    >
                        DC
                    </NavLink>

                    <NavLink 
                        className={ ( {isActive} ) => 'nav-item nav-link ' + ( isActive ? 'active' : '' )} 
                        to="/search"
                    >
                        Search
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">

                    <span className="nav-item nav-link text-info">
                        { user.name }
                    </span>

                    <button 
                        className="nav-item nav-link btn" 
                        onClick= { handlelogout }
                    >
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}