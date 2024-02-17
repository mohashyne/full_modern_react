import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'First Blog', body: 'This is the first blog.', author: 'John Doe', id:1 },
        { title: 'Second Blog', body: 'This is the Second blog.', author: 'MSA', id:2 },
        { title: 'Third Blog', body: 'This is the Third blog.', author: 'hauwa', id:3 }

    ]);


    return ( 
        <div className="home">
           <BlogList blogs={blogs} title="All Blogs"/>
        </div>
     );
}
 
export default Home;