import blogFetch from '../axios/config';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EditPost = () => {

    const navigate = useNavigate();

    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    const {id} = useParams();

    const getPost = async() => {
        try {
            const response = await blogFetch.get(`/posts/${id}`);

            setTitle(response.data.title);
            setBody(response.data.body);

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getPost();
    }, [id]);

    const editPost = async (e) => {
        e.preventDefault();
        
        const updatedPost = { title, body, userId: 1 };
        
        try {
            await blogFetch.put(`/posts/${id}`, updatedPost);
            navigate('/admin');  // Volta para o admin após editar
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="new-post">
        <h2>Editando: {title}</h2>
        <form onSubmit={editPost}>
        <div className="form-control">
            <label htmlFor="title">Título:</label>
            <input type='text' name='title' id='title' placeholder='Digite o título do post' onChange={(e) => setTitle(e.target.value)}
            value={title || ""} />
        </div>

        <div className="form-control">
            <label htmlFor="body">Conteúdo:</label>
            <textarea name="body" id="body" placeholder='Digite o conteúdo do post' onChange={(e) => setBody(e.target.value)}             value={body || ""}></textarea>
        </div>
        
        <input type="submit" value="Editar post" className='btn' />
        </form>
    </div>
    )
}

export default EditPost