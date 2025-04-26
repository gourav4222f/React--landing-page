import { motion } from 'framer-motion';

const BlogSection = () => {
  const blogs = [
    {
      id: 1,
      title: 'Importance of customized fixtures in a face lifting project',
      description: 'In an era of cut throat competition in retail where store owners are facing stiff competition from e-tailers',
      image: 'New/blog01.jpg', // Replace with your image path
      date: 'October 10, 2023',
    },
    {
      id: 2,
      title: 'À la carte fabrication',
      description: 'A retail brand thrives to deliver the best experience to the shoppers so that it is much easier for the ',
      image: 'New/blog02.jpg', // Replace with your image path
      date: 'October 5, 2023',
    },
  ];

  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Recent Blogs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogs.map((blog) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <p className="text-sm text-gray-500 mb-2">{blog.date}</p>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{blog.title}</h3>
                <p className="text-gray-600">{blog.description}</p>
                <button className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-300">
                  Read More
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogSection;