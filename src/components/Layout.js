import React from 'react'
import Link from 'gatsby-link'
import '../assets/scss/main.scss'

import Header from './Header'

function Layout({ headerImage, children }) {
    return (
        <div className="template-container">
            <Header headerImage={headerImage} />
            {children}
        </div>
    )
}

export default Layout
