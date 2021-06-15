import produce from 'immer';
import createReducer from './reducerUtils'
const initialState = {
  user: {
    name: ' ',
    age: ' ',
    city: ' ',
    mail: ' ',
    tel: ' '
  },
}
const users = {
  setName(state, action) {
    state.user.name = action.payload;
  },
  setAge(state, action) {
    state.user.age = action.payload;
  },
  setCity(state, action) {
    state.user.city = action.payload;
  },
 
  setEmail(state, action) {
    state.user.email = action.payload;
  },
  setTel(state, action) {
    state.user.tel = action.payload;
  },
  addUser(state, action) {
    let newUsers = [...state.users, action.payload]
    state.users = newUsers
  },
  
  setMyDetails(state, action) {
    state.users = action.payload;
},
  setAllUsers(state, action) {
    state.users = action.payload;},
};

export default produce((state, action) => createReducer(state, action, users), initialState);
