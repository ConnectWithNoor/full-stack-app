import './App.scss';
import '@fortawesome/fontawesome-free/js/all';

import React, { FC } from 'react';
import { Navigate, Routes, Route, NavLink } from 'react-router-dom';
import Dashboard from './Dashboard';

const App: FC = () => {
  return (
    <div className="App">
      <header>
        <NavLink to="/" className="logo">
          Luug.gg
        </NavLink>

        <NavLink to="/career">
          <i className="fas fa-graduation-cap" /> Career
        </NavLink>

        <NavLink to="/cooking">
          <i className="fas fa-utensils" /> Cooking
        </NavLink>

        <NavLink to="/messenger">
          <i className="fab fa-slack" /> Messenger
        </NavLink>
        <NavLink to="/meeting">
          <i className="fas fa-video" /> Meeting
        </NavLink>
      </header>
      <main>
        <Routes>
          <Route path="/career" element={<p>Career Page</p>} />
          <Route path="/cooking" element={<p>Cooking</p>} />
          <Route path="/messenger" element={<p>messenger</p>} />
          <Route path="/meeting" element={<p>meeting</p>} />
          <Route path="/" element={<Dashboard />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
