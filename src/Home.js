import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'First Blog', body: 'This is the first blog.', author: 'hauwa', id:1 },
        { title: 'Second Blog', body: 'This is the Second blog.', author: 'MSA', id:2 },
        { title: 'Third Blog', body: 'This is the Third blog.', author: 'hauwa', id:3 }

    ]);

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    };
    
       
    useEffect(() => {
     console.log('use effect ran');
     console.log(blogs);
    });


    return ( 
        <div className="home">
           <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
           <BlogList blogs={blogs.filter((blog) => blog.author === "hauwa")} title="Hauwa's Blogs" handleDelete={handleDelete}/>
        </div>
     );
}
 
export default Home;