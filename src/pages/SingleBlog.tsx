import { useLoaderData } from "react-router";
import type { Data } from "./Home";
import dateFormatter from "../utils/utils";
import ReactMarkdown from "react-markdown";
import { useBlogContext } from "../BlogContextProvider";
export default function SingleBlog() {
  const article = useLoaderData<Data>();
  const { isDarkMode } = useBlogContext();

  return (
    <>
      <main>
        <div className="blog-list-container">
          <div className="header-container">
            <div className={`blog-title text-preset-1 ${isDarkMode && "darkMode"}`}>
              {article.title}
            </div>
            <div className="blog-date text-preset-8-italic">
              {" "}
              {dateFormatter(article.publishedAt)}
            </div>

            <div className="blog-enteries-container">
              <ReactMarkdown>{article.content}</ReactMarkdown>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
