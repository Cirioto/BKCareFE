import { createSlice } from "@reduxjs/toolkit";
import en from "../translation/en.json";
import vi from "../translation/vi.json";

// Hàm chuyển đổi object lồng nhau thành object phẳng để React-Intl có thể xử lý (sử dụng cho các file en.json và vi.json)
const flattenObject = (obj, prefix = "") =>
  Object.keys(obj).reduce((acc, key) => {
    const newKey = prefix ? `${prefix}.${key}` : key;
    if (typeof obj[key] === "object") {
      Object.assign(acc, flattenObject(obj[key], newKey));
    } else {
      acc[newKey] = obj[key];
    }
    return acc;
  }, {});

// Khởi tạo state mặc định với ngôn ngữ tiếng Việt
const initialState = {
  lang: "vi",
  translations: flattenObject(vi), // Lưu trữ các chuỗi dịch của ngôn ngữ hiện tại
};

const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    // Hàm thay đổi ngôn ngữ
    setLanguage: (state, action) => {
      state.lang = action.payload;
      // Cập nhật dữ liệu dịch tương ứng
      state.translations = action.payload === "en" ? flattenObject(en) : flattenObject(vi);
    },
  },
});

// Xuất action để các component có thể gọi khi cần thay đổi ngôn ngữ
export const { setLanguage } = languageSlice.actions;
export default languageSlice.reducer;
