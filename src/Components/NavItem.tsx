import type { ReactNode } from "react";
import { NavLink } from "react-router";
import { useBlogContext } from "../BlogContextProvider";

type NavItemProps = {
  children: ReactNode;
  path: string;
};

export default function NavItem({ children, path }: NavItemProps) {
  return (
    <NavLink to={path} className={({ isActive }) => `page-ink ${isActive && "active-page"}`}>
      {children}
    </NavLink>
  );
}

export function NavItemMobile({ children, path }: NavItemProps) {
  const { isDarkMode } = useBlogContext();
  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        `page-ink ${isActive && "mobile-active-page "} ${isDarkMode && "darkMode"}`
      }>
      {children}
    </NavLink>
  );
}
