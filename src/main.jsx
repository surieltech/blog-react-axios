import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
//importando o theme context pro toggle de light/dark mode
import { ThemeProvider } from './contexts/ThemeContext';
import { AuthProvider } from './contexts/AuthContext';
import App from './App.jsx'
import './index.css'

// rotas propriamente ditas
import Home from './routes/Home.jsx'
import NewPost from './routes/NewPost.jsx'
import Post from './routes/Post.jsx'
import Admin from './routes/Admin.jsx'
import EditPost from './routes/EditPost.jsx'
import Login from './routes/Login.jsx'; 

import ProtectedRoute from './components/ProtectedRoute'; 

const router = createBrowserRouter([
    {
        element: <App />,
        children: [
            // Rotas PÚBLICAS (qualquer um pode acessar)
            { path: "/", element: <Home /> },
            { path: "/login", element: <Login /> },  // ← ROTA DE LOGIN
            { path: "/posts/:id", element: <Post /> },
            
            // Rotas PROTEGIDAS (precisa estar logado)
            { 
                path: "/new", 
                element: (
                    <ProtectedRoute>
                        <NewPost />
                    </ProtectedRoute>
                )
            },
            { 
                path: "/admin", 
                element: (
                    <ProtectedRoute>
                        <Admin />
                    </ProtectedRoute>
                )
            },
            { 
                path: "/posts/edit/:id", 
                element: (
                    <ProtectedRoute>
                        <EditPost />
                    </ProtectedRoute>
                )
            },
        ],
    },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </ThemeProvider>
  </StrictMode>,
)