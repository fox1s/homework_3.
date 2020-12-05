import React, {Component} from 'react';
import {PostService} from "../services/PostService";
import PostComponent from "../post/PostComponent";

class AllPostsComponent extends Component {
    PostService = new PostService();
    state = {posts: [], selectedPost: null};

    componentDidMount() {
        this.PostService.getAllPosts().then(value => this.setState({posts: value}))
    }

    onSelectPost =(id)=> {
        this.PostService.getSelectedPost(id).then(post => this.setState({selectedPost:post}))
    }




    render() {
        let {posts, selectedPost} = this.state;
        return (
            <div>
                {
                    posts.map((post, index) => {
                        if (index < 5) {
                            return <PostComponent item={post} key={post.id} onSelectPost = {this.onSelectPost}/>
                        }
                        return false
                    })
                }
                <hr/>
                {
                    selectedPost && <PostComponent item = {selectedPost} isBtnOff = {true}/>
                }
            </div>
        );
    }
}

export default AllPostsComponent;