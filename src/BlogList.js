
const BlogList = ({blogs,titulo}) => {

    /* const blogs = props.blogs;
    const titulo = props.titulo; */
    


    return ( 
        <div className="blog-list">
            <h2>{titulo}</h2>
            {blogs.map((blog)=>
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.titulo}</h2>
                    <p>Escrito por {blog.autor}.</p>
                </div>
            )}
        </div>
    );
}
 
export default BlogList;

/* 
    http://localhost:8000/blogs     get     all
    http://localhost:8000/blogs/id  get     1 blog
    http://localhost:8000/blogs     post    add blog
    http://localhost:8000/blogs/id  delete  delete blog 
*/