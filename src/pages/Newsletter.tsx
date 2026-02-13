import type React from "react";
import { useRef, useState } from "react";
import { useBlogContext } from "../BlogContextProvider";

const emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/;

export default function Newsletter() {
  const [emailError, setEmailError] = useState(false);
  const [emailSubscribed, setEmailSubscribed] = useState(false);
  const inputEmailRef = useRef<HTMLInputElement>(null);

  const { isDarkMode } = useBlogContext();

  function handleForm(e: React.SyntheticEvent) {
    e.preventDefault();
    setEmailError(false);
    setEmailSubscribed(false);
    if (inputEmailRef === null || inputEmailRef.current == null) return;

    if (!emailRegex.test(inputEmailRef.current.value)) {
      setEmailError(true);
    } else {
      setEmailSubscribed(true);
    }
  }

  return (
    <>
      <main>
        <article className="header-container" style={{ flexDirection: "column" }}>
          <h2 className={`featured-blogs-title text-preset-2 ${isDarkMode && "darkMode"}`}>
            Newsletter
          </h2>
          <p className="description">
            Want to stay updated on my latest articles, coding tutorials, and personal adventures?
            Sign up for my newsletter! It’s a simple way to keep track of new posts and occasional
            coding tips I discover. Just drop your email in the sign-up box, and I’ll send you
            updates whenever there’s something new to share.
          </p>
          <div className={`text-preset-5 subheading   ${isDarkMode && "darkMode"}`}>
            I’d love to have you along for the ride and also hear about your own journey!
          </div>
        </article>
        <article style={{ height: "43vb" }}>
          <form
            className={`form-container  ${emailError && "error"} ${emailSubscribed && "success"} `}
            onSubmit={handleForm}>
            <label className="input-container " htmlFor="email">
              Email Address
              <input
                className={` ${isDarkMode && "darkMode"}`}
                type="text"
                id="email"
                placeholder="email@example.com"
                ref={inputEmailRef}
              />
            </label>
            <button
              type="submit"
              className={`primary-btn text-preset-6  ${isDarkMode && "darkMode"}`}>
              Stay Updated
            </button>

            {emailSubscribed && (
              <div className="hint-text">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="15"
                  fill="none"
                  viewBox="0 0 14 15">
                  <path
                    fill="#008531"
                    d="M7 .469c3.719 0 6.781 3.062 6.781 6.781 0 3.746-3.062 6.781-6.781 6.781A6.78 6.78 0 0 1 .219 7.25C.219 3.531 3.254.469 7 .469ZM7 1.78A5.467 5.467 0 0 0 1.531 7.25 5.45 5.45 0 0 0 7 12.719a5.467 5.467 0 0 0 5.469-5.469c0-3.008-2.461-5.469-5.469-5.469Zm3.828 3.582c.11.11.11.328 0 .465l-4.73 4.676a.315.315 0 0 1-.465 0L3.145 7.988c-.11-.11-.11-.328 0-.465l.628-.601a.315.315 0 0 1 .465 0l1.64 1.64 3.856-3.828c.137-.136.356-.136.465 0l.63.63Z"
                  />
                </svg>
                <div>You’re subscribed! Check your inbox for updates.</div>
              </div>
            )}

            {emailError && (
              <div className="hint-text">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="15"
                  fill="none"
                  viewBox="0 0 14 15">
                  <path
                    fill="#F04438"
                    d="M7 .469c3.719 0 6.781 3.062 6.781 6.781 0 3.746-3.062 6.781-6.781 6.781A6.78 6.78 0 0 1 .219 7.25C.219 3.531 3.254.469 7 .469Zm0 12.25a5.467 5.467 0 0 0 5.469-5.469c0-3.008-2.461-5.469-5.469-5.469A5.467 5.467 0 0 0 1.531 7.25 5.45 5.45 0 0 0 7 12.719Zm0-9.242c.629 0 1.148.52 1.148 1.148 0 .656-.52 1.148-1.148 1.148a1.121 1.121 0 0 1-1.148-1.148c0-.629.492-1.148 1.148-1.148Zm1.531 6.945a.332.332 0 0 1-.328.328H5.797a.316.316 0 0 1-.328-.328v-.656c0-.164.136-.329.328-.329h.328v-1.75h-.328a.316.316 0 0 1-.328-.328v-.656c0-.164.136-.328.328-.328h1.75c.164 0 .328.164.328.328v2.734h.328c.164 0 .328.165.328.329v.656Z"
                  />
                </svg>

                <div>Please enter a valid email address.</div>
              </div>
            )}

            <div className="text-preset-8">Unsubscribe anytime. No spam, I promise 🙂</div>
          </form>
        </article>
      </main>
    </>
  );
}
