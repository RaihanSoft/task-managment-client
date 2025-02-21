import { useNavigate } from "react-router-dom";
// import errorImg from "../assets/404 Error-amico.png";

export default function ErrorPage() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
      <div className="max-w-md">
        {/* Uncomment the image when available */}
        {/* <img src={errorImg} alt="Page Not Found" className="w-full mb-6" /> */}
      </div>
      <h2 className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text mb-4">
        Page Not Found
      </h2>
      <p className="text-lg text-gray-600 mb-6">
        Oops! The page you are looking for does not exist.
      </p>
      <button
        onClick={() => navigate("/")}
        className="px-6 py-3 bg-primary hover:bg-secondary text-white rounded-lg shadow-md transition-all duration-300"
      >
        Take Me Home
      </button>
    </div>
  );
}
