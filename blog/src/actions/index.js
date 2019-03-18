import _ from 'lodash';
import jsonPlaceholder from '../api/jsonPlaceholder';

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
        // eslint-disable-next-line no-use-before-define
        await dispatch(fetchPosts());
        
        // const userIds = _.uniq(_.map(getState().posts, 'userId'));
        // userIds.forEach(id => dispatch(fetchUser(id)));

        _.chain(getState().posts)
                .map('userId')
                .uniq()
                // eslint-disable-next-line no-use-before-define
                .forEach(id => dispatch(fetchUser(id)))
                .value();
};
// eslint-disable-next-line import/prefer-default-export
export const fetchPosts = () => async dispatch => {
        const response = await jsonPlaceholder.get('/posts');

        dispatch({ type: 'FETCH_POSTS', payload: response.data });
};    

export const fetchUser = id => async dispatch => {
        const response = await jsonPlaceholder.get(`/users/${ id }`);

        dispatch({ type: 'FETCH_USER', payload: response.data });
};

// const _fetchUser = _.memoize( async (id, dispatch) => {
//         const response = await jsonPlaceholder.get(`/users/${ id }`);

//         dispatch({ type: 'FETCH_USER', payload: response.data });
// });

// export const fetchUser = id => dispatch => _fetchUser(id, dispatch);