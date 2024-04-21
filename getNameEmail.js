get('comments');

fn(state => {
    const comments = state.data
    let id = 1;
    // Find comments from post ID 1
    const firstPost = comments.filter(item => {
        return item.postId == id;
    })

    // Extract Name and Email
    let names = firstPost.map(item => item.name)
    let emails = firstPost.map(item => item.email)

    console.log(`The names of comments of postId ${id} are ${names}`)
    console.log(`The emails of comments of postId ${id} are ${emails}`)

    return comments;
})