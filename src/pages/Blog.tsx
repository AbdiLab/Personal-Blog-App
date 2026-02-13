import { Await, Link, useLoaderData } from "react-router";
import type { Data } from "./Home";
import dateFormatter from "../utils/utils";
import { useBlogContext } from "../BlogContextProvider";
import { fetchData } from "../api";
import { Suspense } from "react";
import { SkeletonBlogs } from "../Components/SkeletonBlog";

export default function Blog() {
  const { promiseData } = useLoaderData();

  const { isDarkMode } = useBlogContext();
  return (
    <>
      <main>
        <div className="blog-list-container">
          <div className="blog-header">
            <div className="header-container">
              <h2 className={`featured-blogs-title text-preset-2 ${isDarkMode && "darkMode"}`}>
                My Articles
              </h2>
              <div className="header-divider"></div>
            </div>
            <div>
              Below are all my recent blog posts. Click on any title to read the full article.
            </div>
          </div>
          <hr className={`${isDarkMode && "darkMode"}`} />
          <div className="blog-enteries-container">
            <Suspense fallback={<SkeletonBlogs />}>
              <Await resolve={promiseData}>
                {(data: Data[]) => (
                  <>
                    {data.map((article, index) => (
                      <div className="blog-entry-container" key={index}>
                        <div className="blog-title-container">
                          <Link
                            to={index.toString()}
                            className={`blog-title text-preset-5 ${isDarkMode && "darkMode"}`}>
                            {article.title}
                          </Link>
                          <div className="blog-date text-preset-8-italic">
                            {dateFormatter(article.publishedAt)}
                          </div>
                        </div>
                        <div className="blog-date text-preset-8-italic">{article.description}</div>
                      </div>
                    ))}{" "}
                  </>
                )}
              </Await>
            </Suspense>
          </div>
        </div>
      </main>
    </>
  );
}

function loader() {
  const data = fetchData();

  return data;
}

export const blogRoute = {
  Component: Blog,
  loader,
};
