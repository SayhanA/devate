import BlogGrid from "@/components/molicuses/BlogGrid";
import BlogHero from "@/components/molicuses/BlogHero";
import FeaturedPosts from "@/components/molicuses/featuredPosts";

const BlogPage = () => {
  return (
    <>
      <BlogHero />
      <FeaturedPosts />
      <BlogGrid />
    </>
  );
};

export default BlogPage;
