import { useState } from "react";

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'First Blog', body: 'This is the first blog.', author: 'John Doe', id:1 },
        { title: 'Second Blog', body: 'This is the Second blog.', author: 'MSA', id:2 },
        { title: 'Third Blog', body: 'This is the Third blog.', author: 'hauwa', id:3 }

    ]);


    return ( 
        <div className="home">
           {
            blogs.map(blog => {
                return (
                    <div key={blog.id} className='blog-preview'>
                        <h2>{blog.title}</h2>
                        <p>{blog.body}</p>
                        <span>Written By: {blog.author}</span>
                    </div>
                )
            })
           } 
        </div>
     );
}
 
export default Home;