import jsonPlaceholder from '../apis/jsonPlaceholder'

export const fetchPosts = () => {
    return function(dispatch) {
        const response = jsonPlaceholder.get('/posts');
        
        dispatch({
            type: 'FETCH_POSTS',
            payload: response
        });
    }
};