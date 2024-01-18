import { useContext } from "react"
import Navbar from "./components/Navbar/Navbar"
import { ThemeContext } from "./context/ThemeProdvider"

const App = () => {
  const { themeMode } = useContext(ThemeContext);

  return (
    <main className={`wrapper ${themeMode}`}>
      <Navbar />
    </main>
  )
}

export default App