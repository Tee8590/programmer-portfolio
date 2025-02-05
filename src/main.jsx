import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "./index.css";
import { HashRouter, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <HashRouter basename={import.meta.env.BASE_URL}>
    <Routes>
      <Route path="*" element={<App />}>
      </Route>
    </Routes>
  </HashRouter>
  // </React.StrictMode>
);

// {
//   <BrowserRouter basename={import.meta.env.BASE_URL}>
//   <Routes>
//     <Route path="*" element={<App />}>
//     </Route>
//   </Routes>
// </BrowserRouter>
// }
