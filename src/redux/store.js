import { configureStore } from "@reduxjs/toolkit";
import languageReducer from "../redux/languageSlice";

// Tạo Redux store và tích hợp reducer quản lý ngôn ngữ
export const store = configureStore({
  reducer: {
    language: languageReducer, // Reducer này chịu trách nhiệm thay đổi ngôn ngữ
  },
});
