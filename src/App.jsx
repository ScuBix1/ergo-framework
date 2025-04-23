import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Quiz from './pages/Quiz/Quiz';
import QuizRegards from './pages/QuizRegards/QuizRegards';
import Home from './pages/interfaceA';
import About from './pages/interfaceB';
import GlobalTemplate from './templates/GlobalTemplate';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<GlobalTemplate />}>
          <Route path='/' element={<Home />} />
          <Route path='/interfaceB' element={<About />} />
          <Route path='/quiz'>
            <Route index element={<Quiz />} />
            <Route path='regards' element={<QuizRegards />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
