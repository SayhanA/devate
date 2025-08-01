import { FaArrowRight, FaCalendar, FaUser } from "react-icons/fa";

export default function FeaturedPosts() {
  const featuredPosts = [
    {
      id: 1,
      title: "Building Scalable Web Applications with Next.js 15",
      excerpt:
        "Learn how to leverage the latest features in Next.js 15 to build performant and scalable web applications.",
      image:
        "https://preview-tailwindcss-footer-kzmluluy11fp4j3ltj66.vusercontent.net/placeholder.svg?height=300&width=500",
      author: "John Doe",
      date: "Dec 15, 2024",
      category: "Development",
      readTime: "8 min read",
    },
    {
      id: 2,
      title: "The Future of AI in Software Development",
      excerpt:
        "Exploring how artificial intelligence is revolutionizing the way we write, test, and deploy code.",
      image:
        "https://preview-tailwindcss-footer-kzmluluy11fp4j3ltj66.vusercontent.net/placeholder.svg?height=300&width=500",
      author: "Jane Smith",
      date: "Dec 12, 2024",
      category: "AI & Tech",
      readTime: "12 min read",
    },
  ];

  return (
    <section className="py-16 sm:mx-10 mx-5 bg-white">
      <div className="container mx-auto sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Articles
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our most popular and trending articles handpicked for you
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-[10%]">
          {featuredPosts.map((post) => (
            <article key={post.id} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-xl mb-6">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{post.excerpt}</p>
                <div className="flex items-center justify-between text-sm text-gray-500">
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
                  <span className="font-medium">{post.readTime}</span>
                </div>
                <div className="flex items-center text-blue-600 font-medium group-hover:text-blue-700 transition-colors">
                  <span>Read More</span>
                  <FaArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
