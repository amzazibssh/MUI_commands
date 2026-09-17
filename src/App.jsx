import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Notes from './pages/Notes'
import Create from './pages/Create'
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { purple } from '@mui/material/colors';
import { StyledEngineProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: purple[500]
    },  
    secondary: purple
  },
  typography: {
    fontFamily: 'Quicksand',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  }
})  

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Notes />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
        </Switch>
      </Router>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
