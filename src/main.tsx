import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/home.tsx'
import AboutPage from './pages/about.tsx'
import ContactPage from './pages/contact.tsx'
import PricingPage from './pages/pricing.tsx'
import SpacePage from './pages/space.tsx'

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomePage />,
    },
    {
        path: '/about',
        element: <AboutPage />,
    },
    {
        path: '/contact',
        element: <ContactPage />,
    },
    {
        path: '/pricing',
        element: <PricingPage />,
    },
    {
        path: '/space',
        element: <SpacePage />,
    },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)
