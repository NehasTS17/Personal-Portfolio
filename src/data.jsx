import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from 'react-icons/fa';
import { FiFileText, FiUser, FiExternalLink } from 'react-icons/fi';

import Work1 from './assets/project-1.png';
import Work2 from './assets/project-2.png';
import Work3 from './assets/project-3.png';

import Theme1 from './assets/purple.png';
import Theme2 from './assets/red.png';
import Theme3 from './assets/blueviolet.png';
import Theme4 from './assets/blue.png';
import Theme5 from './assets/goldenrod.png';
import Theme6 from './assets/magenta.png';
import Theme7 from './assets/yellowgreen.png';
import Theme8 from './assets/orange.png';
import Theme9 from './assets/green.png';
import Theme10 from './assets/yellow.png';

export const links = [
  {
    id: 1,
    name: 'Home',
    icon: <FaHome className='nav__icon' />,
    path: '/',
  },

  {
    id: 2,
    name: 'About',
    icon: <FaUser className='nav__icon' />,
    path: '/about',
  },

  {
    id: 3,
    name: 'Portfolio',
    icon: <FaFolderOpen className='nav__icon' />,
    path: '/portfolio',
  },

  {
    id: 4,
    name: 'Contact',
    icon: <FaEnvelopeOpen className='nav__icon' />,
    path: '/contact',
  },
];

export const personalInfo = [
  {
    id: 1,
    title: 'First Name : ',
    description: 'Nehas',
  },
  {
    id: 2,
    title: 'Age : ',
    description: '25 Years',
  },

  {
    id: 3,
    title: 'Nationality : ',
    description: 'India',
  },

  {
    id: 4,
    title: 'Gender : ',
    description: 'Male',
  },

  {
    id: 5,
    title: 'Address : ',
    description: 'TamilNadu',
  },

  {
    id: 6,
    title: 'Phone : ',
    description: '8136842364',
  },

  {
    id: 7,
    title: 'Email : ',
    description: 'nehas170499@gmail.com',
  },

  {
    id: 8,
    title: 'Linkedin : ',
    description: 'nehas-ts-5187a330b',
  },
  {
    id: 2,
    title: 'Github : ',
    description: 'NehasTS17',
  },

  {
    id: 10,
    title: 'Langages : ',
    description: 'English, Tamil, Malayalam',
  },
];

export const stats = [
  {
    id: 1,
    no: '1+',
    title: 'Years of <br /> Experience',
  },

  {
    id: 2,
    no: '5+',
    title: 'Completed <br /> Projects',
  },

  {
    id: 3,
    no: '4+',
    title: 'Happy <br /> Customers',
  },

  {
    id: 4,
    no: '5+',
    title: ' Awards <br /> Won',
  },
];

export const resume = [
  {
    id: 1,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2024 - PRESENT',
    title: 'React Developer <span> Freelance </span>',
    desc: 'Still developing and learning ',
  },

  {
    id: 2,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2023 - 2024',
    title: 'React js Developer <span> Ulter Fly Connexions </span>',
    desc: 'I have a 7 month experience in react',
  },

  {
    id: 3,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2022',
    title: 'Internship <span> Phoenix Softech </span>',
    desc: 'I have a 6 month internship with final year project',
  },

  {
    id: 4,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2022',
    title: 'MCA <span> Arul Anandar College </span>',
    desc: 'Madurai Kamaraj University - 87%',
  },

  {
    id: 5,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2020',
    title: 'Bsc Computer Science <span> St.Judes College </span>',
    desc: 'Manonmaniam Sundaranar University - 76%',
  },

  {
    id: 6,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2017',
    title: '12th <span> HSC </span>',
    desc: 'ABC Maric Hr Sec School - 77%',
  },
];

export const skills = [
  {
    id: 1,
    title: 'Html',
    percentage: '80',
  },

  {
    id: 2,
    title: 'Javascript',
    percentage: '70',
  },

  {
    id: 3,
    title: 'Css',
    percentage: '75',
  },

  {
    id: 4,
    title: 'React js',
    percentage: '85',
  },

  {
    id: 5,
    title: 'Node js',
    percentage: '60',
  },

  {
    id: 6,
    title: 'MangoDB',
    percentage: '65',
  },

  {
    id: 7,
    title: 'Redux',
    percentage: '66',
  },

  {
    id: 8,
    title: 'Bootstrap',
    percentage: '77',
  },
];

export const portfolio = [
  {
    id: 1,
    img: Work1,
    title: 'Todo App',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Todo App',
      },
      {
        icon: <FiUser />,
        title: 'Description : ',
        desc: 'Curd',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'React js',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://todoapp-nehas.netlify.app/',
      },
    ],
  },

  {
    id: 2,
    img: Work2,
    title: 'Dashboard',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Dashboard',
      },
      {
        icon: <FiUser />,
        title: 'Description : ',
        desc: 'Frondend design',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'React JS',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://nehas-dashboard.netlify.app/',
      },
    ],
  },

  {
    id: 3,
    img: Work3,
    title: 'Portfolio',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Portfolio',
      },
      {
        icon: <FiUser />,
        title: 'Description : ',
        desc: 'Personal Portfolio',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'React js',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://nehas-portfolioo.netlify.app/',
      },
    ],
  },

  

  

 
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: 'hsl(252, 35%, 51%)',
  },

  {
    id: 2,
    img: Theme2,
    color: 'hsl(4, 93%, 54%)',
  },

  {
    id: 3,
    img: Theme3,
    color: 'hsl(271, 76%, 53%)',
  },

  {
    id: 4,
    img: Theme4,
    color: 'hsl(225, 73%, 57%)',
  },

  {
    id: 5,
    img: Theme5,
    color: 'hsl(43, 74%, 49%)',
  },

  {
    id: 6,
    img: Theme6,
    color: 'hsl(339, 81%, 66%)',
  },

  {
    id: 7,
    img: Theme7,
    color: 'hsl(80, 61%, 50%)',
  },

  {
    id: 8,
    img: Theme8,
    color: 'hsl(19, 96%, 52%)',
  },

  {
    id: 9,
    img: Theme9,
    color: 'hsl(88, 65%, 43%)',
  },

  {
    id: 10,
    img: Theme10,
    color: 'hsl(42, 100%, 50%)',
  },
];
