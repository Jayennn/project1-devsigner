import Header from './Header.tsx'
import Footer from './Footer.tsx'
import React from 'react'

type LayoutProps = {
    children: React.ReactNode
}
const AboutLayout = ({ children }: LayoutProps) => {
    return (
        <>
            <Header theme={"blue"} />
            <main>
                {children}
            </main>
            <Footer />
        </>
    )
}

export default AboutLayout
