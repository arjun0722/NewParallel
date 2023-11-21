import { createSlice } from "@reduxjs/toolkit";

const ChatReducers = createSlice({
  name: "chat",
  initialState: [],
  reducers: {
    addChat(state, action) {
      state.push(action.payload);
    },
  },
});
export const { addChat } = ChatReducers.actions;
export default ChatReducers.reducer;
