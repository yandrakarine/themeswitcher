import { ThemeProvider } from 'styled-components'
import Header from "./components/Header"
import GlobalStyle from "./styles/GlobalStyle"
import light from './styles/themes/light'
import dark from './styles/themes/dark'
import usePersistedState from './utils/usePersistedState'
import { DefaultTheme } from 'styled-components'

const App = () => {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light)

  const toggleTheme = () => {
    setTheme((prev: { title: string })  => prev.title === 'light' ? dark : light )
  }

    return(
      <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyle/>
        <Header toggleTheme={toggleTheme}/>
      </div>
    </ThemeProvider>
    )
  }

export default App
