import React from 'react';
import Home from './pages/Home';
import { Provider } from 'react-redux';
import store from './core/store';
import Navbar from 'components/Navbar';
import { ThemeProvider } from '@material-ui/styles';
import { theme } from 'core/theme';

const App = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Navbar />
          <Home />
        </ThemeProvider>
      </Provider>
    </div>
  );
};

export default App;
