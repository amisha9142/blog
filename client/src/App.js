// import Header from "./components/Header";
// import { Routes, Route } from "react-router-dom";
// import Blogs from "./pages/Blogs";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import UserBlogs from "./pages/UserBlogs";
// import CreateBlog from "./pages/CreateBlog";
// import BlogDetails from "./pages/BlogDetails";
// import { Toaster } from "react-hot-toast";
// function App() {
//   return (
//     <>
//       <Header />
//       <Toaster />
//       <Routes>
//         <Route path="/" element={<Blogs />} />
//         <Route path="/blogs" element={<Blogs />} />
//         <Route path="/my-blogs" element={<UserBlogs />} />
//         <Route path="/blog-details/:id" element={<BlogDetails />} />
//         <Route path="/create-blog" element={<CreateBlog />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />
//       </Routes>
//     </>
//   );
// }

// export default App;



import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Books from "./pages/Books";          // Renamed from Blogs to Books
import Login from "./pages/Login";
import Register from "./pages/Register";
import UserBooks from "./pages/UserBooks";  // Renamed from UserBlogs to UserBooks
import CreateBook from "./pages/CreateBook";  // Renamed from CreateBlog to CreateBook
import BookDetails from "./pages/BookDetails";  // Renamed from BlogDetails to BookDetails
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Header />
      <Toaster />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/books" element={<Books />} />
        <Route path="/my-books" element={<UserBooks />} />
        <Route path="/book-details/:id" element={<BookDetails />} />
        <Route path="/add-book" element={<CreateBook />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
