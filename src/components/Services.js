import React from 'react'

// TITLE COMPONENT
import Title from './Title'

// IMPORTING THE DATA
import { services } from '../data'

function Service() {
    return (
        <section className="section services" id="services">


            {/* ============ TITLE COMPONENT =============== */}
            <Title title="Our" subTitle="Services" />

            {/* ============================================ */}


            {/* ======= DISPLAYING ALL THE SERVICES ======== */}
            <div className="section-center services-center">
                {
                    services.map((service) => {

                        const { title, description, icon, id } = service

                        return (
                            <article className="service" key={id}>

                                <span className="service-icon">
                                    <i className={icon}></i>
                                </span>

                                <div className="service-info">

                                    <h4 className="service-title">{title}</h4>

                                    <p className="service-text">
                                        {description}
                                    </p>
                                </div>
                            </article>
                        )
                    })
                }

            </div>
        </section>

    )
}

export default Service