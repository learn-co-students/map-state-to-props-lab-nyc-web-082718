export default function manageUsers(state = {
  users: [],
}, action){
  switch (action.type) {
    case 'ADD_USER':
      console.log('adding ', action.user);
      return {
        ...state,
        users: [...state.users, action.user]
      }

    default:
      return state;
  }
};
//Connect the Users component similar to how it is connected in UserInput.

// Write a function in Users.js, but outside of the Users class called mapStateToProps. mapStateToProps accepts one argument, state, the current version of your store's state. Use state to access the array of users. Your mapStateToProps function should return an object with keys. Each key will become a prop in your component, allowing you to assign values based on the provided state.

// The Users component should display the username of a user submitted to the store. To pass the final test, it should also display a total count of current users. Try to use mapStateToProps to solve both, returning two keys, one for users and one for the userCount.
