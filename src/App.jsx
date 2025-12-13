import Hero from './components/Hero';
import WaitlistForm from './components/WaitlistForm';
import SocialLinks from './components/SocialLinks';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-400 to-blue-500">
      {/* Full-width hero with mockup image + overlay card */}
      <div className="relative min-h-screen flex items-center justify-center p-4 md:p-8">
        {/* Background - Mockup Image (centered, large) */}
        <div className="absolute inset-0 flex items-center justify-center p-8 md:p-16">
          <Hero />
        </div>

        {/* Overlay Card - Right side (landscape) / Centered (portrait) */}
        <div className="relative z-10 w-full max-w-md mx-auto landscape:ml-auto landscape:mr-8">
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-6 md:p-8">
            <WaitlistForm />
            <div className="mt-6 pt-6 border-t border-gray-200">
              <SocialLinks />
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
