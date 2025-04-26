

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const testimonials = [
  {
    content:
      "Satin Neo Dimensions transformed our retail space into a customer magnet. Their attention to detail and innovative designs have significantly boosted our foot traffic.",
    author: "Anjali, Retail Manager at Lifestyle Stores",
    imgAlt: "Anjali",
    img: "https://randomuser.me/api/portraits/men/22.jpg"
  },
  {
    content:
      "The turnkey solutions provided by Satin Neo Dimensions were seamless. They managed everything from design to execution, delivering our office space on time and within budget.",
    author: "Rajesh, HR Head at Infosys",
    imgAlt: "Rajesh",
    img: "https://randomuser.me/api/portraits/men/23.jpg"
  },
  {
    content:
      "Their way-finding solutions have enhanced the navigability of our mall, improving the overall shopping experience for our customers.",
    author: "Priya, Operations Manager at DLF Mall",
    imgAlt: "Priya",
    img: "https://randomuser.me/api/portraits/men/24.jpg"
  },
  {
    content:
      "The custom-designed fixtures by Satin Neo Dimensions have added a unique touch to our store, setting us apart from competitors.",
    author: "Karan, Store Owner at FabIndia",
    imgAlt: "Karan",
    img: "https://randomuser.me/api/portraits/men/25.jpg"
  },
  {
    content:
      "Partnering with Satin Neo Dimensions for our retail expansion was a wise decision. Their expertise in design and execution ensured our stores were ready for launch ahead of schedule.",
    author: "Neha, Expansion Manager at H&M India",
    imgAlt: "Neha",
    img: "https://randomuser.me/api/portraits/men/27.jpg"
  },
  {
    content:
      "Their commitment to quality and timely delivery has made them our preferred partner for all interior projects.",
    author: "Amit, Project Manager at Shapoorji Pallonji Group",
    imgAlt: "Amit",
    img: "https://randomuser.me/api/portraits/men/28.jpg"
  },
  {
    content:
      "Satin Neo Dimensions' innovative designs have transformed our retail outlets, making them more engaging and customer-friendly.",
    author: "Suresh, Marketing Head at Puma India",
    imgAlt: "Suresh",
    img: "https://randomuser.me/api/portraits/men/29.jpg"
  },
  {
    content:
      "Their end-to-end solutions for our corporate office were executed flawlessly, reflecting their professionalism and expertise.",
    author: "Meera, Facilities Manager at Accenture",
    imgAlt: "Meera",
    img: "https://randomuser.me/api/portraits/men/55.jpg"
  },
  {
    content:
      "The signage solutions provided by Satin Neo Dimensions have improved the way our customers navigate our complex, enhancing their overall experience.",
    author: "Vikram, Operations Head at Phoenix Marketcity",
    imgAlt: "Vikram",
    img: "https://randomuser.me/api/portraits/men/54.jpg"
  },
  {
    content:
      "The bespoke furniture pieces crafted by Satin Neo Dimensions have added elegance and functionality to our boutique.",
    author: "Simran, Owner at The Bombay Store",
    imgAlt: "Simran",
    img: "https://randomuser.me/api/portraits/men/65.jpg"
  }
];



export function Testimonial() {
  const [currentSlide, setCurrentSlide] = useState(0);

  function handleNextSlide() {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  }

  function handlePreviousSlide() {
    setCurrentSlide(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  }

  return (
    <div className="p-4 w-full">
      <div className="w-full overflow-hidden rounded-2xl grid grid-cols-1 bg-neutral-100 p-8 dark:bg-neutral-900 py-20">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Testimonials
        </h2>
        <div className="flex justify-end gap-2">
          <button
            className="group inline-flex size-7 items-center justify-center rounded-full bg-white p-1.5 dark:bg-neutral-950"
            disabled={currentSlide === 0}
            onClick={handlePreviousSlide}
            type="button"
          >
            <FaArrowLeft className="transform-gpu stroke-blue-500 transition-colors group-disabled:stroke-neutral-500/40" />
          </button>
          <button
            className="group inline-flex size-7 items-center justify-center rounded-full bg-white p-1.5 dark:bg-neutral-950"
            disabled={currentSlide === testimonials.length - 1}
            onClick={handleNextSlide}
            type="button"
          >
            <FaArrowRight className="transform-gpu stroke-blue-500 transition-colors group-disabled:stroke-neutral-500/40" />
          </button>
        </div>
        <section className="mt-8 flex w-full gap-2 *:shrink-0">
          {testimonials.map((testimonial, index) => {
            return (
              <AnimatePresence key={testimonial.content} mode="popLayout">
                {index >= currentSlide && (
                  <motion.div
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    className="flex h-60 w-[24rem] flex-col justify-between items-center rounded-lg bg-white p-4 shadow-sm dark:bg-neutral-800"
                    exit={{ opacity: 0, x: 0, scale: 0.8, rotate: 3 }}
                    initial={{ opacity: 0, x: 0, scale: 0.8 }}
                    layout={true}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                  >
                    <img className="size-20 rounded-full bg-neutral-500/10" src={testimonial.img} alt="" srcset="" />
                    <p className="font-medium text-neutral-600 leading-5 tracking-tight dark:text-neutral-400">
                      {testimonial.content}
                    </p>
                    <p className="text-neutral-400 text-xs dark:text-neutral-500">
                      {testimonial.author}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            );
          })}
        </section>
      </div>
    </div>
  );
}

export default Testimonial;
