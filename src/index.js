import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './component/Sidebar';
import Home from './pages/Home';



function App() {
  return (
    <Router>
      <Sidebar />
      <Routes>
  
      </Routes>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
