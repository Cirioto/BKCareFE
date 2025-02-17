import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { Provider } from "react-redux";
import { store } from "./redux/store"; // Đảm bảo đúng đường dẫn

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // Bọc toàn bộ ứng dụng với Redux Provider để có thể sử dụng Redux store
  <Provider store={store}>
    <App />
  </Provider>
);
