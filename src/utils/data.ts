import {
  Experience as ExperienceType,
  Education as EducationType,
  Project as ProjectType,
} from '../types'

const projects: Array<ProjectType> = [
  {
    img: 'img/codingschool.png',
    title: 'CodingSchool API',
    description:
      'Backend API for CodingSchool application, which is a bootcamp directory website',
    codeLink: 'https://github.com/nico1aseth/codingschool-api',
    liveLink: 'https://codingschool.lol',
    techstack: ['ExpressJS', 'MongoDB'],
  },
  {
    img: 'img/portfolio.png',
    title: 'Portfolio',
    description: 'Personal portfolio',
    codeLink: 'https://github.com/djamaile/portfolio',
    liveLink: 'djamaile.dev',
    techstack: ['ReactJS', 'TypeScript'],
  },
]

const experience: Array<ExperienceType> = [
  {
    img: 'img/gdsc.png',
    jobTitle: 'GDSC Lead',
    company: 'Google Developer Student Clubs',
    date: 'Sep 2022 - now',
    workLength: '10 mos',
    location: 'Taipei, Taiwan',
    tasks: [
      'Developing and managing the GDSC team in NTU',
      'Hosting events regarding Google technology',
      'International collaboration with other GDSC team to co-host virtual Flutter hackathon',
    ],
    techstack: ['Leadership', 'Communication'],
  },
  {
    img: 'img/binance.png',
    jobTitle: 'Binance Campus Ambassador',
    company: 'Binance',
    date: 'Jan 2022 - Sep 2022',
    workLength: '9 mos',
    location: 'Taipei, Taiwan',
    tasks: ['Writing articles of Binance DEX utility', 'Brand promotion'],
    techstack: ['Writing', 'Branding'],
  },
]

const education: Array<EducationType> = [
  {
    img: 'img/ntu.jpg',
    school: 'National Taiwan University',
    study: 'BSc, Agricultural Chemistry',
    date: '2020 - now',
  },
]

export { experience, projects, education }
