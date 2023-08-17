import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/home.tsx'
import AboutPage from './pages/about.tsx'
import ContactPage from './pages/contact.tsx'
import PricingPage from './pages/pricing.tsx'
import SpacePage from './pages/space.tsx'
import {NAVBAR_LINKS} from "@/components/Templates/data.ts";

const router = createBrowserRouter([
    {
        path: `/`,
        element: <HomePage />,
    },
    {
        path: `/${NAVBAR_LINKS[0]}`,
        element: <AboutPage />,
    },
    {
        path: `/${NAVBAR_LINKS[4].replace(' ','-')}`,
        element: <ContactPage />,
    },
    {
        path: `/${NAVBAR_LINKS[1]}`,
        element: <PricingPage />,
    },
    {
        path: `/${NAVBAR_LINKS[3]}`,
        element: <SpacePage />,
    },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)
