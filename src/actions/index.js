import jsonPlaceHolder from '../apis/jsonPlaceHolder';

export const fetchPosts = () => async dispatch => {
  const res = await jsonPlaceHolder.get('/posts');
  dispatch({ type: 'FETCH_POSTS', payload: res.data });
};
export const fetchUser = id => async dispatch => {
  const res = await jsonPlaceHolder.get(`/users${id}`);
  dispatch({ type: 'FETCH_USER', payload: res.data });
};
