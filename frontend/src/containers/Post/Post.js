import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";
import {fetchPost} from "../../store/actions/postsActions";
import PostItem from "../../components/PostItem/PostItem";
import Comment from "../../components/Comment/Comment";

class Post extends Component {

    componentDidMount() {
        this.props.fetchPost(this.props.match.params.id);
    }

    render() {
        const post = this.props.post;
        const published_at = new Date(post.published_at).toLocaleString('ru-Ru');
        const user = post.user && post.user.fullName; //выдает ошибку при передаче post.user.fullName

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
                    <h3>Comments:</h3>
                    {/*{this.props.comments.map(comment => (*/}
                    {/*    <Comment*/}
                    {/*        key={comment.id}*/}
                    {/*        author={comment.author}*/}
                    {/*        text={comment.text}*/}
                    {/*    />*/}
                    {/*))}*/}
                </div>
            </Fragment>
        )
    }
}

const mapSateToProps = state => ({
    post: state.posts.post,
    error: state.posts.error,
    loading: state.posts.loading
});

const mapDispatchToProps = dispatch => ({
    fetchPost: postId => dispatch(fetchPost(postId))
});

export default connect(mapSateToProps, mapDispatchToProps)(Post);
