
import styles from "./Dashbord.module.css"

import { Link } from "react-router-dom"

// hooks
import { useAuthValue } from "../../context/AuthContext"
import { useFetchDocumentos } from "../../hooks/useFetchDocumentos";
import { useDeleteDocument } from "../../hooks/useDeleteDocument";


function Dashboard() {
  const { user } = useAuthValue();
  const uid = user.uid;

  // posts do usuário
  const { documents: posts, loading } = useFetchDocumentos("posts", null, uid);

  const {deleteDocument} = useDeleteDocument("posts");
  
  
  if (loading) {
    return <p>Carregando...</p>
  }

  return (
    <div className={styles.dashboard}>
      <h2>Dashboard</h2>
      <p>Gerencie os seus posts</p>
      {posts && posts.length === 0 ? (
        <div className={styles.noposts}>
          <p>Não foram encontrados posts</p>
          <Link to="/posts/create" className="btn">
            Criar primeiro post
          </Link>
        </div>
      ) : (
        <div className={styles.post_header}>
          <span>Título</span>
          <span>Ações</span>
        </div>
      )}

      {posts &&
        posts.map((post) => (
          <div className={styles.post_row} key={post.id}>
            <p>{post.title}</p>
            <div className={styles.actions}>
              <Link to={`/posts/${post.id}`} className="btn btn-outline">
                Ver
              </Link>
              <Link to={`/posts/edit/${post.id}`} className="btn btn-outline">
                Editar
              </Link>
              <button
                onClick={() => deleteDocument(post.id)}
                className="btn btn-outline btn-danger"
              >
                Excluir
              </button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Dashboard;