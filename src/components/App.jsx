import React, {Component} from 'react'
import CommentAdd from './commentAdd/CommentAdd'
import CommentList from './commentList/CommentList'

import './app.css'

/**
 * 1.显示数据
 * 2.添加数据
 * 3.删除数据
 */
export default class App extends Component{

    /*
    判断数据被谁使用
    * */
    // 定义变量
    constructor(props) {
        super(props)
        this.state = {
            comments:[]
        }
    }

    // 异步获取数据
    componentDidMount() {
        setTimeout(() => {
            const comments = [{
                username: '张三',
                content: '很好用'
            },{
                username: '李四',
                content: '不好用'
            }]
            this.setState({comments})
        }, 1000)

    }

    // 提供更新的方法
    add = (comment) =>{
        // 获取待更新对象
        let {comments} = this.state
        // 添加数据 不要重新赋值comments对象
        console.log(comment)
        comments.unshift(comment)
        // 更新 {comments} 表示自动匹配 comments: comments
        this.setState({comments})
    }

    // 提供删除方法
    remove = (key) => {
        // 获得对象
        let {comments} = this.state
        // 删除数据
        comments.splice(key, 1)
        // 更新
        this.setState({comments})
    }

    render() {
        return(
            <div className='app'>
                <div className="jumbotron">
                    <h1>Hello, world!</h1>
                    <p>这里是React留言板</p>
                </div>
                <div className="container">
                    <CommentAdd add={this.add} />
                    <CommentList comments={this.state.comments} remove={this.remove}/>
                </div>
            </div>
        )
    }
}