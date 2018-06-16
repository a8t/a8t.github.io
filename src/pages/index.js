import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'

// import Lightbox from 'react-images'
import Gallery from '../components/Gallery'
import Tech from '../components/Tech'
import { tech } from '../assets/vars.json'

import timetablr from '../assets/images/fulls/timetablr.jpg'
import userstories from '../assets/images/fulls/userstories.jpg'
import tuner from '../assets/images/fulls/tuner.jpg'
import kamalayan from '../assets/images/fulls/kamalayan.jpg'

const DEFAULT_IMAGES = [
    {
        id: '1',
        src: kamalayan,
        thumbnail: kamalayan,
        caption: 'Kamalayan',
        description: `Kamalayan is a Filipino youth media collective in Toronto.
                I rebuilt their website (including a CMS for blog content)
                to help promote their new summer 2018 Midya Project.`,
        demoLink: 'https://kamalayan.ca',
        repoLink: 'https://github.com/a8t/kamalayan/',
        techStack: [
            { name: 'React', type: tech.frontend },
            { name: 'SCSS', type: tech.frontend },
            { name: 'NetlifyCMS', type: tech.backend },
        ],
    },
    {
        id: '2',
        src: tuner,
        thumbnail: tuner,
        caption: 'WebTuner',
        description: `Guitar tuner apps often lack a convenience factor, requiring plugins or
                installation. I used browser web audio APIs to create a simple
                but sturdy tuner that works out of the box.`,
        demoLink: 'https://andytran.at/guitar-tuner',
        repoLink: 'https://github.com/a8t/guitar-tuner/',
        techStack: [
            { name: 'VueJS', type: tech.frontend },
            { name: 'Web Audio API', type: tech.misc },
        ],
    },
    {
        id: '3',
        src: timetablr,
        thumbnail: timetablr,
        caption: 'Timetablr',
        description: `One of my least favourite parts of each school year during university was
            scheduling courses by hand. We built Timetablr focusing on a fun,
            intuitive interface to improve that experience.
            `,
        demoLink: 'https://andytran.at/timetablr',
        repoLink: 'https://github.com/a8t/timetablr',
        techStack: [
            { name: 'React', type: tech.frontend },
            { name: 'Ruby on Rails', type: tech.backend },
        ],
    },
    {
        id: '4',
        src: userstories,
        thumbnail: userstories,
        caption: 'User Stories',
        description: `We needed a tool to organize our thoughts while
                building Timetablr, so I put together a simple drag-and-drop app for
                adding and sorting feature ideas. Every user has a story!`,
        demoLink: 'https://andytran.at/user-stories',
        repoLink: 'https://github.com/a8t/user-stories',
        techStack: [
            { name: 'VueJS', type: tech.frontend },
            { name: 'Firebase', type: tech.backend },
        ],
    },
]

class HomeIndex extends React.Component {
    constructor() {
        super()

        this.state = {
            lightboxIsOpen: false,
            currentImage: 0,
        }

        this.closeLightbox = this.closeLightbox.bind(this)
        this.gotoNext = this.gotoNext.bind(this)
        this.gotoPrevious = this.gotoPrevious.bind(this)
        this.openLightbox = this.openLightbox.bind(this)
        this.handleClickImage = this.handleClickImage.bind(this)
    }

    openLightbox(index, event) {
        event.preventDefault()
        this.setState({
            currentImage: index,
            lightboxIsOpen: true,
        })
    }
    closeLightbox() {
        this.setState({
            currentImage: 0,
            lightboxIsOpen: false,
        })
    }
    gotoPrevious() {
        this.setState({
            currentImage: this.state.currentImage - 1,
        })
    }
    gotoNext() {
        this.setState({
            currentImage: this.state.currentImage + 1,
        })
    }
    handleClickImage() {
        if (this.state.currentImage === this.props.images.length - 1) return

        this.gotoNext()
    }

