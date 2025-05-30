import React, { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { FiMousePointer } from "react-icons/fi";

const HeroSectionforpage = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-y-4 w-full place-content-center px-4 py-12 text-slate-900">
      <motion.h2
        className="text-4xl font-bold text-center text-gray-800 mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Our Belief
      </motion.h2>
      <motion.p
        className="text-xl leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        The strength of any idea lies in its design, detailing, and finally its implementation.
      </motion.p>
      <motion.div
        className="grid grid-cols-1 gap-x-20 gap-y-5 md:grid-cols-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <TiltCard img='CONCEPTUALIZATION.png' text='CONCEPTUALIZATION' color='#FCBD34' />
        <TiltCard img='DETAILING.png' text='DETAILING' color='#44A840' />
        <TiltCard img='EXECUTION.png' text='EXECUTION' color='#32678C' />
      </motion.div>
      <span className="bg-[#FCBD34] bg-[#44A840] bg-[#32678C]"></span>
    </div>
  );
};

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

const TiltCard = ({ img, text, color }) => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e) => {
    if (!ref.current) return [0, 0];

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        transform,
      }}
      className={`relative h-96 w-72 rounded-xl bg-[${color}]`}
    >
      <div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
        className="absolute inset-4 grid place-content-center rounded-xl bg-white shadow-lg"
      >
        <p
          style={{
            transform: "translateZ(75px)",
          }}
          className="text-center text-2xl font-bold lowercase"
        >
          {text}
        </p>
        <img
          src={img}
          alt="card"
          style={{
            transform: "translateZ(50px)",
          }}
          className="text-center text-2xl font-bold"
        />
      </div>
    </motion.div>
  );
};

export default HeroSectionforpage;