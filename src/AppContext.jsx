import { useState } from "react"
import { ThemeContext } from "./context/themecontext"
import ThemeButton from "./components/button/themebutton"
import ThemeDisplay from "./themedisplay"
import "./App.css"

function AppContext() {

  const [theme, setTheme] = useState("light")

  const toggleTheme = () => {
    setTheme(prev => prev === "light" ? "dark" : "light")
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={theme} style={{ padding: "40px" }}>
        <h1>Context Theme Toggle Demo</h1>

        <ThemeDisplay />
        <ThemeButton />

      </div>
    </ThemeContext.Provider>
  )
}

export default AppContext