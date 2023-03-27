import React from 'react';
import logo from './logo.svg';

import Header from './components/Header';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className='app_wrapper'>
      <Header />
      <div className='app_body'>
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
