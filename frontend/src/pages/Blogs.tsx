import { BlogCard } from "../components/BlogCard";
export const Blogs = () => {
  return (
    <div>
      <BlogCard
        authorName={"harkirat"}
        title={"title of the blog"}
        content={"content of the blog"}
        publishedDate={"2nd Feb 2024"}
      />
    </div>
  );
};
