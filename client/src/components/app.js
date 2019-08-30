import React from 'react';
import 'assets/css/app.scss';
import logo from 'assets/images/logo.svg';

import ApiTest from 'components/api_test';


const App = () => (
    <div className="app">
        <div className="welcome">
            <img src={logo} className="logo rotate"/>
            <h1>Welcome To React</h1>

            <ApiTest />
        </div>
    </div>
);

export default App;
