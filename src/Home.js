import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState(null);


    //  using dependency array to run the use effect only when the component mounts.  
    useEffect(() => {
     fetch('http://localhost:8000/blogs')
        .then(res => {
            return res.json();
        })
        .then(data => {
            setBlogs(data);
            // console.log(data)
        })
    }, []);  // Only re-run if `blogs` changes, if it is an empty array so it only runs once when the component mounts


    return ( 
        <div className="home">
          { blogs && <BlogList blogs={blogs} title="All Blogs" /> }
        </div>
     );
}
 
export default Home;