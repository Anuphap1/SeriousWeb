import Serious from "./asset/Serious.jpg";
import { Link } from "react-router-dom";

export default function App() {
  return (
    <div
      className="relative bg-cover bg-top h-[100vh]"
      style={{ backgroundImage: `url(${Serious})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black/50 py-5">
        {/* Title with Animation */}
        <h1 className="text-5xl font-bold animate__animated animate__zoomIn animate__delay-1s">
          Serious Bacon
        </h1>

        {/* Button Section with Animation */}
        <div className="mt-6 space-x-4 animate__animated animate__fadeIn animate__delay-1s">
          {/* About Button with Hover Animation */}
          <a
            href="/About"
            className="bg-amber-200/80 text-black py-3 px-8 rounded-lg hover:bg-amber-400 transition duration-300 transform hover:scale-110 animate__animated animate__fadeInUp animate__delay-1s"
          >
            About
          </a>

          {/* Music Button with Hover Animation */}
          <Link
            to="/Music"
            className="bg-amber-200/80 text-black py-3 px-8 rounded-lg hover:bg-amber-400 transition duration-300 transform hover:scale-110 animate__animated animate__fadeInUp animate__delay-1s"
          >
            Music
          </Link>
        </div>
      </div>
    </div>
  );
}
