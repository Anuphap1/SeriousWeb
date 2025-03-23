import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom"; // แก้เป็น 'react-router-dom'
import Music from "./music.jsx";
import About from "./about.jsx";
// สร้าง router ด้วย createBrowserRouter และกำหนด route ของเรา
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // ใช้ App แทน Root
  },
  {
    path: "/Music",
    element: <Music />, // ใช้ App แทน Root
  },
  {
    path: "/About",
    element: <About />, // ใช้ App แทน Root
  },
]);

// กำหนด root เป็น element ที่มี id "root"
const root = document.getElementById("root");

createRoot(root).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
