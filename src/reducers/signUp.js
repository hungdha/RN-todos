const initialState = {
    email : '',
    phone : '',
    birthday : '',
    password : '',
    avatar : ''
};
const signUp = (state = initialState, action) => {
    switch (action.type) {
      case 'SIGN_UP':
        return Object.assign({}, state, {
            email: action.email,
            phone: action.phone,
            birthday: action.birthday,
            password: action.email,
            avatar : action.avatar
        })
      default:
        return state
    }
  }
  
  export default signUp