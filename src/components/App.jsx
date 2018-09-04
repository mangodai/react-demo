import React, {Component} from 'react'

import SearchUser from './SearchUser'
import UserList from './UserList'

export default class App extends Component{

    render() {
        return(
            <div className="container">

                <SearchUser />

                <UserList />
            </div>
        )
    }
}