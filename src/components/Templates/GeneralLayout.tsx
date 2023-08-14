import Header from './Header.tsx'
import Footer from './Footer.tsx'
import React from 'react'

type LayoutProps = {
    children: React.ReactNode
}
const GeneralLayout = ({ children }: LayoutProps) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}

export default GeneralLayout
