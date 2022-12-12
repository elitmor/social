const ADD_POST = "ADD_POST";
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";

const initialState = {
  posts: [
    { id: 1, message: "Hi, how are you?", likesCount: 10 },
    { id: 2, message: "It's my first post", likesCount: 25 },
    { id: 3, message: "Easy", likesCount: 100 },
  ],
  newPostText: "Enter your message",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      const newPost = {
        id: 4,
        message: state.newPostText,
        likesCount: 0,
      };

      const stateCopy = { ...state };
      stateCopy.posts = [...state.posts];
      stateCopy.posts.push(newPost);
      stateCopy.newPostText = "";
      return stateCopy;
    }
    case UPDATE_NEW_POST_TEXT: {
      const stateCopy = { ...state };
      stateCopy.posts = [...state.posts];
      stateCopy.newPostText = action.newText;
      return stateCopy;
    }
    default:
      return state;
  }
};

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});

export default profileReducer;
