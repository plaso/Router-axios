import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { getPost } from "../../services/PostsService";
import { ScaleLoader } from "react-spinners";

const PostDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true)

    getPost(id)
      .then((post) => {
        setPost(post)
      })
      .catch(err => {
        console.error(err)
        navigate('/not-found')
      })
      .finally(() => setLoading(false))
  }, [id, navigate])

  return (
    <div>
      {loading ? (
        <div className="d-flex justify-content-center mt-4">
          <ScaleLoader />
        </div>
      ) : (
        <div>
          <h1>{post?.title}</h1>
          <p>{post?.body}</p>

          <div>
            <Link className="btn btn-outline-primary" to={`/posts/${Number(id) - 1}`}>Ir a anterior</Link>
            <Link className="btn btn-outline-primary" to={`/posts/${Number(id) + 1}`}>Ir a siguiente</Link>
          </div>
        </div>
      )}
    </div>
  )
}

export default PostDetail;