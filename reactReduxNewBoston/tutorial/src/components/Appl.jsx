import React from 'react';
import UserList from '../containers/user-list'
import UserDetail from '../containers/user-detail'

const Appl = () => (
    <div>
        <h2>User name List:</h2>
        <UserList/>
        <hr/>
        <h2>User Details:</h2>
        <UserDetail/>
    </div>
);

export default Appl;