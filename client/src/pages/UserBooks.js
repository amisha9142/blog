// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import BlogCard from "../components/BlogCard";
// const UserBlogs = () => {
//   const [blogs, setBlogs] = useState([]);
//   //get user blogs
//   const getUserBlogs = async () => {
//     try {
//       const id = localStorage.getItem("userId");
//       const { data } = await axios.get(`http://localhost:5000/api/v1/blog/user-blog/${id}`);
//       if (data?.success) {
//         setBlogs(data?.userBlog.blogs);
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   useEffect(() => {
//     getUserBlogs();
//   }, []);
//   console.log(blogs);
//   return (
//     <div>
//       {blogs && blogs.length > 0 ? (
//         blogs.map((blog) => (
//           <BlogCard
//             id={blog._id}
//             isUser={true}
//             title={blog.title}
//             description={blog.description}
//             image={blog.image}
//             username={blog.user.username}
//             time={blog.createdAt}
//           />
//         ))
//       ) : (
//         <h1 >You Have not Created a blog</h1>
//       )}
//     </div>
//   );
// };
// export default UserBlogs;


import React, { useState, useEffect } from "react";
import axios from "axios";
import BookCard from "../components/BookCard";
const UserBooks = () => {
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState(null);
  // Get user blogs
  const getUserBlogs = async () => {
    try {
      const id = localStorage.getItem("userId");
      console.log("User ID:", id); // Debugging line
      const { data } = await axios.get(`http://localhost:5000/api/v1/book/all-book/${id}`);
      console.log("API Response:", data); // Debugging line
      if (data?.success) {
        setBlogs(data?.userBlog.blogs);
      } else {
        setError("Failed to fetch blogs.");
      }
    } catch (error) {
      setError("An error occurred while fetching blogs.");
      console.log(error);
    }
  };
  useEffect(() => {
    getUserBlogs();
  }, []);
  return (
    <div>
      {error && <h1>{error}</h1>}
      {blogs && blogs.length > 0 ? (
        blogs.map((blog) => (
          <BookCard
            key={blog._id} // Don't forget the key prop
            id={blog._id}
            isUser={true}
            title={blog.title}
            description={blog.description}
            image={blog.image}
            username={blog.user.username}
            time={blog.createdAt}
          />
        ))
      ) : (
        <h1>You Have not Created a blog</h1>
      )}
    </div>
  );
};
export default UserBooks;