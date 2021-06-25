import React from 'react';

import GlobalStyle from './styles/global';
import SignUp from './pages/SignUp/index'
import SignIn from './pages/SignIn/index';
import {AuthProvider} from'./hooks/AuthContext';
const App: React.FC = () => {
  return (
    <>
    <AuthProvider>
      <SignIn/>
    </AuthProvider>
      <GlobalStyle />
    </>
  );
};

export default App;
