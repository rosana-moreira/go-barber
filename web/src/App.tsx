import React from 'react';

import GlobalStyle from './styles/global';
import SignUp from './pages/SignUp/index'
import SignIn from './pages/SignIn/index';

const App: React.FC = () => {
  return (
    <>
      <SignIn/>

      <GlobalStyle />
    </>
  );
};

export default App;