    render() {
        const siteTitle = this.props.data.site.siteMetadata.title
        const siteDescription = this.props.data.site.siteMetadata.description

        return (
            <div>
                <Helmet>
                    <title>{siteTitle}</title>
                    <meta name="description" content={siteDescription} />
                    <meta property="og:title" content="Andy Tran" />
                    <meta
                        property="og:image"
                        content="https://i.imgur.com/LHWTvgj.jpg"
                    />
                </Helmet>

                <div id="main">
                    <section id="one">
                        <header className="major">
                            <h2>Things I Care About</h2>
                        </header>
                        <p>
                            I'm web developer. I prefer working a full stack
                            (with experience handling <strong>Rails</strong> and
                            <strong> Django</strong> backends), but I'm
                            especially passionate about building
                            <strong> responsive</strong>,
                            <strong> engaging</strong>, and
                            <strong> accessible interfaces</strong>. I'm a proud
                            JavaScript nerd, and I've worked with
                            <strong> PolymerJS</strong>,
                            <strong> Vue.js</strong>, and
                            <strong> React</strong>. I refuse to let myself stop
                            learning, and that's why the web is so awesome to
                            me—there will never be a shortage of things to
                            learn.
                        </p>
                        <p>
                            I love SVG and animation. I know my way around
                            Illustrator, and I'm picking up GSAP for animation
                            on the web. It's an exciting platform that's going
                            in exciting places!
                        </p>
                        <p>
                            My background is in physics. That was OK, but I much
                            prefer what I'm doing now with software. Outside of
                            work, I'm a serial hobbyist. I crochet, sew, fix
                            bikes, play guitar and lap steel, rock at Tetris,
                            and love cryptic crosswords. You could say that I'm
                            a jack of many trades, but mostly
                            <strong> I'm just terrified of being bored</strong>.
                        </p>
                        <p>
                            <a
                                target="_blank"
                                rel="noopener"
                                href="https://photos.google.com/share/AF1QipM3JLFmxKJLNmuZuQHjt7LpUI7ZbVATlwnjx7DFpTOOkKW7pHdklVxvi8-uzUM4fg?key=bTVWTWNpTGExdXFoVy14cjZiZ21iUm5ELVZfMFpn"
                            >
                                Here are some photos of my dog
                            </a>
                            . His name is Scrappy and he's a 16-year-old bichon.
                            What a little cutie.
                        </p>
                        <p>
                            And finally,{' '}
                            <a
                                target="_blank"
                                rel="noopener"
                                href="https://drive.google.com/file/d/1HCQ63qxR0ZSxvODmlM-1i_WbTwgy9i2_/view"
                            >
                                here's a copy of my resume
                            </a>. Right now I'm open to hearing about freelance,
                            contract, and full-time work in Toronto. Thanks for
                            reading.
                        </p>
                    </section>

                    <section id="projects">
                        <h2>Projects</h2>

                        <p>
                            Here are some projects I've put together that I'm
                            fond of. All projects have live demos and the
                            codebases are available on GitHub!
                        </p>
                        <div>Legend:</div>
                        <p>
                            <Tech color={tech.frontend}>Front-End</Tech>
                            <Tech color={tech.backend}>Back-End</Tech>
                            <Tech color={tech.misc}>Miscellaneous</Tech>
                        </p>

                        <Gallery images={[...DEFAULT_IMAGES]} />
                    </section>

                    <section id="three">
                        <h2>Get In Touch!</h2>
                        <p>
                            I'd love to hear from you. You can reach me either
                            via the form below or via the social media links.
                            I'll definitely get back to you ASAP!
                        </p>
                        <div className="row">
                            <div className="8u 12u$(small)">
                                <form
                                    method="post"
                                    action="https://formspree.io/me@andytran.at"
                                >
                                    <div className="row uniform 50%">
                                        <div className="6u 12u$(xsmall)">
                                            <input
                                                type="text"
                                                name="name"
                                                id="name"
                                                placeholder="Name"
                                            />
                                        </div>
                                        <div className="6u 12u$(xsmall)">
                                            <input
                                                type="email"
                                                name="email"
                                                id="email"
                                                placeholder="Email"
                                            />
                                        </div>
                                        <div className="12u">
                                            <textarea
                                                name="message"
                                                id="message"
                                                placeholder="Message"
                                                rows="4"
                                            />
                                        </div>
                                    </div>
                                    <input
                                        className="form-submit"
                                        type="submit"
                                        value="Send Message"
                                    />
                                </form>
                            </div>
                            <div className="4u 12u$(small)">
                                <ul className="labeled-icons">
                                    <li>
                                        <a
                                            href="https://www.linkedin.com/in/andy8tran"
                                            target="_blank"
                                            rel="noopener"
                                        >
                                            <h3 className="icon fa-linkedin-square">
                                                <span className="label">
                                                    LinkedIn
                                                </span>
                                            </h3>
                                            andy8tran
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://github.com/a8t"
                                            target="_blank"
                                            rel="noopener"
                                        >
                                            <h3 className="icon fa-github">
                                                <span className="label">
                                                    Github
                                                </span>
                                            </h3>
                                            a8t
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://codepen.io/a8t/pens/public/"
                                            target="_blank"
                                            rel="noopener"
                                        >
                                            <h3 className="icon fa-codepen">
                                                <span className="label">
                                                    CodePen
                                                </span>
                                            </h3>
                                            a8t
                                        </a>
                                    </li>
                                    <li>
                                        <a href="mailto:me@andytran.at">
                                            <h3 className="icon fa-envelope-o">
                                                <span className="label">
                                                    Email
                                                </span>
                                            </h3>
                                            me@andytran.at
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        )
    }
}

export default HomeIndex

export const pageQuery = graphql`
    query PageQuery {
        site {
            siteMetadata {
                title
                description
            }
        }
    }
`
