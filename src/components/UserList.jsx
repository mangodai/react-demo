import React, {Component} from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'

export default class UserList extends Component {

    static PropTypes = {
        username: PropTypes.string.isRequired
    }

    constructor(props) {
        super(props)
        this.state = {
            errorMsg: null,
            initView: true,
            loadingView: false,
            users: null
        }
    }

    // 方法异步化
    async componentWillReceiveProps(nextProps) {
        let {username} = nextProps
        console.log("start get userList , params : " + username)
        const url = `https://api.github.com/search/users?q=${username}`
        this.setState({initView: false, loadingView: true})
        axios.get(url)
            .then(response => {
                const result = response.data

                let users = result.items.map(item => (
                    {
                        html_url: item.html_url,
                        avatar_url: item.avatar_url,
                        login: item.login
                    }
                ))
                this.setState({
                    loadingView: false,
                    users
                })
            })
            .catch(error => {
                this.setState({
                    loadingView: false,
                    errorMsg: true
                })
            })
    }

    render() {
        if (this.state.errorMsg) {
            return <h2>发生了错误：{this.state.errorMsg}</h2>
        } else if (this.state.loadingView) {
            return <h2>loading</h2>
        } else if (this.state.initView) {
            return <h2>请输入关键字: {this.props.username}</h2>
        } else {
            return (
                <div className="row">
                    {
                        this.state.users.map((user) => (
                            <div className="col-md-3">

                                <div className="card" key={user.html_url}>
                                    <a href={user.html_url} target="_blank">
                                        <img src={user.avatar_url} style={{width: '100px'}} alt='user'/>
                                        <p className="card-text">{user.login}</p>
                                    </a>
                                </div>

                            </div>
                        ))
                    }
                </div>
            )
        }
    }
}