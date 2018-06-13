import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/hat.svg'

class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <div className="inner">
                    <img src={avatar} alt="hat logo" className="hat" />
                    <h1>
                        <strong>I'm Andy.</strong>
                        <p>
                            I'm a software developer, <br /> former bike
                            mechanic,
                            <br /> and recovering physicist.
                        </p>
                    </h1>
                </div>
                <Footer />
            </header>
        )
    }
}

export default Header
