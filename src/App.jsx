import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/interfaceA';
import About from './pages/interfaceB';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/interfaceB" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
