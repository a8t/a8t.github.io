import React from 'react'
import Img from 'gatsby-image'

import Footer from './Footer'
import avatar from '../assets/images/hat.svg'

class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <Img
                    sizes={this.props.headerImage.sizes}
                    alt="header image"
                    style={{
                        position: 'absolute',
                        top: 0,
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: '100%',
                        objectFit: 'cover',
                    }}
                />
                <div className="inner">
                    <img src={avatar} alt="hat logo" className="hat" />
                    <h1 style={{ display: 'block' }}>
                        <strong>I'm Andy.</strong>
                        <p>
                            I'm a software developer, <br />
                            bike mechanic, and <br />recovering physicist.
                        </p>
                    </h1>
                </div>
                <Footer />
            </header>
        )
    }
}

export default Header
