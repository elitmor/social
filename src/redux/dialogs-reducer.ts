import { InferActionsTypes } from "./store";

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

const dialogsReducer = (
  state = initialState,
  action: ActionsType
): InitialStateType => {
  switch (action.type) {
    case "SN/DIALOGS/SEND_MESSAGE":
      const body = action.newMessageBody;
      return {
        ...state,
        messages: [...state.messages, { id: 4, textMessage: body }],
      };

    default:
      return state;
  }
};

export const actions = {
  sendMessage: (newMessageBody: string) =>
    ({ type: "SN/DIALOGS/SEND_MESSAGE", newMessageBody } as const),
};

export default dialogsReducer;

export type InitialStateType = typeof initialState;
type ActionsType = InferActionsTypes<typeof actions>;
