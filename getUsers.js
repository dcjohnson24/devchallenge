get('users');

fn(state => {
    const users = state.data;
  
    // print details of first user
    console.log(users[0])
  
    // return { ...state };
  });