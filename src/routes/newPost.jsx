import blogFetch from '../axios/config';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './NewPost.css';

const NewPost = () => {
    const navigate = useNavigate();
    
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [loading, setLoading] = useState(false);

    const createPost = async (e) => {
      //  Previne o comportamento padrão do formulário (recarregar a página)
        e.preventDefault();

        // Validação
        if (!title.trim() || !body.trim()) {
            alert('Preencha todos os campos!');
            return;
        }

        setLoading(true);
        
        const post = { title, body, userId: 1 };

        try {
            await blogFetch.post("/posts", post);
            alert('Post criado com sucesso!');
            navigate("/");
        } catch (error) {
            console.log(error);
            alert('Erro ao criar post. Tente novamente.');
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="new-post">
            <h2>Inserir novo post:</h2>
            <form onSubmit={createPost}>
                <div className="form-control">
                    <label htmlFor="title">Título:</label>
                    <input 
                        type='text' 
                        name='title' 
                        id='title' 
                        placeholder='Digite o título do post' 
                        value={title} 
                        onChange={(e) => setTitle(e.target.value)} 
                        disabled={loading}
                    />
                </div>

                <div className="form-control">
                    <label htmlFor="body">Conteúdo:</label>
                    <textarea 
                        name="body" 
                        id="body" 
                        placeholder='Digite o conteúdo do post'
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                        disabled={loading}
                    ></textarea>
                </div>
               
                <input 
                    type="submit" 
                    value={loading ? 'Criando...' : 'Criar post'} 
                    className='btn' 
                    disabled={loading}
                />
            </form>
        </div>
    )
}

export default NewPost