import React from 'react';
import Home from './pages/Home';
import { Provider } from 'react-redux';
import store from './core/store';
import { ThemeProvider } from '@material-ui/styles';
import { theme } from 'core/theme';
import ResponsiveDrawer from 'components/ResponsiveDrawer';

const App = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <ResponsiveDrawer>
            <Home />
          </ResponsiveDrawer>
        </ThemeProvider>
      </Provider>
    </div>
  );
};

export default App;
