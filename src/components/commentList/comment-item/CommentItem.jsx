import React, {Component} from 'react'
import PropTypes from 'prop-types'

export default class CommentItem extends Component{
    removeComment = () => {
        // 得到index
        let {index} = this.props
        // 删除
        this.props.remove(index)
    }
    render() {
        const float = {
            float: 'right'
        }
        const {comment} = this.props
        return(
            <div className="panel panel-success">
                <div className="panel-heading">
                    <h3 className="panel-title">{comment.username}</h3>
                    <button className="btn btn-danger pull-right" style={float} onClick={this.removeComment}>删除</button>
                </div>
                <div className="panel-body">
                    {comment.content}
                </div>
            </div>
        )
    }
}

CommentItem.propTypes = {
    comment: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
    remove: PropTypes.func.isRequired
}