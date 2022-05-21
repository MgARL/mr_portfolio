import jetPack from '../images/jetPack.png'
import flyAway from '../images/FlyAway.png'
import tpq from '../images/tpq.png'
import ZAnthology from '../images/ZAnthology.png'

const projects = [{
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
},]

export default projects;