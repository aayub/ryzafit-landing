import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Faq from './pages/Faq';
import FaqCategory from './pages/FaqCategory';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/faq/:slug" element={<FaqCategory />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
