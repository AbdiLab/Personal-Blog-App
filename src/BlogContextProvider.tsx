import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

type ContextType = {
  isDarkMode: boolean;
  thoggleTheme: () => void;
};

const Context = createContext<ContextType | null>(null);

export function useBlogContext() {
  const value = useContext(Context);

  if (value == null) {
    throw new Error("must use within context");
  }

  return value;
}

export default function BlogContextProvider({ children }: { children: ReactNode }) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function thoggleTheme() {
    setIsDarkMode((v) => !v);
  }
  useEffect(() => {
    isDarkMode
      ? document.body.classList.add("darkMode")
      : document.body.classList.remove("darkMode");
  }, [isDarkMode]);

  return <Context.Provider value={{ isDarkMode, thoggleTheme }}>{children}</Context.Provider>;
}
