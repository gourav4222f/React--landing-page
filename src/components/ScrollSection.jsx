import { motion, useTransform, useScroll } from 'framer-motion';
import { useRef } from 'react';

const ScrollSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y1 = useTransform(scrollYProgress, [0, 0.33], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0.33, 0.66], [0, -100]);
  const y3 = useTransform(scrollYProgress, [0.66, 1], [0, -100]);

  const services = [
    {
      title: 'Web Development',
      description: 'We create modern, responsive, and scalable websites tailored to your business needs.',
      image: 'img/img01.jpg'
    },
    {
      title: 'UI/UX Design',
      description: 'Crafting intuitive and visually stunning user interfaces for seamless user experiences.',
      image: 'img/img01.jpg'
    },
    {
      title: 'SEO Optimization',
      description: 'Boost your online presence with our proven SEO strategies and techniques.',
      image: 'img/img01.jpg'
    },
  ];

  return (
    <div ref={ref} className="min-h-[300vh] py-20 bg-gray-50">
      {services.map((service, index) => (
        <div key={index} className="h-screen flex items-center justify-center px-8">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">            
            <motion.div
              style={{
                y: index === 0 ? y1 : index === 1 ? y2 : y3,
              }}
              className={`order-${index % 2 === 0 ? '1' : '2'} text-center md:text-left`}
            >
              <h2 className="text-4xl font-bold text-gray-800 mb-6">{service.title}</h2>
              <p className="text-lg text-gray-600">{service.description}</p>
            </motion.div>            
            <motion.div
              style={{
                y: index === 0 ? y1 : index === 1 ? y2 : y3,
              }}
              className={`order-${index % 2 === 0 ? '2' : '1'}`}
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ScrollSection;