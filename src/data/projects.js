import myPet from '../assets/pictures/myPet.png'
import pgnManager from '../assets/pictures/pgnManager.png'
import koivisto from '../assets/pictures/koivisto.png'
import centriVaccinali from '../assets/pictures/centri-vaccinali.png'
import autoclickerLogo from '../assets/pictures/autoclickerLogo.png'
import dice from '../assets/pictures/dice-5.png'

export const projects = [
    {
        id: 'my-pet',
        title: 'My Pet',
        type: 'Android application',
        image: myPet,
        featured: true,
        github: 'https://github.com/Luca9862/MyPet',
        links: [],
        description: 'MyPet is a university project developed at the University of Insubria as part of a mobile development course, utilizing Kotlin. This app allows users to monitor medical visits, keep track of vaccinations and medications, and even includes a built-in pedometer.'
    },
    {
        id: 'pgn-manager',
        title: 'pgn-manager',
        type: 'Python package',
        image: pgnManager,
        featured: true,
        github: 'https://github.com/Luca9862/pgn_manager_lib',
        links: [
            { label: 'PyPI', icon: 'mdi-language-python', url: 'https://pypi.org/project/pgn-manager/' }
        ],
        description: 'A user-friendly Python library for basic PGN (chess) file handling - PGN stands for Portable Game Notation, a standard plain text format for recording chess games. It includes the moves of the game as well as metadata such as the players, the event, the date, and the result.'
    },
    {
        id: 'koivisto',
        title: 'Chess Engine Study, Koivisto',
        type: 'Degree thesis',
        image: koivisto,
        featured: true,
        github: 'https://github.com/Luca9862/ChessEngineStudy_Koivisto',
        links: [
            { label: 'Koivisto.com', icon: 'mdi-link', url: 'https://koivisto-chess.com' }
        ],
        description: 'This research aims to explore and analyze in detail the operation of Koivisto, with the goal of understanding its peculiarities, its capabilities, and its impact in the context of modern chess engines. Through this analysis, the aim is to contribute to the understanding of its architecture, its artificial intelligence techniques, and its performance.'
    },
    {
        id: 'vaccination-centers',
        title: 'Vaccination Centers',
        type: 'First University Project - Java',
        image: centriVaccinali,
        featured: false,
        github: 'https://github.com/Luca9862/CentriVaccinali',
        links: [],
        description: 'This Java-based project is a management system for vaccination centers. It allows the registration and organization of multiple vaccination centers, each identified by details such as city, address, and name. Citizens can register to their assigned center after receiving a vaccination, using a unique ID. Through this system, they can anonymously submit feedback or reports on any adverse events experienced post-vaccination, functioning as a form of anonymous survey.'
    },
    {
        id: 'autoclicker',
        title: 'Autoclicker',
        type: 'Simple autoclicker with GUI - Python',
        image: autoclickerLogo,
        featured: false,
        github: 'https://github.com/Luca9862/autoclicker',
        links: [],
        description: 'Autoclicker is a Python application with a graphical user interface. Users can start the autoclicker by providing an interval as input. The development was done using Python 3.10.11 and Visual Studio Code. The application can be executed through VSC or any Python IDE. Inside the \'exec\' folder, you will find the executables for different operating systems.'
    },
    {
        id: 'roll-dice',
        title: 'RollDice',
        type: 'Flutter project',
        image: dice,
        featured: false,
        github: 'https://github.com/Luca9862/roll_dice_flutter',
        links: [
            { label: 'APK Android', icon: 'mdi-android', url: 'https://github.com/Luca9862/roll_dice_flutter/releases' }
        ],
        description: 'RollDice is a simple Flutter application that simulates the roll of a six-sided die'
    }
]
