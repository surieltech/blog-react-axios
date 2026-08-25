# 📝 SuriBlog - Blog com Painel Administrativo

Blog completo desenvolvido com **React** e **Vite**, consumindo a API do JSONPlaceholder para gerenciamento de posts com sistema de autenticação, temas dark/light e painel administrativo.
---

## ✨ Funcionalidades

- ✅ Listar, criar, editar e excluir posts
- ✅ Sistema de login com rotas protegidas
- ✅ Dark/Light Mode com persistência
- ✅ Navbar fixa e Footer
- ✅ Painel administrativo exclusivo
- ✅ Persistência de dados no localStorage

---

## 🔐 Credenciais de Teste

| Campo | Valor |
|-------|-------|
| **Email** | `admin@blog.com` |
| **Senha** | `123456` |

---

## 🛠️ Tecnologias Utilizadas

- React 18
- React Router DOM 6.20
- Axios 1.6
- React Icons 4.11
- Vite 4
- Context API
- localStorage

---

## 🔌 Consumo de API

O projeto consome a **JSONPlaceholder API** através do Axios.

### Endpoints Utilizados

| Método | Endpoint | Funcionalidade |
|--------|----------|----------------|
| `GET` | `/posts` | Listar todos os posts |
| `GET` | `/posts/:id` | Buscar post específico |
| `POST` | `/posts` | Criar novo post |
| `PUT` | `/posts/:id` | Atualizar post |
| `DELETE` | `/posts/:id` | Excluir post |

### Exemplo de Uso

```javascript
// Buscar todos os posts
const response = await blogFetch.get('/posts');
setPosts(response.data);

// Criar novo post
await blogFetch.post('/posts', { title, body, userId: 1 });

📝 Licença
Este projeto é de código aberto e pode ser usado livremente para fins educacionais ou pessoais.