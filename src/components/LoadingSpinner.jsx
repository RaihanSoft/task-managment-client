import { RingLoader } from "react-spinners";
import { motion } from "framer-motion";

export default function RoyalLoading() {
  return (
    <div className="relative flex justify-center items-center w-full min-h-screen bg-[#1a0033] overflow-hidden">
      {/* Royal Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#2b1055] via-[#1a0033] to-[#3c097c]"></div>

      {/* Floating Royal Gold Orbs */}
      <motion.div
        animate={{ x: [0, 30, -30, 0], y: [0, -30, 30, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        className="absolute w-80 h-80 bg-yellow-400/30 rounded-full blur-[120px]"
      ></motion.div>
      <motion.div
        animate={{ x: [-20, 20, -20], y: [-20, 20, -20] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
        className="absolute w-96 h-96 bg-yellow-500/30 rounded-full blur-[150px]"
      ></motion.div>

      {/* Royal Rotating Golden Rings */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
        className="absolute w-[420px] h-[420px] border-[5px] border-yellow-500/60 rounded-full"
      ></motion.div>
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
        className="absolute w-[320px] h-[320px] border-[3px] border-yellow-300/60 rounded-full"
      ></motion.div>

      {/* Glowing Diamond Particles */}
      <motion.div
        animate={{ y: [0, -20, 20, 0], opacity: [0.6, 1, 0.6] }}
        transition={{ repeat: Infinity, duration: 3 }}
        className="absolute w-3 h-3 bg-yellow-400 rounded-full top-1/3 left-1/4 shadow-yellow-500/80"
      ></motion.div>
      <motion.div
        animate={{ y: [0, 20, -20, 0], opacity: [0.6, 1, 0.6] }}
        transition={{ repeat: Infinity, duration: 4 }}
        className="absolute w-4 h-4 bg-yellow-300 rounded-full top-1/2 left-3/4 shadow-yellow-400/80"
      ></motion.div>
      <motion.div
        animate={{ y: [0, -25, 25, 0], opacity: [0.6, 1, 0.6] }}
        transition={{ repeat: Infinity, duration: 5 }}
        className="absolute w-3 h-3 bg-yellow-500 rounded-full top-3/4 left-1/3 shadow-yellow-500/80"
      ></motion.div>

      {/* Majestic Gold Reflection Effect */}
      <motion.div
        animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        className="absolute inset-0 rounded-full bg-yellow-600/40 opacity-30 blur-3xl"
      ></motion.div>

      {/* Glowing Royal Blue Liquid */}
      <motion.div
        animate={{ y: [-10, 10, -10] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        className="absolute w-full h-32 bottom-0 bg-blue-400/20 blur-[80px]"
      ></motion.div>

      {/* Centerpiece Royal Gold Spinner */}
      <div className="relative flex justify-center items-center">
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.7, 1, 0.7] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="absolute inset-0 rounded-full bg-yellow-500/40 opacity-50 blur-2xl"
        ></motion.div>
        <RingLoader size={140} color="#FFD700" />
      </div>
    </div>
  );
}
