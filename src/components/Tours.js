import React from 'react'

// IMPORTING THE TOURS DATA
import { tours } from '../data'


// IMPORTING THE TITLE COMPONENT
import Title from './Title'


function Tours() {
    return (

        <section className="section" id="tours">

            {/* =============== TITLE COMPONENT ================= */}

            <Title title="featured" subTitle="Tours" />

            {/* ================================================= */}

            <div className="section-center featured-center">

                {
                    tours.map((tour) => {
                        return (
                            <article className="tour-card" key={tour.id}>

                                <div className="tour-img-container">
                                    <img src={tour.img}
                                        className="tour-img"
                                        alt={tour.title} />

                                    <p className="tour-date">{tour.date}</p>
                                </div>

                                <div className="tour-info">
                                    <div className="tour-title">
                                        <h4>{tour.title}</h4>
                                    </div>
                                    <p>
                                        {tour.text}
                                    </p>

                                    <div className="tour-footer">

                                        <p>
                                            <span><i className="fas fa-map"></i></span> {tour.location}
                                        </p>

                                        <p>{tour.duration}</p>
                                        <p>from ${tour.price}</p>

                                    </div>
                                </div>
                            </article>

                        )
                    })
                }

            </div>
        </section>
    )
}

export default Tours