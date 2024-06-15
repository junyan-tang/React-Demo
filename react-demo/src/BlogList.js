const BlogList = ( {blogs, title, handleDelete}) => {
    const blogs = props.blogs;
    
    return (  
        <div className="blog-list">
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{ blog.title }</h2>
                    <p>Written by { blog.author }</p>
                    <button onClick={()=> handleDelete(blog.idf)}>delete blog</button>
                </div>
            ))}
        </div>
    );
}
 
export default BlogList;