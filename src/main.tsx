//###########>>>>>>>>>>> For App.tsx
// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import "./index.css";
// import App from "./App.tsx";
// import { BrowserRouter } from "react-router";

// createRoot(document.getElementById("root")!).render(
//   <StrictMode>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </StrictMode>
// );

//###########>>>>>>>>>>> For AppV2.tsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./AppV2.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
      <App />
  </StrictMode>
);
