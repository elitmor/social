const state = {
  profilePage: {
    posts: [
      { id: 1, message: "Hi, how are you?", likesCount: 10 },
      { id: 2, message: "It's my first post", likesCount: 25 },
      { id: 3, message: "Easy", likesCount: 100 },
    ],
  },
  dialogsPage: {
    dialogs: [
      { id: 1, name: "Alex" },
      { id: 2, name: "Ksy" },
      { id: 3, name: "Liza" },
      { id: 4, name: "John" },
      { id: 5, name: "Victor" },
      { id: 6, name: "Alexis" },
    ],
    messages: [
      { id: 1, textMessage: "Hi" },
      { id: 2, textMessage: "Hello" },
      { id: 3, textMessage: "You" },
    ],
  },
  sidebar: {
    friends: [
      { id: 1, name: "Alex" },
      { id: 2, name: "Ksy" },
      { id: 3, name: "Liza" },
    ],
  },
};

export default state;
