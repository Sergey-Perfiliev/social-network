import profileReducer, { addPostActionCreator, deletePost } from "./profile-reducer";


let state = {
    posts: [
        {id: 0, message: 'Hi', likesCount:'0'},
        {id: 1, message: 'My 1st post', likesCount:'1'},
        {id: 2, message: 'My 2nd post', likesCount:'2'},
    ]
}

test('length of post should incremented', () => {
    // test data
    let action = addPostActionCreator("hi girls")
    
    // action
    let newState = profileReducer(state, action)

    // expectation
    expect(newState.posts.length).toBe(4) 
})

test('message of new post should be correct', () => {
    // test data
    let action = addPostActionCreator("hi girls")

    // action
    let newState = profileReducer(state, action)

    // expectation 
    expect(newState.posts[3].message).toBe("hi girls") 
})

test('after deleting length of message should be decrement', () => {
    // test data
    let action = deletePost(1)

    // action
    let newState = profileReducer(state, action)

    // expectation 
    expect(newState.posts.length).toBe(2) 
})

test(`after deleting length of message shouldn't be decrement if id is wrong`, () => {
    // test data
    let action = deletePost(1000)

    // action
    let newState = profileReducer(state, action)

    // expectation 
    expect(newState.posts.length).toBe(3) 
})