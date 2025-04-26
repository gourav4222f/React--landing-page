import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

const Text = () => {
  const canvasRef = useRef(null);
  const frames = useRef({
    currentIndex: 1,
    maxIndex: 600
  });
  const images = useRef([]);

  // Preload images
  const preloadImages = () => {
    let imagesLoaded = 0;
    
    for (let i = 1; i <= frames.current.maxIndex; i++) {
    const imageUrl = `./threeimg/${i.toString().padStart(5, "0")}.jpg`;
      const img = new Image();
      img.src = imageUrl;
      
      img.onload = () => {
        imagesLoaded++;
        if (imagesLoaded === frames.current.maxIndex) {
          loadImage(frames.current.currentIndex);
          startAnimation();
        }
      };
      
      images.current.push(img);
    }
  };

  // Load and draw image on canvas
  const loadImage = (index) => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    
    if (index >= 0 && index < frames.current.maxIndex) {
      const img = images.current[index];

      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      const scaleX = canvas.width / img.width;
      const scaleY = canvas.height / img.height;
      const scale = Math.min(scaleX, scaleY);
      const newWidth = img.width * scale;
      const newHeight = img.height * scale;
      const offsetX = (canvas.width - newWidth) / 2;
      const offsetY = (canvas.height - newHeight) / 2;

      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(img, offsetX, offsetY, newWidth, newHeight);

      frames.current.currentIndex = index;
    }
  };

  // Start the scroll animation
  const startAnimation = () => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.parent',
        start: 'top top',
        scrub: 1,
        end: 'bottom bottom'
      }
    });

    tl.to(frames.current, {
      currentIndex: frames.current.maxIndex,
      onUpdate: () => {
        loadImage(Math.floor(frames.current.currentIndex));
      }
    });
  };

  // Initialize on component mount
  useEffect(() => {
    preloadImages();
    
    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="w-screen bg-zinc-100">
      <div className="parent relative w-full h-[1000vh]">
        <div className="w-full sticky top-0 left-0 h-screen">
          <canvas
            ref={canvasRef}
            className="w-full h-[100vh] scale-115"
          />
        </div>
      </div>
    </div>
  );
};

export default Text;