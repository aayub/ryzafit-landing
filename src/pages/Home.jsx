import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import WaitlistForm from '../components/WaitlistForm';
import SocialLinks from '../components/SocialLinks';
import Footer from '../components/Footer';

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-400 to-blue-500">
      <div className="relative min-h-screen flex items-center justify-center p-4 md:p-8">
        <div className="absolute inset-0 flex items-center justify-center p-8 md:p-16">
          <Hero />
        </div>

        <div className="relative z-10 w-full max-w-md mx-auto landscape:ml-auto landscape:mr-8">
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-6 md:p-8">
            <WaitlistForm />
            <div className="mt-6 pt-6 border-t border-gray-200 space-y-4">
              <div className="flex justify-between items-center text-sm">
                <p className="text-gray-600">Questions about Ryzafit?</p>
                <Link
                  to="/faq"
                  className="font-semibold text-blue-600 hover:text-blue-700"
                >
                  Visit FAQ
                </Link>
              </div>
              <SocialLinks />
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
