import React from 'react';
import routes from './config/routes';
import {useRoutes} from "react-router-dom";
import LazyLoadRoute from './config/routes/LazyLoadRoute';
import ProtectedRoute from './config/routes/ProtectedRoute';
import DefaultView from './components/DefaultView';

function App() {
  const routing = useRoutes(routes);

  return (
      // <ThemeProvider theme={theme}>
      //     <CssBaseline />
      //     <Grid container direction='column' className={classes.app}>
              <LazyLoadRoute>
                  <ProtectedRoute>
                      <DefaultView>{routing}</DefaultView>
                  </ProtectedRoute>
              </LazyLoadRoute>
          // </Grid>
      // </ThemeProvider>
  );
}

export default App;
