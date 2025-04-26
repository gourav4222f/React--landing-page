import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

export const TextParallaxContentExample = () => {
  return (
    <div className="bg-white">
      <TextParallaxContent
        imgUrl="Product/img01.jpg"
        subheading="Built for all of us."
        heading="Livi's "
      >
        <ExampleContent title="Livi's" discription={`Working with Lewis Company has truly been a delightful experience. As the owner of SatinneoDimensions, we focus on renovating store interiors and providing expert advice to enhance the visual appeal of retail spaces. Partnering with Lewis Company has been seamless and fulfilling. They align with our vision of creating environments that not only look stunning but also engage customers in a way that embodies the store’s brand and mission.

This collaboration has enabled us to bring innovative design concepts to fruition, emphasizing both style and practicality. Their team's dedication to quality, meticulous attention to detail, and customer-focused approach make them an invaluable partner in transforming store interiors into welcoming, contemporary, and visually captivating spaces.

Together, we’ve elevated store interiors from the mundane to the remarkable, offering our clients not just renovations, but a revitalized experience for both their staff and customers. It’s been an exhilarating journey working with such a committed and enthusiastic team at Lewis Company, and we eagerly anticipate many more successful projects together in the future.
`} />
      </TextParallaxContent>


      <TextParallaxContent
        imgUrl="Product/img03.jpg"
        subheading="Built for all of us."
        heading="Cannon "
      >
        <ExampleContent title="Cannon" discription={`At SatinneoDimensions, we have always aimed to transform store interiors into beautiful spaces that reflect the vision of the businesses we work with. We believe that a well-designed space can significantly enhance the customer experience and contribute to success. Our recent partnership with Canon Company has reinforced this belief, and I’m eager to share how our collaboration has positively influenced our projects.

Canon has supplied us with top-notch equipment that has revolutionized our renovation efforts. Their cutting-edge imaging and printing technologies enable us to create detailed visual mockups, giving our clients a realistic preview of their store renovations before we begin. This has greatly improved the decision-making process and ensured that our clients are fully satisfied with the final outcomes.

`} />
      </TextParallaxContent>


      <TextParallaxContent
        imgUrl="Product/img02.jpg"
        subheading="Built for all of us."
        heading="Bangalore International Airport "
      >
        <ExampleContent title="Bangalore International Airport" discription={`We specialize in crafting effective and engaging navigational and wayfinding signage. Our commitment to clear communication, innovative design, and flawless execution has enabled us to work with high-profile clients like Bangalore International Airport. In such a busy and dynamic environment, the demand for high-quality, reliable signage is essential, and we have partnered with Canon Company to help us meet these needs.

Handling a project as important as Bangalore International Airport requires precision and quality at every stage. The signage system must not only guide passengers efficiently but also embody the airport’s modern and welcoming vibe. Canon’s state-of-the-art imaging and printing technologies have been crucial in bringing our designs to life, ensuring that each sign is visually appealing while also being highly functional and durable enough to endure constant use.

Canon’s printing solutions offer outstanding clarity, color accuracy, and durability, which are vital for creating large-format, high-visibility signs in a bustling environment like an airport. Their advanced technology has allowed us to produce mockups that closely resemble how the final signage will look in the space, facilitating quicker approvals and enhancing communication with our clients.

`} />
      </TextParallaxContent>


    </div>
  );
};

const IMG_PADDING = 12;

const TextParallaxContent = ({ imgUrl, subheading, heading, children }) => {
  return (
    <div
      style={{
        paddingLeft: IMG_PADDING,
        paddingRight: IMG_PADDING,
      }}
    >
      <div className="relative h-[150vh]">
        <StickyImage imgUrl={imgUrl} />
        <OverlayCopy heading={heading} subheading={subheading} />
      </div>
      {children}
    </div>
  );
};

const StickyImage = ({ imgUrl }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: `calc(100vh - ${IMG_PADDING * 2}px)`,
        top: IMG_PADDING,
        scale,
      }}
      ref={targetRef}
      className="sticky z-0 overflow-hidden rounded-3xl"
    >
      <motion.div
        className="absolute inset-0 bg-neutral-950/70"
        style={{
          opacity,
        }}
      />
    </motion.div>
  );
};

const OverlayCopy = ({ subheading, heading }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

  return (
    <motion.div
      style={{
        y,
        opacity,
      }}
      ref={targetRef}
      className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white"
    >
      <p className="mb-2 text-center text-xl md:mb-4 md:text-3xl">
        {subheading}
      </p>
      <p className="text-center text-4xl font-bold md:text-7xl">{heading}</p>
    </motion.div>
  );
};

const ExampleContent = ({ discription }) => (
  <div className="mx-auto max-w-5xl px-4 pb-24 pt-12">
    <div>
      <p className="mb-4 text-xl leading-relaxed text-neutral-600 md:text-2xl">
        {discription}
      </p>
      <button className="w-full rounded bg-neutral-900 px-9 py-4 text-xl text-white transition-colors hover:bg-neutral-700 md:w-fit">
        Learn more <FiArrowUpRight className="inline" />
      </button>
    </div>
  </div>
);
