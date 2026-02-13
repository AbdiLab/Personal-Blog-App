import workingSpaceImg from "../assets/images/image-workspace-large.jpg";
import { useBlogContext } from "../BlogContextProvider";
import SocialLinks from "../Components/SocialLinks";

export default function About() {
  const { isDarkMode } = useBlogContext();
  return (
    <>
      <main>
        <article className="content">
          <div className="header">
            <h2 className={`greeting text-preset-2 ${isDarkMode && "darkMode"}`}>About Me</h2>
          </div>
          <div className="description">
            <p>
              Hi, I’m Paulina! Ever since I can remember, I’ve had a passion for creativity and
              problem-solving. That’s what led me to the world of front-end web development. There’s
              something magical about seeing an idea come to life in the browser—whether it’s a
              simple layout experiment or a complex interface for a bigger project.
            </p>
            <p>
              When I’m not coding, I love getting lost in a good book. My taste is pretty eclectic:
              I’ll happily read everything from fantasy novels to biographies of tech pioneers.
              Reading helps me unwind and often sparks new ideas for my coding projects.
            </p>
            <p>
              Another big passion of mine is the great outdoors. Hiking allows me to disconnect from
              the digital world and reconnect with nature. I love challenging hikes with rewarding
              views at the top. And if I’m not on the trails, you might catch me rock climbing. The
              combination of mental focus and physical endurance is a perfect parallel to tackling
              tough coding challenges!
            </p>
            <p>Some of my favorite books:</p>
            <ul className="un-order-list">
              <li>
                <q className="text-preset-7-semibold">The Pragmatic Programmer</q> by Andrew Hunt
                and David Thomas (for helpful insights into software development)
              </li>
              <li>
                <q className="text-preset-7-semibold">The Pragmatic Programmer</q> by Andrew Hunt
                and David Thomas (for helpful insights into software development)
              </li>
              <li>
                <q className="text-preset-7-semibold">The Pragmatic Programmer</q> by Andrew Hunt
                and David Thomas (for helpful insights into software development)
              </li>
            </ul>
            <p>
              I absolutely love my workspace as a place that inspires me to do my best work, so I
              thought I’d share it with you:
            </p>
          </div>
          <img src={workingSpaceImg} className="workspace-img" alt="image-workspace" />
          <p>
            I hope this blog not only documents my growth but also helps others see that coding can
            be for everyone. Thanks for joining me on this journey!
          </p>
        </article>
        <article className="follow-section">
          <h3 className={`follow-text text-preset-4 ${isDarkMode && "darkMode"}`}>Follow Me</h3>
          <SocialLinks />
        </article>
      </main>
    </>
  );
}
