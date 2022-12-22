/**
 * Componente que va acontener un formulario para auntenticacion de usuarios
 */

import React, { useState } from 'react';

const LoginForm = () => {

    const initialCredentials = [
        {
            users: '',
            password: ''
        }
    ];

    const [credentials, setCredentials] = useState(initialCredentials);

    return (
        <div>
            
        </div>
    );
}

export default LoginForm;
