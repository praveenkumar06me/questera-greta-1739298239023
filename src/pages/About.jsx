import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-3xl mx-auto"
      >
        <h1 className="text-4xl font-bold mb-8 text-center">About Us</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
          <p className="text-gray-600 mb-6">
            Product World was founded by Alex with a vision to create an exceptional online shopping
            experience. What started as a small venture has grown into a trusted marketplace for
            quality products across multiple categories.
          </p>
          
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-600 mb-6">
            We strive to provide our customers with high-quality products at competitive prices
            while ensuring an seamless shopping experience. Our commitment to customer satisfaction
            drives everything we do.
          </p>

          <div className="border-t pt-6">
            <h2 className="text-2xl font-semibold mb-4">Meet Our Founder</h2>
            <div className="flex items-center gap-6">
              <div className="w-32 h-32 bg-gray-200 rounded-full overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400"
                  alt="Alex"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Alex</h3>
                <p className="text-gray-600">
                  With over 10 years of experience in e-commerce, Alex founded Product World
                  with the goal of revolutionizing online shopping through innovation and
                  customer-centric approaches.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;