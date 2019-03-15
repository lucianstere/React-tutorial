import jsonPlaceholder from '../api/jsonPlaceholder';

// eslint-disable-next-line import/prefer-default-export
export const fetchPosts = () => async dispatch => {
        const response = await jsonPlaceholder.get('/posts');

        dispatch({ type: 'FETCH_POSTS', payload: response });
};    
