import React, { useEffect, useState } from 'react';
import PostDisplay from './PostDisplay';

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://research-finder-server.vercel.app/posts'); // Adjust to your API endpoint if necessary
        if (!response.ok) {
          throw new Error('Failed to fetch posts');
        }
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="App">
      <h1>Research Posts</h1>
      {loading ? (
        <p>Loading posts...</p>
      ) : (
        posts.map((post, index) => <PostDisplay key={index} data={post} />)
      )}
    </div>
  );
}

export default App;
