import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Dummy data
const companyData = [
    {
        id: 1,
        name: 'Bhawani',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint sunt autem ab maxime odit magnam nihil totam consectetur adipisicing elit. Sint sunt autem ab maxime odit magnam nihil totam rerum voluptates voluptatum laboriosam ',
        image: 'Add/bhawani.webp',
        icon: '🚀',
    },
    {
        id: 2,
        name: 'Niryas',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint sunt autem ab maxime odit magnam nihil totam consectetur adipisicing elit. Sint sunt autem ab maxime odit magnam nihil totam rerum voluptates voluptatum laboriosam ',
        image: 'Add/niryas.webp',
        icon: '🚀',
    },
    {
        id: 3,
        name: 'Satinmedia',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint sunt autem ab maxime odit magnam nihil totam consectetur adipisicing elit. Sint sunt autem ab maxime odit magnam nihil totam rerum voluptates voluptatum laboriosam ',
        image: 'Add/satinmedia.webp',
        icon: '🚀',
    },
    {
        id: 4,
        name: 'Satinindia',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint sunt autem ab maxime odit magnam nihil totam consectetur adipisicing elit. Sint sunt autem ab maxime odit magnam nihil totam rerum voluptates voluptatum laboriosam ',
        image: 'Add/satinindia.webp',
        icon: '🚀',
    },
];

function AddSection() {
    const [selectedCompany, setSelectedCompany] = useState(companyData[0]);

    // Animation variants
    const tabVariants = {
        initial: { y: 20, opacity: 0 },
        animate: { y: 0, opacity: 1 },
        exit: { y: -20, opacity: 0 },
        hover: { scale: 1.05 },
    };

    const contentVariants = {
        initial: { opacity: 0, scale: 0.8 },
        animate: { opacity: 1, scale: 1 },
        exit: { opacity: 0, scale: 0.8 },
    };

    return (
        <div className="w-full h-[85vh] bg-gray-900 relative overflow-hidden">
            
            <motion.div
                className="absolute max-sm:w-full w-[60%] md:right-40 h-full bg-gray-800 flex justify-center items-start gap-4 pt-8 px-[5%] "
                style={{ clipPath: 'polygon(5% 8%, 95% 8%, 100% 0, 0% 0%)' }}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
            >
                {companyData.map((company) => (
                    <motion.span
                        key={company.id}
                        variants={tabVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        whileHover="hover"
                        transition={{ duration: 0.3 }}
                        className={` -mt-5 w-1/4 py-2  text-center cursor-pointer rounded-lg text-white font-semibold ${selectedCompany.id === company.id ? 'bg-gray-500' : 'bg-gray-300'
                            }`}
                        onClick={() => setSelectedCompany(company)}
                        layout
                    >
                        <span className=' hidden md:block'>{company.name}</span>
                        <span className='  block md:hidden'> {company.icon}</span>
                    </motion.span>
                ))}
            </motion.div>

            <AnimatePresence mode="wait">
                <motion.div
                    key={selectedCompany.id}
                    className="absolute w-full h-full bg-no-repeat bg-[auto_70%]  bg-center z-0"
                    style={{ backgroundImage: `url(${selectedCompany.image})` }}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4, ease: 'easeInOut' }}
                />
            </AnimatePresence>

            {/* Company Info Section */}
            <motion.div
                className="absolute bottom-0 z-50  max-sm:w-full md:w-[60vw] h-[20vh] bg-gray-800/90 flex items-end justify-start max-sm:px-2  max-sm:py-1 pb-4 px-6 overflow-hidden"
                style={{ clipPath: 'polygon(80% 0%, 90% 100%, 0 100%, 0% 0%)' }}
            >
                <AnimatePresence mode="wait">
                    <motion.div
                        key={selectedCompany.id}
                        variants={contentVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        transition={{ duration: 0.4 }}
                        className="text-white max-w-[50vw]   "
                    >
                        <p className="mb-6 max-sm:hidden ">{selectedCompany.description}</p>
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-gray-500 text-white px-6 py-2 rounded-full font-semibold"
                        >
                            Learn More
                        </motion.button>
                    </motion.div>
                </AnimatePresence>
            </motion.div>
        </div>
    );
}

export default AddSection;