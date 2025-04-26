import React from 'react';

function Footer() {
    return (
        <>
            <div className='w-full'>
                <div className='max-w-screen-xl py-10 flex flex-col md:flex-row mx-auto gap-8 md:gap-32'>
                    <div className='flex justify-center md:basis-1/2'>
                        <img className='h-24 md:h-auto font-semibold leading-none tracking-tight' src='./Logo.png' alt='Satin Neo Dimensions Logo' />
                    </div>
                    <div className='flex flex-col md:flex-row md:basis-1/2 gap-8 md:gap-4'>
                        <div className='flex flex-col md:basis-1/3'>
                            <h1 className='mb-6 text-zinc-400 capitalize text-center md:text-left'>Socials</h1>
                            {["Instagram", "Twitter", "LinkedIn"].map((platform, index) => (
                                <a key={index} className='block mt-3 text-zinc-600 capitalize text-center md:text-left' href={`https://www.${platform.toLowerCase()}.com/satinneodimensions`} target="_blank" rel="noopener noreferrer">{platform}</a>
                            ))}
                        </div>

                        <div className='flex flex-col md:basis-1/3'>
                            <h1 className='mb-6 text-zinc-400 capitalize text-center md:text-left'>Quick Links</h1>
                            <a className='block mt-3 text-zinc-600 capitalize text-center md:text-left' href="https://www.satinneodimensions.com/" target="_blank" rel="noopener noreferrer">Website</a>
                            <a className='block mt-3 text-zinc-600 capitalize text-center md:text-left' href="https://www.satinneodimensions.com/products.html" target="_blank" rel="noopener noreferrer">Products</a>
                            <a className='block mt-3 text-zinc-600 capitalize text-center md:text-left' href="https://www.satinneodimensions.com/blogs.html" target="_blank" rel="noopener noreferrer">Blogs</a>
                        </div>

                        <div className='flex flex-col md:basis-1/3 items-center md:items-end'>
                            <p className='text-center md:text-right text-sm'>
                                SATIN NEO DIMENSIONS Pvt. Ltd
                                Plot no-108, Ground Floor,
                                Behind Taj Vivanta, Sector- 44
                                Gurgaon -122003 (Haryana)
                            </p>
                            <div className='flex flex-col items-center md:items-end mt-6 gap-4 w-full'>
                                <h1 className='font-semibold text-center md:text-right'>Certificates & Accreditations</h1>
                                <div className='w-full flex justify-center md:justify-end items-center gap-x-4'>
                                    <img className='w-16 md:w-14' src="p1.png" alt="Certification 1" />
                                    <img className='w-16 md:w-14' src="p2.png" alt="Certification 2" />
                                    <img className='w-16 md:w-14' src="p3.png" alt="Certification 3" />
                                    <img className='w-16 md:w-14' src="p4.png" alt="Certification 4" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;
