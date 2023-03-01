import React from 'react'

import { pageLinks } from '../data'

function PageLinks({ links, child }) {
    return (

        < ul className={links} id={links} >

            {
                pageLinks.map((link) => {

                    const { id, href, text } = link

                    return (
                        <li key={id}>
                            <a href={href} className={child}> {text} </a>
                        </li>
                    )
                })
            }


        </ ul >

    )
}

export default PageLinks