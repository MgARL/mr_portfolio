import jetPack from '../images/logos/J.png'
import flyAway from '../images/logos/Fly.png'
import tpq from '../images/logos/TPQ-Detailing.png'
import ZAnthology from '../images/logos/Zelda.png'
import WashApp from '../images/logos/WashApp.png'

const projects = [{
    title: 'WashApp Carwash',
    description: {
        frontEnd: 'Web Application, where you can create an account and schedule a car-wash/auto-detailing service. Once in your account you can add vehicles, see upcoming appointments or all appointments Created with: Node, Express, PostgreSQL, Sequelize ORM, HTML, CSS, React,React Hooks, Bootstraps.',
        
    },
    img: WashApp,
    links: {
        liveSite: 'https://classy-madeleine-704865.netlify.app/',
        frontEndRepo: 'https://github.com/MgARL/washup_carwash'
    },
    techs: ['JavaScript','React','HTML', 'CSS','Bootstraps','Node.js','Express.js','PostgreSQL','Sequelize ORM', 'AWS RDS','Netlify','Heroku']
},{
    title: 'Zelda Anthology',
    description: {
        frontEnd: 'Web application that retrieves data from API (Hyrule Compendium) and creates an user interface with the data retrieved using ReactJS Library',
    },
    img: ZAnthology,
    links: {
        liveSite: 'https://startling-medovik-38d214.netlify.app/',
        frontEndRepo: 'https://github.com/MgARL/zelda-anthology',
    },
    techs: ['JavaScript', 'React', 'React-Router-Dom' ,'HTML', 'CSS', 'Bootstrap', 'Fetch API']
},{
    title: 'Jetpack Evader',
    description: {
        frontEnd: 'JetPack Evader is game that consist of an Astronaut(the player) that needs to avoid incoming asteroids, without running out of gas. The main objective of the game is to get the highest score in the Global LeaderBoard.'
    },
    img: jetPack,
    links: {
        liveSite: 'https://gifted-rosalind-2ca118.netlify.app/',
        frontEndRepo: 'https://github.com/MgARL/Jetpack-Evader',
        backEndRepo: 'https://github.com/MgARL/JetPack-Evader-Back-End'
    },
    techs: ['JavaScript','HTML', 'CSS','Node.js','Express.js']
},{
    title: 'TPQ Detailing',
    description: {
        frontEnd: 'Landing page for local mobile car detailing business. It displays pricing information and contact information.',
    },
    img: tpq,
    links: {
        liveSite: 'https://tpqdetailing.com/',
        frontEndRepo: 'https://github.com/MgARL/tpq-detailing',
    },
    techs: ['JavaScript', 'React','React-Router-Dom','HTML', 'CSS', 'Bootstrap']
},{
    title: 'Fly Away',
    description: {
        frontEnd: 'Full stack web application that simulates a booking flights website. it lets you search for flights (in our database) and simulated the booking of a flight. It asks for your information and gives back a reservation number that you can look up in the search bar to showcase your flight information',
        
    },
    img: flyAway,
    links: {
        liveSite: 'https://tourmaline-fenglisu-98c47e.netlify.app/',
        frontEndRepo: 'https://github.com/Digital-Dreamers/fly_away_client',
        backEndRepo: 'https://github.com/Digital-Dreamers/fly_away_server'
    },
    techs: ['JavaScript','React','HTML', 'CSS','Node.js','Express.js','MongoDB']
}]

export default projects;