import { Link } from 'react-router-dom';
import { FaRocket, FaHome } from 'react-icons/fa';

const NotFound = () => {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center p-4">
      <div className="bg-darker p-8 rounded-2xl shadow-2xl max-w-2xl w-full">
        <div className="text-9xl font-bold text-gradient bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 mb-4">
          404
        </div>
        <h1 className="text-4xl font-bold text-white mb-6">Houston, We Have a Problem!</h1>
        
        <div className="space-y-6 mb-8">
          <p className="text-gray-300 text-lg">
            Looks like you've ventured into the unknown. The page you're looking for might be on a coffee break or exploring the depths of cyberspace.
          </p>
          <div className="animate-bounce">
            <FaRocket className="text-5xl mx-auto text-yellow-400" />
          </div>
          <p className="text-gray-400">
            Let's get you back on track!
          </p>
        </div>
        
        <Link 
          to="/" 
          className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
        >
          <FaHome className="mr-2" />
          Beam Me Home
        </Link>
        
        <div className="mt-8 pt-6 border-t border-gray-700">
          <p className="text-sm text-gray-500">
            P.S. While you're here, why not enjoy this floating rocket? 🚀
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
