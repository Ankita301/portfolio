import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Layout from './components/Layout'
import Home from './pages/Home'
import ProjectPage from './pages/ProjectPage'
import About from './pages/About'

// Matches Vite's base so project-site paths (/portfolio/...) resolve.
const basename = import.meta.env.BASE_URL.replace(/\/$/, '')

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/projects/:slug', element: <ProjectPage /> },
      { path: '/about', element: <About /> },
      { path: '*', element: <Home /> },
    ],
  },
], { basename })

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
