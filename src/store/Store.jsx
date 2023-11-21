import { configureStore } from "@reduxjs/toolkit";

import ChatReducers from "./ChatReducers";

const Store = configureStore({
  reducer: {
    chat: ChatReducers,
  },
});
export default Store;
