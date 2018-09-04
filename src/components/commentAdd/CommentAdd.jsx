import React, {Component} from 'react'
import PropTypes from 'prop-types'

export default class CommentAdd extends Component {

    constructor(props) {
        super(props)
        this.state = {
            username: '',
            content: ''
        }
    }

    addComment = () => {
        // 获取对象
        let {username, content} = this.state
        // 添加对象
        let comment = {
            username: username,
            content: content
        }
        // 添加一个对象，不需要 {}
        this.props.add(comment)
        // 清空数据
        this.setState({
            username: '',
            content: ''
        })
    }

    changeUsername = (event) => {
        let username = event.target.value
        this.setState({username})
    }

    changeContent = (event) => {
        let content = event.target.value
        this.setState({content})
    }

    render() {
        return (
            <div className="col-md-4">
                <form className="form-horizontal">
                    <div className="form-group">
                        <label>用户名</label>
                        <input type="text" className="form-control" placeholder="用户名"
                               value={this.state.username} onChange={this.changeUsername}/>
                    </div>
                    <div className="form-group">
                        <label>评论内容</label>
                        <textarea className="form-control" rows="6" placeholder="评论内容"
                                  value={this.state.content} onChange={this.changeContent}></textarea>
                    </div>
                            <div className="form-group">
                                <div className="col-sm-offset-2 col-sm-10">
                                    <button type="button" className="btn btn-default pull-right" onClick={this.addComment}>提交
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

// 接受上层组件传来的数据
CommentAdd.propTypes = {
    add: PropTypes.func.isRequired
}