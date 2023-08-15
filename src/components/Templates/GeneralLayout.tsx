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
                <main className='py-28'>
                    {children}
                </main>
            <Footer />
        </>
    )
}

export default GeneralLayout
