import { motion } from "framer-motion";
import { useState } from "react";

function CardFlip() {
  const [isFlipped, setIsFlipped] = useState(false);

  const flip = () => setIsFlipped(!isFlipped);

  return (
    <div className="perspective-1000 w-80 h-96 cursor-pointer" onClick={flip}>
      <motion.div
        className="w-full h-full relative preserve-3d transition-all duration-500"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="absolute w-full h-full backface-hidden bg-gradient-to-br from-cyan-500 to-blue-700 rounded-xl p-6 flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-bold">Interactive Card</h3>
            <p className="mt-2 text-cyan-100">Click to flip</p>
          </div>
          <div className="text-right">
            <span className="text-sm opacity-70">Front Side</span>
          </div>
        </div>

        <div
          className="absolute w-full h-full backface-hidden bg-gradient-to-br from-purple-500 to-pink-700 rounded-xl p-6 flex flex-col justify-between"
          style={{ transform: "rotateY(180deg)" }}
        >
          <div>
            <h3 className="text-2xl font-bold">Card Back</h3>
            <p className="mt-4 text-purple-100">
              This is the back of our card with additional information.
            </p>
          </div>
          <div className="text-right">
            <span className="text-sm opacity-70">Back Side</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default CardFlip;
