import profileReducer, { actions } from "./profile-reducer";

const state = {
  posts: [
    { id: 1, message: "Hi, how are you?", likesCount: 10 },
    { id: 2, message: "It's my first post", likesCount: 25 },
    { id: 3, message: "Easy", likesCount: 100 },
  ],
  profile: null,
  status: "",
};

it("length of posts should be incremented", () => {
  const action = actions.addPost("new post");
  const newState = profileReducer(state, action);
  expect(newState.posts.length).toBe(4);
});

it("message of new post should be correct", () => {
  const action = actions.addPost("new post");
  const newState = profileReducer(state, action);
  expect(newState.posts[3].message).toBe("new post");
});

it("after deleting length of messages should be decrement", () => {
  const action = actions.deletePost(1);
  const newState = profileReducer(state, action);
  expect(newState.posts.length).toBe(2);
});

it(`after deleting length shouldn't be decrement if id is incorrect`, () => {
  const action = actions.deletePost(1000);
  const newState = profileReducer(state, action);
  expect(newState.posts.length).toBe(3);
});
