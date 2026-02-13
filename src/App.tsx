import "./styles.css";
import { router } from "./router";
import { RouterProvider } from "react-router/dom";
import BlogContextProvider from "./BlogContextProvider";
export default function App() {
  return (
    <BlogContextProvider>
      <RouterProvider router={router} />;
    </BlogContextProvider>
  );
}
