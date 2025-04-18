import './App.css';
import Footer from './components/Layouts/Footer';
import Navbar from './components/Layouts/Navbar';
import LandingWrapper from './components/Pages/LandingPage/LandingWrapper';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<LandingWrapper />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
