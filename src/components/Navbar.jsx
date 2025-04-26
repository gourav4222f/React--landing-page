import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Menu, X } from 'react-feather';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);

    const navItems = [
        {
            name: 'What we do',
            dropdown: {
                image: 'https://www.satinneodimensions.com/wp-content/uploads/2018/08/puzzle-assamble.jpg',
                links: [
                    { name: 'Retail Fitouts', href: '#', img: "img/img01.jpg" },
                    { name: 'Turnkey Interiors', href: '#', img: "img/img02.jpg" },
                    { name: 'Way Finding', href: '#', img: "img/img03.jpg" },
                    { name: 'Products', href: '#', img: "img/img10.jpg" },
                    { name: 'Investments Annual', href: '#', img: "img/img01.jpg" },
                ],
            },
        },
        {
            name: 'Services',
            dropdown: {
                image: 'https://www.satinneodimensions.com/wp-content/uploads/2018/08/casio-500x450.jpg',
                links: [
                    { name: 'Consulting', href: '#', img: "img/img01.jpg" },
                    { name: 'Development', href: '#', img: "img/img02.jpg" },
                    { name: 'Training', href: '#', img: "img/img03.jpg" },
                ],
            },
        },
        { name: 'About', href: '#' },
        { name: 'Contact', href: '#' },
    ];

    return (
        <motion.nav
            className="sticky top-0 bg-white/80 backdrop-blur-md border-b border-gray-100 z-50"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    {/* Logo */}
                    <div className=" w-32 flex-shrink-0 font-bold text-xl"><img src="Logo.png" alt="Logo " className=' w-full' /></div>

                    <div className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <div
                                key={item.name}
                                className="relative"
                                onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                                onMouseLeave={() => setActiveDropdown(null)}
                            >
                                <button className="flex items-center space-x-1 text-gray-600 hover:text-gray-900 transition-colors">
                                    <span>{item.name}</span>
                                    {item.dropdown && <ChevronDown size={16} />}
                                </button>

                                <AnimatePresence>
                                    {activeDropdown === item.name && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 10 }}
                                            className="absolute top-full pt-2 left-0"
                                        >
                                            <div className="bg-white rounded-lg shadow-lg p-4 w-96 grid grid-cols-2 gap-4">
                                                <img
                                                    src={item.dropdown.image}
                                                    alt=""
                                                    className="rounded-lg h-full object-cover"
                                                />
                                                <div className="space-y-3">
                                                    {item.dropdown.links.map((link) => (
                                                        <a
                                                            key={link.name}
                                                            href={link.href}
                                                            className="block p-2 hover:bg-gray-50 rounded-md transition-colors"
                                                            onMouseEnter={(e) => {
                                                                e.currentTarget.parentElement.previousSibling.src = link.img;
                                                            }}
                                                        >
                                                            {link.name}
                                                        </a>
                                                    ))}
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="hidden md:inline-flex items-center px-6 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
                    >
                        Start Project
                    </motion.button>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="md:hidden overflow-hidden"
                        >
                            <div className="pt-4 pb-8 space-y-4">
                                {navItems.map((item) => (
                                    <div key={item.name} className="border-b last:border-0 pb-2">
                                        <button
                                            className="flex justify-between items-center w-full p-2 text-left"
                                            onClick={() => setActiveDropdown(
                                                activeDropdown === item.name ? null : item.name
                                            )}
                                        >
                                            <span>{item.name}</span>
                                            {item.dropdown && <ChevronDown size={16} />}
                                        </button>

                                        {item.dropdown && activeDropdown === item.name && (
                                            <motion.div
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                className="pl-4 mt-2"
                                            >
                                                <div className="bg-gray-50 rounded-lg p-4 grid gap-4">
                                                    <img
                                                        src={item.dropdown.image}
                                                        alt=""
                                                        className="rounded-lg"
                                                    />
                                                    <div className="space-y-2">
                                                        {item.dropdown.links.map((link) => (
                                                            <a
                                                                key={link.name}
                                                                href={link.href}
                                                                className="block p-2 hover:bg-gray-100 rounded-md"
                                                            >
                                                                {link.name}
                                                            </a>
                                                        ))}
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )}
                                    </div>
                                ))}
                                <button className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                                    Start Project
                                </button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.nav>
    );
};

export default Navbar;