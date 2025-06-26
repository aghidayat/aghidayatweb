import Pagination from "../components/Pagination";
import BlogCard from "../components/BlogCard";
import { memo } from "react";

const BlogSection = ({ general, language, blogs }) => {
  return (
    <section className="py-12 px-4 sm:px-6 border-b dark:border-gray-800">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-6">
          📝 {general[language].blogs}
        </h2>
        <Pagination items={blogs} itemsPerPage={3}>
          {(blog) => (
            <BlogCard
              key={`blog-${blog.link}`}
              title={blog.title}
              description={blog.description}
              link={blog.link}
              imageUrl={blog.imageUrl}
            />
          )}
        </Pagination>
      </div>
    </section>
  );
};

export default memo(BlogSection);
