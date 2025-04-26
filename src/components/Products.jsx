import { useState } from 'react';
import { motion } from 'framer-motion';

function Products() {
    const products = [
        { title: "Livi's", description: "Livi's offers a wide range of high-quality denim products that combine style and comfort.", live: false, case: true, img: "Product/img01.jpg" },
        { title: "Cinepolis", description: "Cinepolis is a leading cinema chain providing an exceptional movie-going experience.", live: true, case: true, img: "Product/img02.jpg" },
        { title: "EOS", description: "EOS is known for its innovative beauty and skincare products that cater to all skin types.", live: true, case: false, img: "Product/img03.jpg" },
        { title: "Canon", description: "Canon is a world-renowned brand for cameras and imaging solutions, trusted by professionals.", live: true, case: false, img: "Product/img04.jpg" },
        { title: "Sephora", description: "Sephora offers a diverse selection of beauty products, including makeup, skincare, and fragrances.", live: true, case: true, img: "Product/img05.jpg" },
        { title: "Casio", description: "Casio is a leading manufacturer of electronic products, including watches, calculators, and musical instruments.", live: true, case: true, img: "Product/img06.jpg" }
    ];

    const [pos, setPos] = useState(0);

    const mover = (val) => {
        setPos(val * 23);
    };

    const CustomButton = ({ title = "Live Demo" }) => (
        <button className="px-6 py-2 bg-white border text-black rounded-full font-medium hover:bg-gray-200 transition-colors">
            {title}
        </button>
    );

    return (
        <>
            <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">This is the Case Study Section</h1>

            <div className="relative">
                {products.map((product, index) => (
                    <div
                        key={index}
                        className="w-full px-10 group py-20 h-[23rem] text-white bg-gray-100 border-b border-black/60 hover:bg-gray-800 transition-all duration-150 max-sm:flex max-sm:overflow-hidden max-sm:h-full max-sm:px-2 max-sm:py-2"
                        onMouseEnter={() => mover(index)}
                    >
                        <div className="mx-auto max-sm:flex-col flex justify-between items-center ">
                            <h1 className="text-6xl capitalize font-medium text-black group-hover:text-white transition-all duration-150">{product.title}</h1>
                            <img src={product.img} alt="" className=" max-sm:block my-6 hidden w-32 h-32 object-cover rounded-full shadow-lg" />
                            <div className="md:w-1/3">
                                <p className="pb-10 text-black group-hover:text-white transition-all duration-150">{product.description}</p>
                                <div className="flex w-full max-sm:justify-center items-center gap-4">
                                    {product.live && <CustomButton />}
                                    {product.case && <CustomButton title="Case Study" />}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                <div className="w-full max-sm:hidden h-full absolute top-0 pointer-events-none">
                    <motion.div
                        initial={{ y: pos, x: "-50%" }}
                        animate={{ y: pos + "rem" }}
                        transition={{ ease: [0.83, 0, 0.17, 1], duration: 0.6 }}
                        className="w-[32rem] h-[23rem] bg-white absolute left-[45%] overflow-hidden"
                    >
                        {products.map((_, index) => (
                            <motion.div
                                key={index}
                                animate={{ y: -pos + "rem" }}
                                transition={{ ease: [0.83, 0, 0.17, 1], duration: 0.6 }}
                                className="w-full h-full bg-no-repeat bg-cover bg-center"
                                style={{
                                    backgroundImage: `url(Product/img0${index + 1}.jpg)`
                                }}
                            />
                        ))}
                    </motion.div>
                </div>
            </div>
        </>
    );
}

export default Products;