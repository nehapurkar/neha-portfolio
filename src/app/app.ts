
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  currentYear = new Date().getFullYear();

  email = 'nehapurkar30@gmail.com';
  phone = '+91 7249107616';

  linkedinUrl = 'https://www.linkedin.com/in/neha-purkar/';
  resumeUrl = 'assets/Neha_Purkar_Resume.pdf';

  skills = [
    { name: 'HTML5', category: 'Frontend', level: 'Advanced', number: '01' },
    { name: 'CSS3', category: 'Frontend', level: 'Advanced', number: '02' },
    { name: 'JavaScript', category: 'Frontend', level: 'Professional use', number: '03' },
    { name: 'Bootstrap', category: 'Frontend', level: 'Professional use', number: '04' },
    { name: 'PHP', category: 'Backend', level: 'Professional use', number: '05' },
    { name: 'WordPress', category: 'CMS & E-commerce', level: 'Professional use', number: '06' },
    { name: 'PostgreSQL', category: 'Database', level: 'Project experience', number: '07' },
    { name: 'Angular', category: 'Frontend', level: 'Working knowledge', number: '08' },
    { name: 'React', category: 'Frontend', level: 'Learning', number: '09' },
    { name: 'Git', category: 'Tools', level: 'Working knowledge', number: '10' },
    { name: 'REST APIs', category: 'Integration', level: 'Working knowledge', number: '11' },
    { name: 'Technical SEO', category: 'Optimization', level: 'Project experience', number: '12' }
  ];

  experience = [
    {
      role: 'Web Developer',
      company: 'Pharoscion Global',
      location: 'Pune, India',
      period: '2025 – Present',
      description:
        'Developing and maintaining responsive websites and web applications, implementing client requirements, improving performance, and supporting ongoing website development.',
      responsibilities: [
        'Develop and maintain responsive websites using HTML, CSS, JavaScript, Bootstrap, PHP, and WordPress.',
        'Build user-facing features, responsive interfaces, forms, and website functionality based on client requirements.',
        'Troubleshoot application issues, debug code, and perform cross-browser testing.',
        'Optimize front-end code, images, and website structure to improve page-loading performance.',
        'Customize e-commerce websites and implement functional improvements and maintenance updates.',
        'Develop back-end functionality using Core PHP and work with PostgreSQL databases.',
        'Implement technical and on-page SEO improvements, including heading optimization and page structure.',
        'Collaborate with team members and stakeholders to deliver solutions within project timelines.',
        'Use Git-based development practices, including branching and merging, with an understanding of CI/CD concepts.'
      ],
      technologies: [
        'HTML', 'CSS', 'JavaScript', 'Bootstrap',
        'PHP', 'WordPress', 'PostgreSQL', 'Git'
      ]
    }
  ];

  projects = [
    {
      number: '01',
      category: 'CMS / E-COMMERCE',
      title: 'WordPress & E-commerce Development',
      description:
        'Responsive business websites and e-commerce solutions customized to meet client requirements, with a focus on usability, maintainability, and consistent design.',
      details: [
        'Customized WordPress websites and responsive page layouts.',
        'Implemented front-end functionality using HTML, CSS, JavaScript, PHP, and Bootstrap.',
        'Worked on e-commerce customization, maintenance, and functional improvements.'
      ],
      stack: ['WordPress', 'PHP', 'JavaScript', 'Bootstrap'],
      accent: 'lime',
      icon: 'W'
    },
    {
      number: '02',
      category: 'BACKEND / DATABASE',
      title: 'PHP Web Development',
      description:
        'Website functionality and back-end development using Core PHP, supported by database operations and ongoing application troubleshooting.',
      details: [
        'Developed and maintained Core PHP functionality.',
        'Worked with PostgreSQL for data management and project requirements.',
        'Debugged application issues and supported website maintenance.'
      ],
      stack: ['Core PHP', 'PostgreSQL', 'JavaScript'],
      accent: 'blue',
      icon: '{ }'
    },
    {
      number: '03',
      category: 'PERFORMANCE / SEO',
      title: 'Website Performance & Technical SEO',
      description:
        'Website improvements focused on technical SEO, page structure, content headings, image optimization, and front-end performance.',
      details: [
        'Improved website structure and page-level SEO elements.',
        'Optimized images and front-end code to improve loading performance.',
        'Performed maintenance and performance-related improvements.'
      ],
      stack: ['Technical SEO', 'HTML', 'CSS', 'JavaScript'],
      accent: 'violet',
      icon: '↗'
    }
  ];

  education = [
    {
      qualification: 'B.E. Computer Engineering',
      institute: 'Shri Gulabrao Deokar College of Engineering, Jalgaon',
      period: '2019 – 2022',
      score: '80%'
    },
    {
      qualification: 'Diploma in Computer Engineering',
      institute: 'S. S. Patil Polytechnic, Chopda',
      period: '2016 – 2019',
      score: '75%'
    },
    {
      qualification: 'SSC',
      institute: 'D. R. Kanya School, Amalner',
      period: '2016',
      score: '84%'
    }
  ];
}
