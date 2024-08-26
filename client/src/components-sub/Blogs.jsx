import BlogCard from "./BlogCard.jsx";
import { useState, useEffect } from 'react';


export default function Blogs() {
    const [blogList, setBlogList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

        const fetchBlogs = async () => {
            try {
                const response = await fetch('http://localhost:5001/messages/messages');
                if (!response.ok) {
                    throw new Error('Failed to fetch blogs');
                }
                const data = await response.json();

                const sortData = data.sort((a,b)=> b.messageid - a.messageid);

                setBlogList(sortData);
            } catch (error) {
                console.error('Error fetching blog data:', error);
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchBlogs();
        const interValId = setInterval(fetchBlogs, 5000);
        return () => clearInterval(interValId);
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <div className={'border overflow-hidden'}>
            <ul className={'space-y-8 max-h-[800px] overflow-auto'}>
                {blogList.map(({ messageid, message }) => (
                    <li key={messageid}>
                        <BlogCard messageid={messageid} message={message} />
                    </li>
                ))}
            </ul>
        </div>
    );
}
