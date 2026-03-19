import { useSelector } from "react-redux"

function ThemeDisplay() {

  const theme = useSelector((state) => state.theme.value)

  return (
    <h2>Current Theme: {theme}</h2>
  )

}

export default ThemeDisplay