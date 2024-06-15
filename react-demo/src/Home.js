import { useState, useEffect} from 'react'
import BlogList from './BlogList';

const Home = () => {
    //let name = 'mario'
    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);
    
    const handleDelete = (id) => {
        const newBlogs = blogs.filter( (blog) => blog.id !== id)
        setBlogs(newBlogs);
    }
    useEffect( () => {
        fetch('http://localhost:8000/blog')
            .then(res => {
                if (!res.ok) {
                    throw Error("could not fetch data")
                }
                return res.json();
            })
            .then(data => {
                setBlogs(data);
                setIsPending(false);
            })
            .catch((err) => {
                console.log(err.message);
            })
    }, []);

    return (  
        <div className="home">
            { isPending && <div> Loading.. </div> }
            { blogs && <BlogList blogs={blogs} title = 'All blogs' handleDelete={handleDelete} /> }
        </div>
    );
}
 
export default Home;