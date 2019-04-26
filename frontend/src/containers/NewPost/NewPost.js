import React, {Component} from 'react';
import PostForm from "../../components/PostForm/PostForm";
import {addPost} from "../../store/actions/postsActions";
import {connect} from "react-redux";

class NewPost extends Component {

    render() {
        return <PostForm
            onAdd={this.props.addPost}
        />
    }
}

const mapDispatchToProps = dispatch => ({
    addPost: postData => dispatch(addPost(postData))
});

export default connect(null, mapDispatchToProps)(NewPost);
