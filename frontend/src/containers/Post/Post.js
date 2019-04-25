import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";
import {fetchPost} from "../../store/actions/postsActions";
import PostItem from "../../components/PostItem/PostItem";
import Comment from "../../components/Comment/Comment";
import {fetchComments} from "../../store/actions/commentsActions";

class Post extends Component {

    async componentDidMount() {
        await this.props.fetchPost(this.props.match.params.id);
        this.props.fetchComments(this.props.match.params.id);
    }

    render() {
        const post = this.props.post;
        const published_at = new Date(post.published_at).toLocaleString('ru-Ru');
        const user = post.user && post.user.fullName; //выдает ошибку при передаче post.user.fullName (без map)

        return (
            <Fragment>
                <PostItem
                    title={post.title}
                    image={post.image}
                    description={post.description}
                    user={user}
                    published_at={published_at}
                />

                <div className="comments mb-5">
                    <h4>Comments:</h4>
                    {this.props.comments.map(comment => (
                        <Comment
                            key={comment._id}
                            user={comment.user.fullName}
                            text={comment.text}
                        />
                    ))}
                </div>
            </Fragment>
        )
    }
}

const mapSateToProps = state => ({
    post: state.posts.post,
    postError: state.posts.error,
    loadingPost: state.posts.loading,

    comments: state.comments.comments,
    commentError: state.comments.error,
    loadingComments: state.comments.loading
});

const mapDispatchToProps = dispatch => ({
    fetchPost: postId => dispatch(fetchPost(postId)),
    fetchComments: postId => dispatch(fetchComments(postId))
});

export default connect(mapSateToProps, mapDispatchToProps)(Post);
