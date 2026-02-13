import { Outlet } from "react-router";
import profileAvatar from "../assets/images/image-avatar.jpg";
import { useState } from "react";
import NavItem, { NavItemMobile } from "../Components/NavItem";
import { useBlogContext } from "../BlogContextProvider";

export default function Nav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isDarkMode, thoggleTheme } = useBlogContext();

  function toggleMobileMenu() {
    setIsMobileMenuOpen((v) => !v);
  }

  return (
    <>
      <nav className={`nav ${isDarkMode && "darkMode"}`}>
        <div className="profile-img">
          <img src={profileAvatar} alt="profile-image-avatar" />
        </div>

        <div className="navbar-links-container text-preset-8">
          <ul className="menu-links">
            <li>
              <NavItem path="/">Home</NavItem>
            </li>
            <li>
              <NavItem path="blog">Blog</NavItem>
            </li>
            <li>
              <NavItem path="about">About</NavItem>
            </li>
            <li>
              <NavItem path="newsletter">Newsletter</NavItem>
            </li>
          </ul>

          {isMobileMenuOpen ? (
            <div className="mobile-menu close" onClick={toggleMobileMenu}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="none"
                viewBox="0 0 20 20">
                <path
                  stroke="#FEFEFE"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M15 5 5 15M5 5l10 10"
                />
              </svg>
            </div>
          ) : (
            <div className="mobile-menu" onClick={toggleMobileMenu}>
              <svg
                className="menu-icon"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="none"
                viewBox="0 0 20 20">
                <path
                  stroke="#34302D"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M2.5 10h15m-15-5h15m-15 10h15"
                />
              </svg>
            </div>
          )}
          <div className={`theme-toggle ${isDarkMode && "darkMode"}`} onClick={thoggleTheme}>
            {isDarkMode ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="none"
                viewBox="0 0 18 18">
                <path
                  stroke="#FEFEFE"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M9 2.055v1.39m0 11.11v1.39M3.444 9H2.056M5.052 5.05l-.983-.982m8.88.982.982-.982m-8.88 8.882-.982.982m8.88-.982.982.982M15.945 9h-1.39m-2.083 0a3.472 3.472 0 1 1-6.944 0 3.472 3.472 0 0 1 6.944 0Z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="none"
                viewBox="0 0 18 18">
                <path
                  stroke="#1C1A19"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M15.913 9.664a5.556 5.556 0 1 1-7.577-7.577 6.945 6.945 0 1 0 7.577 7.577Z"
                />
              </svg>
            )}
          </div>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className={`mobile-menu-links-container ${isDarkMode && "darkMode"}`}>
          <ul className="mobile-menu-links">
            <ul>
              <NavItemMobile path="/">Home</NavItemMobile>
            </ul>
            <hr />
            <ul>
              <NavItemMobile path="blog">Blog</NavItemMobile>
            </ul>
            <hr />

            <ul>
              <NavItemMobile path="about">About</NavItemMobile>
            </ul>
            <hr />

            <ul>
              <NavItemMobile path="newsLetter">Newsletter</NavItemMobile>
            </ul>
          </ul>
        </div>
      )}

      <div className={`container ${isDarkMode && "darkMode"}`}>
        <Outlet />
        <footer>
          <hr className={`${isDarkMode && "darkMode"}`} />

          <div className="footer-content-container">
            <div className="footer-text">Made with ❤️ and ☕️</div>
            <div className="footer-social-links-container">
              <ul className="footer-social-links">
                <li>
                  <a className="footer-icon-container" href="">
                    <svg
                      className={`footer-svg ${isDarkMode && "darkMode"}`}
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="16"
                      fill="none"
                      viewBox="0 0 18 16">
                      <path
                        fill="#4A4846"
                        d="m.399 0 6.6 8.825L.357 16h1.495l5.815-6.282L12.365 16h5.087l-6.971-9.321L16.663 0h-1.495L9.813 5.785 5.486 0H.399Zm2.198 1.101h2.337L15.254 14.9h-2.337L2.597 1.1Z"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a className="footer-icon-container" href="">
                    <svg
                      className={`footer-svg ${isDarkMode && "darkMode"}`}
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="17"
                      fill="none"
                      viewBox="0 0 18 17">
                      <path
                        fill="#4A4846"
                        d="M6.195 13.503c0 .066-.066.1-.165.1-.1.032-.166-.034-.166-.1s.067-.132.166-.132.165.066.165.132Zm-1.024-.165c.033-.066.132-.099.23-.066.1.033.133.1.133.165a.159.159 0 0 1-.198.066c-.1 0-.165-.099-.165-.165Zm1.486-.033c.066-.033.166.033.166.1.033.065-.034.098-.133.131s-.198 0-.198-.066c0-.099.066-.165.165-.165ZM8.805.62c4.592 0 8.325 3.502 8.325 8.06 0 3.668-2.247 6.806-5.55 7.897-.43.099-.595-.166-.595-.397 0-.264.033-1.652.033-2.742 0-.793-.264-1.288-.562-1.553 1.85-.198 3.8-.462 3.8-3.634 0-.925-.33-1.354-.86-1.949.067-.23.364-1.09-.098-2.246-.694-.231-2.28.892-2.28.892-.66-.198-1.354-.264-2.081-.264-.694 0-1.388.066-2.048.264 0 0-1.62-1.09-2.28-.892C4.147 5.21 4.411 6.07 4.51 6.3c-.529.595-.793 1.024-.793 1.95 0 3.171 1.883 3.435 3.733 3.633-.264.232-.462.595-.528 1.124-.496.231-1.685.594-2.412-.694a1.77 1.77 0 0 0-1.288-.859c-.793 0-.034.529-.034.529.53.23.892 1.189.892 1.189.496 1.486 2.809.991 2.809.991v2.048c0 .198-.133.463-.562.397C3.023 15.485.744 12.347.744 8.679c0-4.558 3.502-8.06 8.06-8.06ZM3.948 12.017c.033-.033.1 0 .166.033.066.066.066.165.033.198-.067.033-.133 0-.199-.033-.033-.066-.066-.165 0-.198Zm-.363-.265c.033-.033.066-.033.132 0s.1.066.1.1c-.034.066-.1.066-.166.032-.066-.033-.1-.066-.066-.132Zm1.057 1.19c.066-.066.165-.033.231.033s.066.165.033.198c-.033.066-.132.033-.198-.033-.099-.066-.099-.165-.066-.198Zm-.363-.496c.066-.033.132 0 .198.066.033.066.033.165 0 .198-.066.033-.132 0-.198-.066s-.066-.165 0-.198Z"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a className="footer-icon-container" href="">
                    <svg
                      className={`footer-svg ${isDarkMode && "darkMode"}`}
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="none"
                      viewBox="0 0 16 16">
                      <path
                        fill="#4A4846"
                        d="M3.646 15.25H.476V5.057h3.17V15.25ZM2.044 3.694c-.989 0-1.807-.853-1.807-1.875C.237.83 1.055.012 2.044.012c1.022 0 1.84.818 1.84 1.807 0 1.022-.818 1.875-1.84 1.875ZM12.339 15.25v-4.943c0-1.193-.034-2.693-1.67-2.693-1.637 0-1.875 1.261-1.875 2.59v5.046h-3.17V5.057h3.033v1.398h.034c.443-.784 1.466-1.636 3-1.636 3.205 0 3.818 2.113 3.818 4.84v5.591h-3.17Z"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a className="footer-icon-container" href="">
                    <svg
                      className={`footer-svg ${isDarkMode && "darkMode"}`}
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="16"
                      fill="none"
                      viewBox="0 0 18 16">
                      <path
                        fill="#4A4846"
                        d="M17.423 8.389a.553.553 0 0 1-.224-.048l-4.696-2.098a.547.547 0 0 1 0-.997l4.696-2.09a.549.549 0 0 1 .723.276.548.548 0 0 1-.277.72l-3.579 1.593 3.58 1.6a.546.546 0 0 1-.223 1.044ZM11.022 15.999c-5.163 0-9.678-3.477-10.976-8.455a.547.547 0 0 1 1.059-.275 10.242 10.242 0 0 0 9.917 7.639.547.547 0 1 1 0 1.09ZM9.137 11.467a.547.547 0 0 1-.547-.546V.547a.547.547 0 0 1 1.094 0V10.92a.547.547 0 0 1-.547.546Z"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </footer>
      </div>

      <div className={`background-left-pattern ${isDarkMode && "darkMode"}`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="423"
          height="423"
          fill="none"
          viewBox="0 0 423 423">
          <g clipPath="url(#a)">
            <mask
              id="b"
              width="423"
              height="423"
              x="0"
              y="0"
              maskUnits="userSpaceOnUse"
              style={{ maskType: "luminance" }}>
              <path fill="#fff" d="M423 0H0v423h423V0Z" />
            </mask>
            <g mask="url(#b)">
              <path
                stroke="url(#c)"
                d="M330.075 303.718 237.856 211.5l92.219-92.218 92.218 92.218-92.218 92.218Zm-237.15 0L.707 211.5l92.219-92.218 92.218 92.218-92.219 92.218ZM211.5 422.293l-92.218-92.218 92.218-92.219 92.218 92.219-92.218 92.218Zm0-237.149-92.218-92.219L211.5.707l92.218 92.219-92.218 92.218Z"
              />
            </g>
          </g>
          <defs>
            <linearGradient
              id="c"
              x1="211.5"
              x2="211.5"
              y1="0"
              y2="423"
              gradientUnits="userSpaceOnUse">
              <stop stopColor="#E5E3E1" />
              <stop offset="1" stopColor="#EFEDEB" stopOpacity=".2" />
            </linearGradient>
            <clipPath id="a">
              <path fill="#fff" d="M0 0h423v423H0z" />
            </clipPath>
          </defs>
        </svg>
      </div>

      <div className={`background-right-pattern ${isDarkMode && "darkMode"}`}>
        <svg
          className="pattern-right"
          xmlns="http://www.w3.org/2000/svg"
          width="423"
          height="423"
          fill="none"
          viewBox="0 0 423 423">
          <g clipPath="url(#a)">
            <mask
              id="b"
              width="423"
              height="423"
              x="0"
              y="0"
              maskUnits="userSpaceOnUse"
              style={{ maskType: "luminance" }}>
              <path fill="#fff" d="M423 0H0v423h423V0Z" />
            </mask>
            <g mask="url(#b)">
              <path
                stroke="url(#c)"
                d="M330.075 303.718 237.856 211.5l92.219-92.218 92.218 92.218-92.218 92.218Zm-237.15 0L.707 211.5l92.219-92.218 92.218 92.218-92.219 92.218ZM211.5 422.293l-92.218-92.218 92.218-92.219 92.218 92.219-92.218 92.218Zm0-237.149-92.218-92.219L211.5.707l92.218 92.219-92.218 92.218Z"
              />
            </g>
          </g>
          <defs>
            <linearGradient
              id="c"
              x1="211.5"
              x2="211.5"
              y1="0"
              y2="423"
              gradientUnits="userSpaceOnUse">
              <stop stopColor="#E5E3E1" />
              <stop offset="1" stopColor="#EFEDEB" stopOpacity=".2" />
            </linearGradient>
            <clipPath id="a">
              <path fill="#fff" d="M0 0h423v423H0z" />
            </clipPath>
          </defs>
        </svg>
      </div>
    </>
  );
}
