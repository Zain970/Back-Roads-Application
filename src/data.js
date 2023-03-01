
import tour1 from "./images/tour-1.jpeg"
import tour2 from "./images/tour-2.jpeg"
import tour3 from "./images/tour-3.jpeg"
import tour4 from "./images/tour-4.jpeg"

export const pageLinks = [
    {
        id: 1,
        href: "#home",
        text: "home"
    },
    {
        id: 2,
        href: "#about",
        text: "about"
    },
    {
        id: 3,
        href: "#services",
        text: "services"
    },
    {
        id: 4,
        href: "#tours",
        text: "tours"
    }
]

export const socialLinks = [
    {
        id: 1,
        href: "https://www.twitter.com",
        icon: "fab fa-facebook"

    },
    {
        id: 2,
        href: "https://www.twitter.com",
        icon: "fab fa-twitter"

    },
    {
        id: 3,
        href: "https://www.twitter.com",
        icon: "fab fa-squarespace"

    }
]

export const services = [
    {
        id: 1,
        title: "Saving Money",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.`,
        icon: "fas fa-wallet fa-fw"
    },
    {
        id: 2,
        title: "Endless Hiking",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.`,
        icon: "fas fa-tree fa-fw"
    },
    {
        id: 3,
        title: "Amazing Comfort",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.`,
        icon: "fas fa-wallet fa-fw"
    }
]

export const tours = [
    {
        id: 1,
        img: tour1,
        date: "August 26th, 2023",
        title: "Tibet Adventure",
        text: `
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis
        `,
        location: "China",
        duration: 6,
        price: 2100
    },
    {
        id: 2,
        img: tour2,
        date: "January 01st, 2023",
        title: "North Pakistan",
        text: `
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis
        `,
        location: "Pak",
        duration: 6,
        price: 1900
    },
    {
        id: 3,
        img: tour3,
        date: "November 26th, 2023",
        title: "West Pakistan",
        text: `
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis
        `,
        location: "China",
        duration: 6,
        price: 900
    },
    {
        id: 4,
        img: tour4,
        date: "December 5th, 2019",
        title: "kenya highlights",
        text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis`,
        location: "Usa",
        duration: 6,
        price: 1100
    }
]