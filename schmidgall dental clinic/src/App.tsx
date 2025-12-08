
// Force rebuild
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import DentalTechnology from './components/DentalTechnology';
import Whitening from './components/Whitening';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import CTASection from './components/CTASection';
import BookingForm from './components/BookingForm';

const MainWebsite = () => (
  <div className="font-sans text-gray-900 antialiased">
    <Navbar />
    <main>
      <Hero />
      <Services />
      <DentalTechnology />
      <Whitening />
      <Team />
      <Testimonials />
      <CTASection />
    </main>
    <Footer />
  </div>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainWebsite />} />
        <Route path="/book" element={<BookingForm />} />
      </Routes>
    </Router>
  );
}

export default App;
