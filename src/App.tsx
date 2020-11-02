import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/globalStyles";
import theme from "./styles/theme";

class App extends React.Component {
  render() {
    return (
      <Router>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <div className="App">My new App</div>
        </ThemeProvider>
      </Router>
    );
  }
}

export default App;
