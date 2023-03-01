import React from 'react'

// IMPORTING THE LOGO
import logo from "../images/logo.svg"

// IMPORTING PAGE LINKS ARRAY
import { socialLinks } from '../data'

import PageLinks from './PageLinks'


function Navbar() {
    return (
        <>
            <nav className="navbar">

                <div className="nav-center">

                    <div className="nav-header">

                        <img src={logo} className="nav-logo" alt="backroads" />
                        <button type="button" className="nav-toggle" id="nav-toggle">
                            <i className="fas fa-bars"></i>
                        </button>

                    </div>


                    {/* DISPLAYING THE LINKS IN THE NAVBAR THAT ARE PAGE LINKS */}

                    {/* MAKING PAGE LINKS AS ANOTHER COMPONENT */}

                    <PageLinks links="nav-links" child="nav-link" />


                    {/* <ul className="nav-links" id="nav-links">

                        {
                            pageLinks.map((link) => {

                                const { id, href, text } = link

                                return (
                                    <li key={id}>
                                        <a href={href} className="nav-link"> {text} </a>
                                    </li>
                                )
                            })
                        }
                    </ul> */}

                    {/* DISPLAYING THE LINKS IN THE NAVBAR THAT ARE SOCIALLINKS */}
                    <ul className="nav-icons">

                        {
                            socialLinks.map((link) => {

                                const { id, href, icon } = link

                                return (

                                    <li key={id}>

                                        <a href={href} target="_blank" rel="noreferrer" className="nav-icon">

                                            <i className={icon}></i>
                                        </a>
                                    </li>

                                )
                            })
                        }

                    </ul>

                </div>
            </nav>

        </>
    )
}

export default Navbar