const SEND_MESSAGE = "SEND_MESSAGE";

type DialogType = {
  id: number;
  name: string;
};

type MessageType = {
  id: number;
  textMessage: string;
};

const initialState = {
  dialogs: [
    { id: 1, name: "Alex" },
    { id: 2, name: "Ksy" },
    { id: 3, name: "Liza" },
    { id: 4, name: "John" },
    { id: 5, name: "Victor" },
    { id: 6, name: "Alexis" },
  ] as Array<DialogType>,
  messages: [
    { id: 1, textMessage: "Hi" },
    { id: 2, textMessage: "Hello" },
    { id: 3, textMessage: "You" },
  ] as Array<MessageType>,
};

export type InitialStateType = typeof initialState;

const dialogsReducer = (
  state = initialState,
  action: any
): InitialStateType => {
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

export type SendMessageCreatorActionType = {
  type: typeof SEND_MESSAGE;
  newMessageBody: string;
};

export const sendMessage = (
  newMessageBody: string
): SendMessageCreatorActionType => ({
  type: SEND_MESSAGE,
  newMessageBody,
});

export default dialogsReducer;
