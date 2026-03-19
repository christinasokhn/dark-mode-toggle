import { useSelector } from "react-redux"
import ThemeButton from "./components/button/themebutton"
import ThemeDisplay from "./themedisplay"
import "./App.css"

function AppRedux() {

  const theme = useSelector((state) => state.theme.value)

  return (
    <div className={theme} style={{ padding: "40px" }}>
      <h1>Redux Theme Toggle Demo</h1>

      <ThemeDisplay />
      <ThemeButton />

    </div>
  )
}

export default AppRedux