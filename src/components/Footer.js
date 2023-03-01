import React from 'react'

// IMPORTING PAGE LINKS ARRAY
import { socialLinks } from '../data'

import PageLinks from './PageLinks'

function Footer() {
    return (

        <footer footer className="section footer" >

            {/* MAKING PAGE LINKS AS ANOTHER COMPONENT */}

            <PageLinks links="footer-links" child="footer-link" />


            {/* DISPLAYING THE LINKS IN THE FOOTER THAT ARE PAGE LINKS
            <ul className="footer-links" id="footer-links">
                {
                    pageLinks.map((link) => {

                        const { id, href, text } = link

                        return (
                            <li key={id}>
                                <a href={href} className="footer-link"> {text} </a>
                            </li>
                        )
                    })
                }
            </ul> */}



            {/* DISPLAYING THE LINKS IN THE NAVBAR THAT ARE SOCIALLINKS */}
            <ul className="footer-icons">

                {
                    socialLinks.map((link) => {

                        const { id, href, icon } = link

                        return (

                            <li key={id}>

                                <a
                                    href={href}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="footer-icon">

                                    <i className={icon}></i>
                                </a>
                            </li>

                        )
                    })
                }


            </ul>

            <p className="copyright">
                copyright &copy; Backroads travel tours company
                <span id="date">{new Date().getFullYear()}</span> all rights reserved
            </p>


        </footer >
    )
}

export default Footer