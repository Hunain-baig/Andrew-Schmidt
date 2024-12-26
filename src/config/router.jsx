import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContent from "../views/Main";
import Post from "../views/Post";
import Work from "../views/Work";
import About from "../views/About";

const router = createBrowserRouter([
  { path: "/", element: <MainContent /> },
  { path: "/about", element: <About /> },
  { path: "/post", element: <Post /> },
  { path: "/work", element: <Work /> },
]);

export default function Router(){
    return <RouterProvider router={router}/>
}