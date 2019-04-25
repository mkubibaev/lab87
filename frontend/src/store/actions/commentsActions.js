import axios from '../../axios-api';
import {FETCH_COMMENTS_SUCCESS, FETCH_DATA_FAILURE, FETCH_DATA_REQUEST} from "./actionTypes";

const fetchDataRequest = () => ({type: FETCH_DATA_REQUEST});
const fetchDataFailure = error => ({type: FETCH_DATA_FAILURE, error});

const fetchCommentsSuccess = comments => ({type: FETCH_COMMENTS_SUCCESS, comments});

export const fetchComments = postId => {
    return async dispatch => {
        dispatch(fetchDataRequest());
        try {
            const response = await axios.get(`/comments?post=${postId}`);
            dispatch(fetchCommentsSuccess(response.data));
        } catch (e) {
            dispatch(fetchDataFailure(e))
        }
    };
};
