import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// Sample service data (you can modify this)
const services = [
  {
    title: "Retail Fitouts",
    description: "Providing comprehensive retail fitout solutions to create engaging and functional retail spaces. Our team works closely with clients to design and execute fitouts that reflect the brand identity while ensuring efficient use of space. From flooring to lighting, we handle all aspects of the fitout process, ensuring a seamless transition from concept to completion.",
    image: "img/img01.jpg"
  },
  {
    title: "Turnkey Interiors",
    description: "Offering end-to-end turnkey interior solutions for residential and commercial spaces. We take care of everything from initial concept design to the final installation, ensuring that every detail is thoughtfully executed. Whether it’s a home, office, or retail space, our turnkey solutions aim to create environments that are functional, stylish, and tailored to the client’s needs.",
    image: "img/img02.jpg"
  },
  {
    title: "Products",
    description: "Supplying high-quality products to enhance the functionality and aesthetics of your space. We offer a wide range of interior and exterior products, from furniture to lighting fixtures, each chosen for its durability and design. Whether you're looking to upgrade your home or commercial space, our products provide the perfect solution to enhance your environment.",
    image: "img/img03.jpg"
  },
  {
    title: "Investments",
    description: "Guiding you through smart investment opportunities to grow your wealth effectively. Our team offers expert advice on various investment options, whether it’s real estate, stocks, or other financial instruments. We aim to provide tailored investment strategies that help you build long-term wealth while mitigating risk and capitalizing on market trends.",
    image: "img/img10.jpg"
  }
];


const SectionTwo = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Animation transforms
  const imageY = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const textY = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  return (
    <section
      ref={containerRef}
      className="min-h-screen bg-gray-100 py-20"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Our Services</h2>

        {services.map((service, index) => (
          <div
            key={index}
            className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } items-center mb-32`}
          >
            {/* Text Content */}
            <motion.div
              style={{ y: textY }}
              className="md:w-1/2 p-8"
            >
              <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>

            {/* Image */}
            <motion.div
              style={{ y: imageY }}
              className="md:w-1/2 p-8"
            >
              <div className="relative w-full h-96 overflow-hidden rounded-lg shadow-lg">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SectionTwo;