import React, {Component} from 'react';
import './Post.css'
class PostComponent extends Component {
    render() {
        let {item, onSelectPost,isBtnOff} = this.props
        return (
            <div className={'postDiv'}>
                <span className={'titlePost'}>{item.id}. {item.title}</span>
                {!isBtnOff &&
                    <button className={'btn'} onClick={() => {onSelectPost(item.id)}}>Select</button>
                }
                <br/>
                <span className={'bodyOfPost'}>{item.body}</span>
            </div>
        );
    }
}

export default PostComponent;