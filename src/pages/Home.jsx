import { useContext } from "react";
import bannerImg from "../assets/Time management-cuate.png";
import { Link } from "react-router-dom";
import { authContext } from "../AuthProvider/AuthProvider";

export default function Home() {
  const { user } = useContext(authContext);

  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-2 min-h-screen items-center px-6 lg:px-20 bg-gray-100">
      {/* Left Section - Text */}
      <div className="space-y-6">
        <h2 className="font-extrabold text-4xl lg:text-5xl text-gray-900 leading-tight">
          Master Your Tasks,  
          <span className="text-blue-500"> Take Control of Your Time!</span>
        </h2>
        <p className="text-gray-600 text-lg">
          Struggling to stay organized? Our smart task management app helps you  
          **prioritize, schedule, and complete** tasks with ease. Whether you're  
          handling work projects or personal goals, **stay focused and achieve more**  
          in less time!
        </p>
        <Link
          to={user ? "/dashboard" : "/login"}
          className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg shadow-lg transform transition hover:scale-105"
        >
          Get Started
        </Link>
      </div>

      {/* Right Section - Image */}
      <div className="flex justify-center">
        <img src={bannerImg} alt="Task Management" className="max-w-md lg:max-w-lg" />
      </div>
    </div>
  );
}
