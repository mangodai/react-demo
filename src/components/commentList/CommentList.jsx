import React, {Component} from 'react'
import CommentItem from './comment-item/CommentItem'
import PropTypes from 'prop-types'

export default class CommentList extends Component {
    render() {
        // 数据在props域中
        let comments = this.props.comments
        let display = {
            display: comments.length === 0 ? 'block' : 'none'
        }
        return (
            <div className="col-md-8">
                <div><h3>留言内容<span className="label label-default">{comments.length}</span></h3></div>

                <div className="content-div">
                    <h2 style={display}>一个都没有了，快加一个</h2>
                    {
                        comments.map((comment, index) => {
                            console.log(comment)
                            return <CommentItem comment={comment} key={index} index={index} remove={this.props.remove}/>
                        })
                    }
                </div>
            </div>
        )
    }
}

CommentList.propTypes = {
    comments: PropTypes.array.isRequired,
    remove: PropTypes.func.isRequired
}