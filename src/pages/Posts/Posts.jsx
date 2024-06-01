import { useEffect, useState } from "react";
import { getPosts } from "../../services/PostsService";
import { ScaleLoader } from "react-spinners";
import { Link } from "react-router-dom";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPosts()
      .then(postsAPI => {
        setPosts(postsAPI)
      })
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, [])
  
  return (
    <div>
      <h1 className="mt-4">Posts</h1>

      {loading ? (
        <div className="d-flex justify-content-center mt-4">
          <ScaleLoader />
        </div>
      ) : (
        <div className="row row-cols-1 g-3">
          {posts.map(post => (
            <div key={post.id} className="border border-primary p-2">
              <h1>{post.title}</h1>
              <Link className="btn btn-outline-primary" to={`/posts/${post.id}`}>Ver más</Link>
            </div>
          ))}
        </div>
      )}

    </div>
  )
}

export default Posts;