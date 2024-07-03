import { useState } from "react";

export const Blogs = () => {
  const [blogs, setBlogs] = useState([
    // Blogs data...
  ]);

  setBlogs({ title: "somethings blog", content: "nothing blog" });

  return (
    <div id="blogs" className="p-4 bg-black-100 bg-opacity-80">
      <h2 className="text-2xl font-bold mb-4">Blogs</h2>
      {blogs.map((blog, index) => (
        <div key={index} className="mb-4">
          <h3 className="text-lg font-bold">{blog.title}</h3>`
          {console.log(blog.title)}
          <p>{blog.content}</p>
        </div>
      ))}
    </div>
  );
};
