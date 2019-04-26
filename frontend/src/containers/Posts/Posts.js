import React, {Component} from 'react';
import {fetchPosts} from "../../store/actions/postsActions";
import {connect} from "react-redux";
import PostListItem from "../../components/PostListItem/PostListItem";
import Loader from "../../components/UI/Loader/Loader";

class Posts extends Component {
    componentDidMount() {
        this.props.fetchPosts();
    }

    render() {
        return (
            <div>
                <h2 className="mb-4">Posts</h2>

                {this.props.loading && <Loader/>}

                {this.props.posts.map(post => {
                    const published_at = new Date(post.published_at).toLocaleString('ru-Ru');

                    return (
                        <PostListItem
                            key={post._id}
                            id={post._id}
                            image={post.image}
                            title={post.title}
                            published_at={published_at}
                            user={post.user}
                        />
                    )
                })}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    posts: state.posts.posts,
    error: state.posts.state,
    loading: state.posts.loading
});

const mapDispatchToProps = dispatch => ({
    fetchPosts: () => dispatch(fetchPosts())
});

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
