import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Faq from './pages/Faq';
import FaqCategory from './pages/FaqCategory';
import LegalDocument from './pages/LegalDocument';
import About from './pages/About';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/legal" element={<FaqCategory slugOverride="legal" />} />
        <Route path="/faq/legal" element={<Navigate to="/legal" replace />} />
        <Route path="/faq/termsandconditions" element={<LegalDocument documentKey="terms" />} />
        <Route path="/faq/privacypolicy" element={<LegalDocument documentKey="privacy" />} />
        <Route path="/faq/eula" element={<LegalDocument documentKey="eula" />} />
        <Route path="/faq/:slug" element={<FaqCategory />} />
        <Route path="/termsandconditions" element={<Navigate to="/faq/termsandconditions" replace />} />
        <Route path="/privacypolicy" element={<Navigate to="/faq/privacypolicy" replace />} />
        <Route path="/EULA" element={<Navigate to="/faq/eula" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
