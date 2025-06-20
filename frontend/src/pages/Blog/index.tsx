import { type FC } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export const Blog: FC = () => {
  const blogPosts = [
    {
      title: "The Future of Urban Agriculture",
      date: "March 15, 2024",
      author: "Dr. Sarah Chen",
      image: "/hero-bg.avif",
      excerpt: "Exploring how hydroponics is revolutionizing urban farming and food production...",
      readTime: "5 min read",
      views: 120,
      comments: 8
    },
    {
      title: "Sustainable Water Management",
      date: "March 10, 2024",
      author: "Prof. James Wilson",
      image: "/hydroponics2.jpg",
      excerpt: "Understanding the water-saving benefits of hydroponic systems...",
      readTime: "4 min read",
      views: 95,
      comments: 5
    },
    {
      title: "Innovations in Nutrient Solutions",
      date: "March 5, 2024",
      author: "Dr. Maria Rodriguez",
      image: "/polyhouse.avif",
      excerpt: "Latest developments in nutrient formulations for optimal plant growth...",
      readTime: "6 min read",
      views: 150,
      comments: 12
    }
    // Add more blog posts as needed
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Bar */}
      <div className="bg-[#e8f5e9]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-2 sm:py-3 flex justify-start">
            <Link 
              to="/blog"
              className="text-[#07300f] hover:text-[#07300f]/80 transition-colors duration-300 text-xs sm:text-sm"
            >
              All Posts
            </Link>
          </div>
        </div>
      </div>

      {/* Blog Posts Container */}
      <div className="bg-[#07300f]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
          <div className="space-y-4 sm:space-y-6 max-w-5xl mx-auto">
            {blogPosts.map((post, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#e8f5e9] rounded-md overflow-hidden flex flex-col md:flex-row"
              >
                {/* Left Side - Image */}
                <div className="relative w-full md:w-1/2">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-[250px] sm:h-[300px] md:h-[400px] object-cover"
                  />
                </div>

                {/* Right Side - Content */}
                <div className="w-full md:w-1/2 p-4 sm:p-6 md:p-8 flex flex-col">
                  {/* Author Info - Updated Layout */}
                  <div className="flex items-start justify-between mb-3 sm:mb-4">
                    <div className="flex items-start space-x-2 sm:space-x-3">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-purple-600 text-white flex items-center justify-center text-xs sm:text-sm">
                        M
                      </div>
                      <div className="flex flex-col">
                        <span className="font-medium text-xs sm:text-sm">{post.author}</span>
                        <div className="flex items-center space-x-1 text-gray-600 text-xs sm:text-sm">
                          <span>{post.date}</span>
                          <span>·</span>
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                    </div>
                    <button className="p-1 sm:p-2">
                      <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                      </svg>
                    </button>
                  </div>

                  {/* Title and Content - Left Aligned */}
                  <h2 className="text-base sm:text-lg font-medium text-[#07300f] mb-2 sm:mb-3 text-left">
                    {post.title}
                  </h2>
                  <p className="text-gray-700 mb-4 sm:mb-6 text-left text-xs sm:text-sm">
                    {post.excerpt}
                  </p>

                  {/* Stats - Removed border-t */}
                  <div className="mt-auto pt-3 sm:pt-4">
                    <div className="flex items-center justify-between text-gray-600 text-xs sm:text-sm">
                      <div className="flex items-center">
                        <span>{post.views} views</span>
                        <span className="mx-2">·</span>
                        <span>{post.comments} comments</span>
                      </div>
                      <button className="p-1 sm:p-2">
                        <svg className="w-4 h-4 sm:w-6 sm:h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Divider Section */}
      <div className="w-full h-8 sm:h-12 md:h-16 bg-[#e8f5e9]"></div>

      {/* Footer will be rendered here */}
    </div>
  )
} 

