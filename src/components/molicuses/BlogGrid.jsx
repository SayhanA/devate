import { FaCalendar, FaTag, FaUser } from "react-icons/fa";

export default function BlogGrid() {
  const blogPosts = [
    {
      id: 1,
      title: "Getting Started with React Server Components",
      excerpt:
        "A comprehensive guide to understanding and implementing React Server Components in your applications.",
      image: "/placeholder.svg?height=200&width=350",
      author: "Mike Johnson",
      date: "Dec 10, 2024",
      category: "React",
      tags: ["React", "Server Components", "Next.js"],
    },
    {
      id: 2,
      title: "CSS Grid vs Flexbox: When to Use Which",
      excerpt:
        "Understanding the differences between CSS Grid and Flexbox and when to use each layout method.",
      image: "/placeholder.svg?height=200&width=350",
      author: "Sarah Wilson",
      date: "Dec 8, 2024",
      category: "CSS",
      tags: ["CSS", "Layout", "Design"],
    },
    {
      id: 3,
      title: "Database Optimization Techniques",
      excerpt:
        "Learn essential database optimization techniques to improve your application's performance.",
      image: "/placeholder.svg?height=200&width=350",
      author: "David Chen",
      date: "Dec 5, 2024",
      category: "Database",
      tags: ["Database", "Performance", "SQL"],
    },
    {
      id: 4,
      title: "Introduction to TypeScript Generics",
      excerpt:
        "Master TypeScript generics to write more flexible and reusable code in your projects.",
      image: "/placeholder.svg?height=200&width=350",
      author: "Emily Davis",
      date: "Dec 3, 2024",
      category: "TypeScript",
      tags: ["TypeScript", "Generics", "Programming"],
    },
    {
      id: 5,
      title: "Building RESTful APIs with Node.js",
      excerpt:
        "Step-by-step guide to creating robust and scalable RESTful APIs using Node.js and Express.",
      image: "/placeholder.svg?height=200&width=350",
      author: "Alex Rodriguez",
      date: "Nov 30, 2024",
      category: "Backend",
      tags: ["Node.js", "API", "Express"],
    },
    {
      id: 6,
      title: "Modern JavaScript ES2024 Features",
      excerpt:
        "Explore the latest JavaScript features and how they can improve your development workflow.",
      image: "/placeholder.svg?height=200&width=350",
      author: "Lisa Thompson",
      date: "Nov 28, 2024",
      category: "JavaScript",
      tags: ["JavaScript", "ES2024", "Features"],
    },
  ];

  return (
    <section className="py-16 mx-10 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 relative">
          {/* Main Content */}
          <div className="lg:w-2/3">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Latest Articles
              </h2>
              <p className="text-gray-600">
                Stay updated with our latest insights and tutorials
              </p>
            </div>

            <div className="grid gap-8">
              {blogPosts.map((post) => (
                <article
                  key={post.id}
                  className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden group cursor-pointer"
                >
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <img
                        src={
                          "https://preview-tailwindcss-footer-kzmluluy11fp4j3ltj66.vusercontent.net/placeholder.svg?height=300&width=500"
                        }
                        alt={post.title}
                        className="w-full h-48 md:h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="md:w-2/3 p-6">
                      <div className="flex items-center mb-3">
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                          {post.category}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-1">
                            <FaUser className="w-4 h-4" />
                            <span>{post.author}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <FaCalendar className="w-4 h-4" />
                            <span>{post.date}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <FaTag className="w-4 h-4 text-gray-400" />
                        <div className="flex flex-wrap gap-2">
                          {post.tags.map((tag, index) => (
                            <span
                              key={index}
                              className="text-xs text-gray-500 hover:text-blue-600 cursor-pointer"
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-12 flex justify-center">
              <nav className="flex items-center space-x-2">
                <button className="px-3 py-2 text-gray-500 hover:text-gray-700 transition-colors">
                  Previous
                </button>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">
                  1
                </button>
                <button className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
                  2
                </button>
                <button className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
                  3
                </button>
                <span className="px-3 py-2 text-gray-500">...</span>
                <button className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
                  10
                </button>
                <button className="px-3 py-2 text-gray-500 hover:text-gray-700 transition-colors">
                  Next
                </button>
              </nav>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3 relative min-h-full">
            <div className="space-y-8 sticky top-0">
              {/* Categories */}
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Categories
                </h3>
                <ul className="space-y-3">
                  {[
                    "Development",
                    "AI & Tech",
                    "React",
                    "CSS",
                    "Database",
                    "TypeScript",
                    "Backend",
                    "JavaScript",
                  ].map((category) => (
                    <li key={category}>
                      <a
                        href="#"
                        className="flex items-center justify-between text-gray-600 hover:text-blue-600 transition-colors"
                      >
                        <span>{category}</span>
                        <span className="text-sm text-gray-400">
                          {Math.floor(Math.random() * 20) + 1}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Recent Posts */}
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Recent Posts
                </h3>
                <div className="space-y-4">
                  {blogPosts.slice(0, 3).map((post) => (
                    <div
                      key={post.id}
                      className="flex space-x-3 group cursor-pointer"
                    >
                      <img
                        src={
                          "https://preview-tailwindcss-footer-kzmluluy11fp4j3ltj66.vusercontent.net/placeholder.svg?height=300&width=500"
                        }
                        alt={post.title}
                        className="w-16 h-16 object-cover rounded-lg flex-shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                          {post.title}
                        </h4>
                        <p className="text-xs text-gray-500 mt-1">
                          {post.date}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Newsletter */}
              <div className="bg-gradient-to-r from-blue-600 to-purple-700 rounded-xl p-6 text-white">
                <h3 className="text-xl font-bold mb-3">Stay Updated</h3>
                <p className="text-blue-100 text-sm mb-4">
                  Get the latest articles delivered straight to your inbox.
                </p>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="w-full px-3 py-2 rounded-lg text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
                  />
                  <button className="w-full bg-white text-secondary-bg py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
