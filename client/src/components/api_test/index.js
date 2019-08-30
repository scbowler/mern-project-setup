import React, { Component } from 'react';
import axios from 'axios';

class ApiTest extends Component {
    async componentDidMount(){
        const resp = await axios.post('/api/test', {name: 'Jim Bob', email: 'James@example.com'});

        console.log('Server Response:', resp);
    }

    render(){
        return (
            <div>
                <h1>API TEST</h1>
            </div>
        );
    }
}

export default ApiTest;
