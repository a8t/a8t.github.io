import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Portfolio from './portfolio'
import Contact from './contact'

function HomeIndex({ data }) {
  const { site, headerImage, posts } = data

  const { title: siteTitle, description: siteDescription } = site.siteMetadata

  return (
    <Layout headerImage={headerImage}>
      <div>
        <Helmet>
          <title>{siteTitle}</title>
          <meta name="description" content={siteDescription} />
          <meta property="og:title" content="Andy Tran" />
          <meta property="og:image" content="https://i.imgur.com/LHWTvgj.jpg" />
        </Helmet>

        <div id="main">
          <Portfolio />

          {posts.edges.map(({ node }) => {
            const { frontmatter, html } = node
            const { sectionId, title } = frontmatter
            return (
              <section id={sectionId} key={sectionId}>
                <header className="major">
                  <h2>{title}</h2>
                </header>
                <div dangerouslySetInnerHTML={{ __html: html }} />
              </section>
            )
          })}

          <Contact />
        </div>
      </div>
    </Layout>
  )
}

export default HomeIndex

export const pageQuery = graphql`
  query HeaderQuery {
    site {
      siteMetadata {
        title
        description
      }
    }

    headerImage: imageSharp(fluid: { originalName: { regex: "/bg.jpg/" } }) {
      fluid(maxWidth: 1240) {
        ...GatsbyImageSharpFluid
      }
    }

    posts: allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            title
          }
          html
        }
      }
    }
  }
`
