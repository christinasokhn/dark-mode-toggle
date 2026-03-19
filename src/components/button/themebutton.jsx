import { useDispatch } from "react-redux"
import { toggleTheme } from "../../store/themeSlice"

function ThemeButton() {

  const dispatch = useDispatch()

  return (
    <button onClick={() => dispatch(toggleTheme())}>
      Toggle Theme
    </button>
  )

}

export default ThemeButton