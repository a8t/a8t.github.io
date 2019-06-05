import React from 'react'

function Contact({ data }) {
  return (
    <section id="contact">
      <header className="major">
        <h2>Get In Touch!</h2>
      </header>
      <p>
        I'd love to hear from you. You can reach me either via the form below or
        via the social media links. I'll definitely get back to you ASAP!
      </p>
      <div className="row">
        <div className="8u 12u$(small)">
          <form method="post" action="https://formspree.io/me@andytran.ca">
            <div className="row uniform 50%">
              <div className="6u 12u$(xsmall)">
                <input type="text" name="name" id="name" placeholder="Name" />
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
            <input className="form-submit" type="submit" value="Send Message" />
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
                  <span className="label">LinkedIn</span>
                </h3>
                andy8tran
              </a>
            </li>
            <li>
              <a href="https://github.com/a8t" target="_blank" rel="noopener">
                <h3 className="icon fa-github">
                  <span className="label">Github</span>
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
                  <span className="label">CodePen</span>
                </h3>
                a8t
              </a>
            </li>
            <li>
              <a href="mailto:me@andytran.ca">
                <h3 className="icon fa-envelope-o">
                  <span className="label">Email</span>
                </h3>
                me@andytran.ca
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Contact
