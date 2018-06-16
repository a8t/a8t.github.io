import React from 'react'

class Footer extends React.Component {
    render() {
        return (
            <div id="footer">
                <div className="inner">
                    <ul className="icons">
                        <li>
                            <a
                                href="https://www.linkedin.com/in/andy8tran"
                                target="_blank"
                                rel="noopener"
                                className="icon fa-linkedin-square"
                            >
                                <span className="label">LinkedIn</span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://github.com/a8t"
                                target="_blank"
                                rel="noopener"
                                className="icon fa-github"
                            >
                                <span className="label">Github</span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://codepen.io/a8t/pens/public/"
                                target="_blank"
                                rel="noopener"
                                className="icon fa-codepen"
                            >
                                <span className="label">CodePen</span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="mailto:me@andytran.at"
                                className="icon fa-envelope-o"
                            >
                                <span className="label">Email</span>
                            </a>
                        </li>
                    </ul>
                    <ul className="copyright">
                        <li>
                            Made with &hearts; using{' '}
                            <a
                                href="https://www.gatsbyjs.org/"
                                target="_blank"
                                rel="noopener"
                            >
                                GatsbyJS
                            </a>
                        </li>
                        <li>
                            Design:{' '}
                            <a href="https://html5up.net/" target="_blank">
                                HTML5Up
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Footer
