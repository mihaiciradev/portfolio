import React from 'react';
import { Route } from 'react-router';
import { Routes } from 'react-router-dom';
import './App.scss';
import Menu from './Components/mutual/Menu/Menu';
import Home from './Components/home/Home';
import Skills from './Components/skills/Skills';
import About from './Components/about/About';

function App() {
  return (
    <div className="App">
      <Menu/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/skills" element={<Skills/>}></Route>
        <Route path="/about" element={<About/>}></Route>
      </Routes>
    </div>
  );
}

{/* <Routes>
<Route path="/" element={<HomePage />}></Route>
<Route path="/tech" element={<SecondPage />}></Route>
<Route
  path="/thanks"
  element={<Thanks text="Thank you for your rating" />}
></Route>
<Route
  path="*"
  element={<Thanks text="Error 404 [not found]. But..." />}
/>
</Routes> */}

export default App;
