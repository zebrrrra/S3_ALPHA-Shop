import React, { useState } from "react";
import Main from "./components/Main/Main";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./style/base.scss";
import "./style/reset.scss";
import "./style/stepControl.scss";
import "./style/dark-mode.scss";
function App() {
  const [theme, setTheme] = useState("dark");
  const handleThemeToggle = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
    document.body.dataset.theme = theme;
  };
  return (
    <div className="App" data-theme={theme}>
      <Header onThemeToggle={handleThemeToggle} />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
