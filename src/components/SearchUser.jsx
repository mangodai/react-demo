import React, {Component} from 'react'
import PropTypes from 'prop-types'

export default class SearchUser extends Component{

    static PropTypes = {
        refreshName: PropTypes.func.isRequired
    }

    searchClick = () => {
        // 接受数据
        let username = this.username.value
        // 上报数据
        if (username && username.length > 0) {
            this.props.refreshName(username)
        }
    }

    // 非限定组件使用参数绑定 ref
    render() {
        return(
            <div className="jumbotron">
                <h1>搜索用户</h1>
                <p>
                    <input type="text" placeholder="输入用户名" ref={(input => this.username = input)} />
                    <a className="btn btn-primary" onClick={this.searchClick} role="button">确定</a>
                </p>
            </div>
        )
    }
}