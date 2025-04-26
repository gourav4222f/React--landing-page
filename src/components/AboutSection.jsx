import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AboutSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 120 },
    },
  };

  const floatingVariants = {
    float: {
      y: [-10, 10, -10],
      rotate: [-2, 2, -2],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <section className=" py-20 px-4 md:px-8  relative overflow-hidden">
      {/* Animated background elements */}
      
      
      

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Image Section */}
          <motion.div
            variants={itemVariants}
            className="relative flex justify-center"
          >
          
            
            <motion.img
              src="https://www.satinneodimensions.com/wp-content/uploads/2023/02/gallery3-500x450.jpg"
              alt="About Us"
              className="relative z-10 rounded-3xl border-8 border-white/20 transform perspective-1000 rotate-x-5 rotate-y-5 hover:rotate-x-12 hover:rotate-y-12 transition-[transform] duration-500"
              variants={floatingVariants}
              animate="float"
              whileHover={{ scale: 1.05, rotate: 0 }}
              whileTap={{ scale: 0.95 }}
            />
          </motion.div>

          {/* Content Section */}
          <div className="space-y-8 text-black">
            <motion.h2
              variants={itemVariants}
             className="text-4xl font-bold text-center text-gray-800 mb-12"
            >
              About Our Crazy Team
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-xl leading-relaxed"
            >
              Our in-house design studio, project planning and management teams help in devising a well-integrated approach for ensuring quality fabrication in our state of the art production units and managing timely implementation at off-site locations anywhere across India and around.

 
            </motion.p>


            
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;