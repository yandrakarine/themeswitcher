import { ThemeProvider } from 'styled-components'
import Header from "./components/Header"
import GlobalStyle from "./styles/GlobalStyle"
import light from './styles/themes/light'

const App = () => (
 
    <ThemeProvider theme={light}>
      <div className="App">
        <GlobalStyle/>
        <Header/>
      </div>
    </ThemeProvider>

)

export default App
