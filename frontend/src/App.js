import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom'
import Register from './components/Register';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import ChildToParent from './components/ChildToParent';
import { useState } from 'react';

function App() {
  const [parentValue, setParentValue] = useState(null);
  console.log(parentValue, '- parentValue here inside app.js file')
  function handleChildChange(childValue) {
    setParentValue(childValue);
  }

  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Login registerUser={parentValue} />} />
        <Route exact path='/Register' element={<Register deepak={handleChildChange} />} />
        <Route exact path='/dashboard' element={<Dashboard registerUser={parentValue} deepak={handleChildChange} />} />
        <Route exact path='/childToParent' element={<ChildToParent onChange={handleChildChange} />} />
      </Routes>

    </div>
  );
}

export default App;
