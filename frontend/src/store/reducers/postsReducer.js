import {FETCH_POST_SUCCESS, FETCH_POSTS_SUCCESS} from "../actions/actionTypes";

const initialState = {
    posts: [],
    post: {},
    error: null,
    loading: true
};

const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_POSTS_SUCCESS:
            return {...state, posts: action.posts, loading: false};

        case FETCH_POST_SUCCESS:
            return {...state, post: action.post, loading: false};

        default:
            return state;
    }
};

export default postsReducer;
