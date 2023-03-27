import { useCallback, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import Header from "./components/Header"
import GlobalStyle from "./styles/GlobalStyle"
import light from './styles/themes/light'
import dark from './styles/themes/dark'

const App = () => {
  const [theme, setTheme] = useState(light)

  const toggleTheme = () => {
    setTheme(prev => prev.title === 'light' ? dark : light )
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
