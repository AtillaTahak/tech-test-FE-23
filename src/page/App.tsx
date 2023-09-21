import GlobalStyle from '../styles/GlobalStyle'
import { ThemeProvider } from 'styled-components'
import { theme } from '../styles/theme'

function App() {


  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div className="App">
        <h1>React App</h1>
      </div>
    </ThemeProvider>
  )
}

export default App
