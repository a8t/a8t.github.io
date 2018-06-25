import React from 'react'
import Link from 'gatsby-link'
import '../assets/scss/main.scss'

import Header from '../components/Header'

class Template extends React.Component {
    render() {
        const { children, data } = this.props
        return (
            <div className="template-container">
                <Header headerImage={data.headerImage} />
                {children()}
            </div>
        )
    }
}

Template.propTypes = {
    children: React.PropTypes.func,
}

export default Template

export const pageQuery = graphql`
    query HeaderQuery {
        site {
            siteMetadata {
                title
                description
            }
        }

        headerImage: imageSharp(id: { regex: "/bg.jpg/" }) {
            sizes(maxWidth: 1240) {
                ...GatsbyImageSharpSizes
            }
        }
    }
`
