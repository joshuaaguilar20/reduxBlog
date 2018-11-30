import _ from 'lodash';
import jsonPlaceholder from '../apis/jsonPlaceholder';




//when we call this we only call fetch post and users. 
export const fetchPostandUsers = () => async (dispatch, getState) => {
  console.log('about to fetch');
  await dispatch(fetchPost());
  //get state holds all the redux state 

  _.chain(getState().posts)
    .map('userId')
    .uniq()
    .forEach(id => dispatch(fetchUser(id)))
    .value()
};

export const fetchPost = () => async dispatch => {
  const response = await jsonPlaceholder.get('/posts')
  dispatch({ type: 'FETCH_POST', payload: response.data })
}

export const fetchUser = (userId) => async dispatch => {
  const response = await jsonPlaceholder.get(`users/${userId}`)
  dispatch({ type: 'FETCH_USER', payload: response.data })
}


