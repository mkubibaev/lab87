import axios from '../../axios-api';
import {FETCH_DATA_FAILURE, FETCH_DATA_REQUEST, FETCH_POST_SUCCESS, FETCH_POSTS_SUCCESS} from "./actionTypes";

const fetchDataRequest = () => ({type: FETCH_DATA_REQUEST});
const fetchDataFailure = error => ({type: FETCH_DATA_FAILURE, error});

const fetchPostsSuccess = posts => ({type: FETCH_POSTS_SUCCESS, posts});
const fetchPostSuccess = post => ({type: FETCH_POST_SUCCESS, post});

export const fetchPosts = () => {
    return async dispatch => {
        dispatch(fetchDataRequest());

        try {
            const response = await axios.get('/posts');
            dispatch(fetchPostsSuccess(response.data));
        } catch (e) {
            dispatch(fetchDataFailure(e));
        }
    }
};

export const fetchPost = id => {
    return async dispatch => {
        dispatch(fetchDataRequest());

        try {
            const response = await axios.get(`/posts/${id}`);
            dispatch(fetchPostSuccess(response.data));
        } catch (e) {
            dispatch(fetchDataFailure(e));
        }
    }
};


