import React from 'react';

import './App.css';

// Header / Skills Component を import
import { Header } from './components/Header';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';

function App() {
  return (
    <React.Fragment>
    
      <Header />
      <Skills />
      <Contact />

    </React.Fragment>
  );
}

export default App;