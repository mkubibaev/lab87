import {FETCH_POSTS_SUCCESS} from "../actions/actionTypes";

const initialState = {
    posts: [],
    error: null,
    loading: true
};

const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_POSTS_SUCCESS:
            return {...state, posts: action.posts, loading: false};

        default:
            return state;
    }
};

export default postsReducer;
