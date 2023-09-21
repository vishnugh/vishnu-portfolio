import one from '../assets/svg/projects/one.svg'
import two from '../assets/svg/projects/two.svg'
import three from '../assets/svg/projects/three.svg'
import four from '../assets/svg/projects/four.svg'
import five from '../assets/svg/projects/five.svg'
import six from '../assets/svg/projects/six.svg'
import seven from '../assets/svg/projects/seven.svg'
import eight from '../assets/svg/projects/eight.svg'

import arcabin from '../assets/gifs/ARcabin.gif'
import autopilot from '../assets/gifs/Autopilot.gif'
import evo_neat from '../assets/png/game-of-life.png'
import games from '../assets/png/appstore-games.png'
import probability from '../assets/png/probability.png'



export const projectsData = [
    {
        id: 1,
        projectName: 'AR Cabin',
        projectDesc: 'An app which scans a bag to determine its dimensions to check if it will be allowed as Cabin baggage',
        tags: ['AR', 'Unity3D'],
        code: 'https://github.com/vishnugh/Measure-Cabin-Bag-AR',
        demo: 'https://www.youtube.com/shorts/oLMtveSEST8',
        image: arcabin
    },
    {
        id: 2,
        projectName: 'Autopilot Reinforcement Learning',
        projectDesc: 'Teaching the Agent to take-off while minimizing the runway distance unig Reinforcement Learning',
        tags: ['Reinforcement Learning', 'Machine Learning'],
        code: 'https://youtu.be/8MfMkVNCZBY',
        demo: 'https://youtu.be/8MfMkVNCZBY',
        image: autopilot
    },
    {
        id: 3,
        projectName: 'Dynamic Probability Distribution Graph',
        projectDesc: 'Web Application for simulating and viewing various Probability Distribution',
        tags: ['Mathematics','Probability', 'Stastics'],
        code: 'https://github.com/vishnugh/probability-distribution-graph',
        demo: 'https://math.vishnughosh.com/',
        image: probability
    },
    {
        id: 4,
        projectName: 'evo-NEAT',
        projectDesc: 'A java implementation of NEAT(NeuroEvolution of Augmenting Topologies ) for the generation of evolving artificial neural networks.',
        tags: ['Neural Network','AI', 'ML'],
        code: 'https://github.com/vishnugh/evo-NEAT',
        demo: 'https://github.com/vishnugh/evo-NEAT',
        image: evo_neat
    },
    {
        id: 5,
        projectName: 'Casual iOS Games',
        projectDesc: 'Few of the casual games launched in Apple Appstore',
        tags: ['Unity3D', 'GameDev'],
        code: '',
        demo: '',
        image: games
    },
    {
        id: 6,
        projectName: 'ELECTRICAL VEHICLE SALES ANALYSIS',
        projectDesc: 'Visualizing and prediction of the growth of EVs and installation of charging points in the United States',
        tags: ['R Shiny', 'Time Series Analysis'],
        code: '',
        demo: '',
        image: eight
    }
    // {
    //     id: 6,
    //     projectName: 'Uber Lite',
    //     projectDesc: 'Uber clone',
    //     tags: ['Flutter'],
    //     code: 'https://github.com/hhhrrrttt222111/developer-portfolio',
    //     demo: 'https://github.com/hhhrrrttt222111/developer-portfolio',
    //     image: six
    // },
    // {
    //     id: 7,
    //     projectName: 'Stock Market App',
    //     projectDesc: 'A simple stock market API app',
    //     tags: ['React', 'Redux', 'Bootstrap'],
    //     code: 'https://github.com/hhhrrrttt222111/developer-portfolio',
    //     demo: 'https://github.com/hhhrrrttt222111/developer-portfolio',
    //     image: seven
    // },
    // {
    //     id: 8,
    //     projectName: 'Car Pooling System',
    //     projectDesc: 'The carpooling system merges multiple people in a car which leads to meet new people, reduces pollution',
    //     tags: ['Flutter', 'React'],
    //     code: 'https://github.com/hhhrrrttt222111/developer-portfolio',
    //     demo: 'https://github.com/hhhrrrttt222111/developer-portfolio',
    //     image: eight
    // },
]


// Do not remove any fields.
// Leave it blank instead as shown below

/* 
{
    id: 1,
    projectName: 'Car Pooling System',
    projectDesc: '',
    tags: ['Flutter', 'React'],
    code: '',
    demo: '',
    image: ''
}, 
*/