import { Await, Link, useLoaderData } from "react-router";
import dateFormatter from "../utils/utils";
import { useBlogContext } from "../BlogContextProvider";
import SocialLinks from "../Components/SocialLinks";
import { Suspense } from "react";
import SkeletonBlog from "../Components/SkeletonBlog";

export type Data = {
  title: string;
  slug: string;
  publishedAt: string;
  description: string;
  content: string;
};

export default function Home() {
  const { promiseData } = useLoaderData();

  const { isDarkMode } = useBlogContext();

  return (
    <>
      <main>
        <article className="intro-article">
          <div className="content">
            <h2 className={`text-preset-2 greeting ${isDarkMode && "darkMode"}`}>
              Hi, I’m Paulina 👋
            </h2>
            <p>
              I’m on a journey to become a front-end web developer. I love building little projects,
              trying out new coding techniques, and sharing what I learn along the way. When I’m not
              at my desk, you’ll find me reading, hiking through the mountains, or challenging
              myself on rock-climbing walls.
              <br />
              <br />I started this blog to document my progress, keep myself accountable, and
              hopefully inspire anyone else who’s learning to code. Welcome to my corner of the
              internet, and thanks for stopping by!
            </p>
          </div>

          <SocialLinks />
        </article>

        <hr className={`${isDarkMode && "darkMode"}`} />
        <article className="latest-article">
          <div className="header-container">
            <h2 className={`blogs-title text-preset-2 ${isDarkMode && "darkMode"} `}>
              Latest Articles
            </h2>
            <div className="header-divider"></div>
          </div>

          <Suspense fallback={<SkeletonBlog />}>
            <Await resolve={promiseData}>
              {(data: Data[]) => (
                <>
                  {data.map((article, index) => (
                    <div key={index} className="blog-enteries-container">
                      <div className="blog-entry-container">
                        <div className="blog-title-container">
                          <Link
                            className={`blog-title ${isDarkMode && "darkMode"} text-preset-5`}
                            to={`./blog/${index.toString()}`}>
                            {article.title}
                          </Link>
                          <div className="blog-date text-preset-8-italic">
                            {dateFormatter(article.publishedAt)}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </>
              )}
            </Await>
          </Suspense>
        </article>
        <Link
          to={"blog"}
          className={`text-preset-6 view-all-blog-container ${isDarkMode && "darkMode"}`}>
          View all articles
        </Link>
      </main>
    </>
  );
}
