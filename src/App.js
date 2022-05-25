import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Heading from './components/Heading';
import { Route, Routes } from 'react-router-dom';
import Content from './components/Content';
import UserDetails from './components/users/UserDetails';

function App() {
  return (
    <div className="App">
    <Heading />
    <Routes>
        <Route path='/' element={<Content />} />
        <Route path='/details/:username' element={<UserDetails />} />
        <Route
          path='*'
          element={
            <main style={{ padding: '1rem' }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
