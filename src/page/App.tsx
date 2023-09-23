import GlobalStyle from "../styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { theme } from "../styles/theme";
import { Header, Body } from "../components/organisms";
import { Container } from "./app.styled";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>
        <Header />
        <Body />
      </Container>
    </ThemeProvider>
  );
}

export default App;
