import React, {Component} from 'react'
import PubSub from 'pubsub-js'

export default class SearchUser extends Component{

    searchClick = () => {
        // 接受数据
        let username = this.username.value
        // 推送消息
        if (username && username.length > 0) {
            PubSub.publish("search", username)
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