const BlogList = ({ blogs, title }) => {

    return ( 
        <div className="blog-list">
            <h2>{title}</h2>
            {
            blogs.map(blog => {
                return (
                    <div key={blog.id} className='blog-preview'>
                        <h2>{blog.title}</h2>
                        <span>Written By: {blog.author}</span>
                    </div>
                )
            })
           } 
        </div>
     );
}
 
export default BlogList;


// INSTEAD OF THIS CODE BELOW , WE CAN MAKE IT SIMPLER  WITH THE CODE ABOVE
// const BlogList = (props) => {
//     const blogs = props.blogs;
//     const tittle = props.tittle;
   
//        return ( 
//            <div className="blog-list">
//                <h2>{tittle}</h2>
//                {
//                blogs.map(blog => {
//                    return (
//                        <div key={blog.id} className='blog-preview'>
//                            <h2>{blog.title}</h2>
//                            <span>Written By: {blog.author}</span>
//                        </div>
//                    )
//                })
//               } 
//            </div>
//         );
//    }
    
//    export default BlogList;