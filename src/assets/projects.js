import jetPack from '../images/jetPack.png'
import flyAway from '../images/FlyAway.png'
import tpq from '../images/tpq.png'
import ZAnthology from '../images/ZAnthology.png'

const projects = [{
    title: 'Jetpack Evader',
    description: {
        frontEnd: 'Front end: Game created with HTML, CSS and JavaScript. Handles user interactions to manipulate the DOM. Works with an API to save and compare high scores against a global leaderboard. Focused on Desktop web browser, and created a message for mobile users to let them know this is available for Desktop only.',
        backEnd: 'Back end: server with two main endpoints one to retrieve data from database and other to store scores data to the database. It connects to Firebase Realtime Database and handles request from front-end application.'
    },
    img: jetPack,
    links: {
        liveSite: 'https://gifted-rosalind-2ca118.netlify.app/',
        frontEndRepo: 'https://github.com/MgARL/Jetpack-Evader',
        backEndRepo: 'https://github.com/MgARL/JetPack-Evader-Back-End'
    }
},{
    title: 'Zelda Anthology',
    description: {
        frontEnd: 'Web application that retrieves data from API (Hyrule Compendium) and creates an user interface with the data retrieved using ReactJS Library. Technologies used: HTML| CSS | JavaScript | ReactJS | React-Router-Dom | Bootstrap | Fetch API',
    },
    img: ZAnthology,
    links: {
        liveSite: 'https://startling-medovik-38d214.netlify.app/',
        frontEndRepo: 'https://github.com/MgARL/zelda-anthology',
    }
},{
    title: 'TPQ Detailing',
    description: {
        frontEnd: 'Created simple react app that displays information about TPQ business. Technologies used: React, React-Router-Dom, JavaScript, CSS, html',
    },
    img: tpq,
    links: {
        liveSite: 'https://tpqdetailing.com/',
        frontEndRepo: 'https://github.com/MgARL/tpq-detailing',
    }
},{
    title: 'Fly Away',
    description: {
        frontEnd: 'Full stack web application created in a group collaboration. It simulates a booking flights website. front end display flights availability and also show user interface to book,cancel and update flights',
        backEnd: 'Back-end RESTFUL API that handles the request from the front end, fetches, creates, updates and deletes data from the database and/or sends it to the front end.'
    },
    img: flyAway,
    links: {
        liveSite: 'https://tourmaline-fenglisu-98c47e.netlify.app/',
        frontEndRepo: 'https://github.com/Digital-Dreamers/fly_away_client',
        backEndRepo: 'https://github.com/Digital-Dreamers/fly_away_server'
    }
},]

export default projects;