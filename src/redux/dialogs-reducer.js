const SEND_MESSAGE = "SEND_MESSAGE";

const initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      const body = action.newMessageBody;
      return {
        ...state,
        messages: [...state.messages, { id: 4, textMessage: body }],
      };

    default:
      return state;
  }
};

export const sendMessage = (newMessageBody) => ({
  type: SEND_MESSAGE,
  newMessageBody,
});

export default dialogsReducer;
