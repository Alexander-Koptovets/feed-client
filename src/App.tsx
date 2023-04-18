import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import { Layout } from "./components/Layout";
import { HomePage } from "./pages/HomePage";
import { AuthPage } from "./pages/AuthPage";
import { CreatePostPage } from "./pages/CreatePostPage";

import './App.css';

function App() {
  return (
    <div className='App'>
      <Routes>
          <Route path='/' element={<Layout />}>
              <Route index path='/' element={<HomePage />} />
              <Route path='/auth' element={<AuthPage />} />
              <Route path='/posts' element={<CreatePostPage />} />
          </Route>
      </Routes>
    </div>
  );
}

export default App;
