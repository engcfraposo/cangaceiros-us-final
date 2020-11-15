import React from "react";
import { Redirect, Route } from "react-router-dom";
import { AuthService } from "../services/auth.services";

/**
 * Auth da rota
 * 
 * @param {component} component componente para ser renderizado
 * @param {string} path caminho da rota
 * @param {string} redirectTo página para redirecionar caso não esteja logado
 */
const AuthRoute = ({ component, redirectTo, ...rest }) => {
    const authService = new AuthService();
    const Component = component;

    return (
        <Route
            {...rest}
            render={props =>
                authService.isLogged() ?
                    (
                        <Component {...props} />
                    ) :
                    (
                        <Redirect to={redirectTo} />
                    )
            }
        />
    );
};

export default AuthRoute;