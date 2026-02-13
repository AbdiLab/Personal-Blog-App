const placeholders = Array.from({ length: 8 });

export default function SkeletonBlog() {
  return (
    <>
      {placeholders.map((_, index) => {
        return (
          <div className="blog-entry-container" key={index}>
            <div className="blog-title-container">
              <div className={`blog-title  text-preset-5`}>
                <div className="skeleton"></div>
              </div>
              <div className="blog-date text-preset-8-italic">
                <div className="skeleton"></div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export function SkeletonBlogs() {
  return (
    <>
      {placeholders.map((_, index) => {
        return (
          <div className="blog-entry-container" key={index}>
            <div className="blog-title-container">
              <div className={`blog-title text-preset-5 `}>
                <div className="skeleton"></div>
              </div>
              <div className="blog-date text-preset-8-italic">
                <div className="skeleton"></div>
              </div>
            </div>
            <div className="blog-date text-preset-8-italic">
              <div className="skeleton"></div>
            </div>
          </div>
        );
      })}
    </>
  );
}
