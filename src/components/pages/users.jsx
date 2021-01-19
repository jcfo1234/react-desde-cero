import React, { Component } from 'react';
import axios from 'axios';
import UsersGrid from '../organisms/usersgrid';

class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
    }

    /*
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users', {method: 'GET'})
        .then( response => response.json() )
        .then( parsedResponse => {
            this.setState({users: parsedResponse})
        });
    }
    */

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            this.setState({
                users: response.data
            })
        })
    }

    render() {
        const {users} = this.state
        return <UsersGrid users={users} />;
    }
}

export default Users;