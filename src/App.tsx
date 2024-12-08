import { useEffect } from "react";
import "./App.css";
import ScrapTechStackForm from "./container/scrap-tech-stack";

function App() {
  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove("light", "dark");

    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
      .matches
      ? "dark"
      : "light";

    root.classList.add(systemTheme);
  }, []);
  return (
    <div className="w-full">
      <div className="flex flex-col gap-2">
        <ScrapTechStackForm />
      </div>
    </div>
  );
}

export default App;
