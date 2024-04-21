get('posts');


// Filter posts based on userId
fn(state => {
    const posts = state.data;
    let filterByUserId = function(userId) {
        return posts.filter(post => post.userId == userId);
    }
    return { ...state, filterByUserId };
});

// Filter posts based on userId == 1
fn(state => {
    const { filterByUserId } = state;
    const firstUserPosts = filterByUserId(1);
    return {...state, firstUserPosts }
});
