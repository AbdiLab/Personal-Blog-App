import { createBrowserRouter, type Params } from "react-router";
import Nav from "./layout/Nav";
import { lazy } from "react";
import { fetchData, fetchDataSingle } from "./api";

const About = lazy(() => import("./pages/About"));
const Newsletter = lazy(() => import("./pages/Newsletter"));
const Home = lazy(() => import("./pages/Home"));
const SingleBlog = lazy(() => import("./pages/SingleBlog"));
const Blog = lazy(() => import("./pages/Blog"));

export const router = createBrowserRouter(
  [
    {
      path: "/",
      Component: Nav,
      children: [
        { path: "/", loader, Component: Home },
        {
          path: "blog",
          children: [
            { index: true, loader, Component: Blog },
            { path: ":singleBlog", loader: singleBlogLoader, Component: SingleBlog },
          ],
        },
        { path: "about", Component: About },
        { path: "newsletter", Component: Newsletter },
      ],
    },
  ],
  { basename: "/Personal-Blog-App" },
);

function loader() {
  const data = fetchData();

  return { promiseData: data };
}

async function singleBlogLoader({ params: { singleBlog } }: { params: Params }) {
  if (singleBlog === undefined) return;
  const data = await fetchDataSingle();

  return data[Number(singleBlog)];
}
