import React, {Component} from 'react'

import SearchUser from './SearchUser'
import UserList from './UserList'

export default class App extends Component{
    constructor(props) {
        super(props)
        this.state = {
            username: ''
        }
    }

    refreshName = (username) => {
        // 得到的数据更新 状态，使得下传到子组件
        this.setState({username})
    }

    render() {
        return(
            <div className="container">

                <SearchUser refreshName={this.refreshName} />

                <UserList username={this.state.username} />
            </div>
        )
    }
}