import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'

// import Lightbox from 'react-images'
import Gallery from '../components/Gallery'

import thumb01 from '../assets/images/thumbs/01.jpg'
import thumb02 from '../assets/images/thumbs/02.jpg'
import thumb03 from '../assets/images/thumbs/03.jpg'
import thumb04 from '../assets/images/thumbs/04.jpg'
import thumb05 from '../assets/images/thumbs/05.jpg'
import thumb06 from '../assets/images/thumbs/06.jpg'

import full01 from '../assets/images/fulls/01.jpg'
import full02 from '../assets/images/fulls/02.jpg'
import full03 from '../assets/images/fulls/03.jpg'
import full04 from '../assets/images/fulls/04.jpg'
import full05 from '../assets/images/fulls/05.jpg'
import full06 from '../assets/images/fulls/06.jpg'

const DEFAULT_IMAGES = [
    {
        id: '1',
        src: full01,
        thumbnail: thumb01,
        caption: 'Photo 1',
        description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.',
    },
    {
        id: '2',
        src: full02,
        thumbnail: thumb02,
        caption: 'Photo 2',
        description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.',
    },
    {
        id: '3',
        src: full03,
        thumbnail: thumb03,
        caption: 'Photo 3',
        description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.',
    },
    {
        id: '4',
        src: full04,
        thumbnail: thumb04,
        caption: 'Photo 4',
        description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.',
    },
    {
        id: '5',
        src: full05,
        thumbnail: thumb05,
        caption: 'Photo 5',
        description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.',
    },
    {
        id: '6',
        src: full06,
        thumbnail: thumb06,
        caption: 'Photo 6',
        description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.',
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
                                href="https://drive.google.com/file/d/1HCQ63qxR0ZSxvODmlM-1i_WbTwgy9i2_/view"
                            >
                                here's a copy of my resume
                            </a>. Right now I'm open to hearing about freelance,
                            contract, and full-time work in Toronto. Thanks for
                            reading.
                        </p>
                    </section>

                    <section id="two">
                        <h2>Projects</h2>

                        <p>
                            Here's some stuff I've put together that I'm fond
                            of.
                        </p>

                        <Gallery
                            images={DEFAULT_IMAGES.map(
                                ({
                                    id,
                                    src,
                                    thumbnail,
                                    caption,
                                    description,
                                }) => ({
                                    src,
                                    thumbnail,
                                    caption,
                                    description,
                                })
                            )}
                        />
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
