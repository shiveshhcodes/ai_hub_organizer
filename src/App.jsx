import React from 'react';
import Routes from './Routes';
import { AuthProvider } from './contexts/AuthContext';
import { useSmoothScroll } from './hooks/useSmootScroll';

function App() {
  useSmoothScroll();
  
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}

export default App;