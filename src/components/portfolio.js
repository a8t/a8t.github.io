import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Gallery from './Gallery'
import Tech from './Tech'
import GalleryItem from './GalleryItem'
import { tech } from '../assets/vars.json'

import timetablr from '../assets/images/fulls/timetablr.gif'
import roomvo from '../assets/images/fulls/roomvo.gif'
import userstories from '../assets/images/fulls/userstories.jpg'
import tuner from '../assets/images/fulls/tuner.gif'
import kamalayan from '../assets/images/fulls/kamalayan.gif'

import timetablrThumb from '../assets/images/thumbs/timetablrThumb.jpg'
import roomvoThumb from '../assets/images/thumbs/roomvoThumb.jpg'
import userstoriesThumb from '../assets/images/thumbs/userstoriesThumb.jpg'
import tunerThumb from '../assets/images/thumbs/tunerThumb.jpg'
import kamalayanThumb from '../assets/images/thumbs/kamalayanThumb.jpg'

const TechContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 10px;
`

const DEFAULT_IMAGES = [
  {
    id: 'roomvo',
    src: roomvo,
    thumbnail: roomvoThumb,
    caption: 'Roomvo',
    description: `At roomvo I worked on the landing page as well as the visualizer app
                and backend infrastructure for a CRM. Django for the backend (analytics,
                database interactions) and Polymer for the frontend.`,
    demoLink: 'https://www.roomvo.com',
    techStack: [
      { name: 'PolymerJS', type: tech.frontend },
      { name: 'Django (Python)', type: tech.backend },
    ],
  },
  {
    id: '1',
    src: kamalayan,
    thumbnail: kamalayanThumb,
    caption: 'Kamalayan',
    description: `Kamalayan is a Filipino youth media collective in Toronto.
                I rebuilt their website (including a CMS for blog content)
                to help promote their new summer 2018 Midya Project.`,
    demoLink: 'https://kamalayan.ca',
    repoLink: 'https://github.com/a8t/kamalayan/',
    techStack: [
      { name: 'React', type: tech.frontend },
      { name: 'SCSS', type: tech.frontend },
      { name: 'Netlify', type: tech.backend },
    ],
  },
  {
    id: '2',
    src: tuner,
    thumbnail: tunerThumb,
    caption: 'WebTuner',
    description: `Guitar tuner apps often lack a convenience factor, requiring plugins or
                installation. I used browser web audio APIs to create a simple
                but sturdy tuner that works out of the box.`,
    demoLink: 'https://www.webtuner.app',
    repoLink: 'https://github.com/a8t/guitar-tuner/',
    techStack: [
      { name: 'VueJS', type: tech.frontend },
      { name: 'Web Audio API', type: tech.misc },
    ],
  },
  {
    id: '3',
    src: timetablr,
    thumbnail: timetablrThumb,
    caption: 'Timetablr',
    description: `One of my least favourite parts of each school year during university was
            scheduling courses by hand. We built Timetablr focusing on a fun,
            intuitive interface to improve that experience.
            `,
    demoLink: 'https://timetablr.com',
    repoLink: 'https://github.com/a8t/timetablr',
    techStack: [
      { name: 'React', type: tech.frontend },
      { name: 'Ruby on Rails', type: tech.backend },
    ],
  },
  // {
  //   id: '4',
  //   src: userstories,
  //   thumbnail: userstoriesThumb,
  //   caption: 'User Stories',
  //   description: `We needed a tool to organize our thoughts while
  //               building Timetablr, so I put together a simple drag-and-drop app for
  //               adding and sorting feature ideas. Every user has a story!`,
  //   demoLink: 'https://andytran.ca/user-stories',
  //   repoLink: 'https://github.com/a8t/user-stories',
  //   techStack: [
  //     { name: 'VueJS', type: tech.frontend },
  //     { name: 'Firebase', type: tech.backend },
  //   ],
  // },
]

const GalleryContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  @media screen and (max-width: 862px) {
    flex-direction: column;
  }
`

const Portfolio = ({ data }) => {
  return (
    <section id="Portfolio">
      <header className="major">
        <h2>Portfolio</h2>
      </header>

      <TechContainer>
        <Tech type={tech.frontend}>Frontend</Tech>
        <Tech type={tech.backend}>Backend</Tech>
        <Tech type={tech.misc}>Misc</Tech>
      </TechContainer>

      <GalleryContainer>
        {DEFAULT_IMAGES.map(
          ({
            id,
            src,
            thumbnail,
            caption,
            demoLink,
            repoLink,
            techStack,
            description,
          }) => {
            return (
              <GalleryItem
                key={id}
                {...{
                  src,
                  thumbnail,
                  caption,
                  demoLink,
                  repoLink,
                  techStack,
                  description,
                }}
              />
            )
          }
        )}
      </GalleryContainer>
    </section>
  )
}

export default Portfolio

// export const pageQuery = graphql`
//   query PortfolioQuery {
//     portfolioItems: allMarkdownRemark(
//       filter: { fileAbsolutePath: { regex: "/(portfolio_pieces)/.*.md$/" } }
//     ) {
//       nodes {
//         frontmatter {
//           id
//           src
//           thumbnail {
//             childImageSharp {
//               fixed(height: 230) {
//                 srcSet
//               }
//             }
//           }
//           caption
//           demoLink
//           repoLink
//           frontend
//           backend
//           misc
//         }
//         html
//       }
//     }
//   }
// `
