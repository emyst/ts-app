import React from 'react';

import Users from './components/Users';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const App: React.FC = () => {

  return (
      <MuiThemeProvider>
          {/*<div className="App">*/}
              <Users/>
          {/*</div>*/}
      </MuiThemeProvider>
  );
}
export default App;
