// Portfolio data structure for Pintu Kumar Sharma
// Contains all professional information, projects, skills, and experience

export interface Skill {
  name: string
  level: number
  category: string
}

export interface Experience {
  id: string
  company: string
  role: string
  duration: string
  startDate: string
  endDate: string
  description: string
  achievements: string[]
  technologies: string[]
}

export interface Project {
  id: string
  title: string
  description: string
  technologies: string[]
  githubUrl?: string
  liveUrl?: string
  featured: boolean
}

export interface Education {
  id: string
  school: string
  degree: string
  field: string
  duration: string
  achievements: string[]
}

export interface SocialLink {
  name: string
  url: string
  icon: string
}

export interface BlogPost {
  id: string
  title: string
  excerpt: string
  date: string
  category: string
  readTime: string
  image?: string
  url: string
}

export interface Testimonial {
  id: string
  name: string
  role: string
  company: string
  content: string
  image?: string
  rating: number
}

// Skills organized by category with proficiency levels (0-100)
export const skills: Skill[] = [
  // Frontend Technologies
  { name: 'React', level: 95, category: 'Frontend' },
  { name: 'TypeScript', level: 90, category: 'Frontend' },
  { name: 'JavaScript (ES6+)', level: 95, category: 'Frontend' },
  { name: 'Next.js', level: 85, category: 'Frontend' },
  { name: 'Tailwind CSS', level: 95, category: 'Frontend' },

  // Backend Technologies
  { name: 'Node.js', level: 85, category: 'Backend' },
  { name: 'Express.js', level: 80, category: 'Backend' },
  { name: 'PostgreSQL', level: 85, category: 'Backend' },
  { name: 'MongoDB', level: 75, category: 'Backend' },

  // DevOps & Cloud
  { name: 'Docker', level: 80, category: 'DevOps' },
  { name: 'AWS (EC2/S3/RDS)', level: 75, category: 'DevOps' },

  // Tools & Version Control
  { name: 'Git', level: 90, category: 'Tools' },
  { name: 'GitHub', level: 90, category: 'Tools' },
]

// Professional experience in reverse chronological order
export const experiences: Experience[] = [
  {
    id: 'secure-access-tech',
    company: 'Secure Access Tech Pvt Ltd',
    role: 'Full Stack Developer',
    duration: 'Present',
    startDate: '2025-06',
    endDate: 'Present',
    description:
      'Leading full-stack development initiatives for security-driven enterprise products, building scalable systems and cloud-ready web applications.',
    achievements: [
      'Architected microservices serving 10K+ daily active users across distributed infrastructure',
      'Integrated OAuth 2.0 and JWT authentication reducing access vulnerabilities by ~40%',
      'Improved database/API performance, reducing average load times by over 60%',
      'Led technical reviews and mentored junior developers on scalable design practices',
    ],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'MongoDB', 'AWS', 'Docker', 'Git'],
  },
  {
    id: 'shypbuddy-india',
    company: 'Shypbuddy India Pvt Ltd',
    role: 'Full Stack Developer',
    duration: '6 months',
    startDate: '2024-12',
    endDate: '2025-06',
    description:
      'Built logistics automation systems enabling real-time shipment visibility and simplified operational workflows.',
    achievements: [
      'Developed real-time tracking dashboard with WebSockets powering live movement updates',
      'Created REST APIs serving 50K+ requests/day with 99.9% uptime',
      'Integrated FedEx & DHL APIs for automated rate and delivery calculations',
      'Implemented automated testing suite achieving ~85% coverage',
    ],
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Redis', 'Git'],
  },
  {
    id: 'vigrous-healthcare',
    company: 'Vigrous Healthcare Pvt Ltd',
    role: 'Full Stack Developer',
    duration: '7 months',
    startDate: '2024-05',
    endDate: '2024-12',
    description:
      'Contributed to development of secure healthcare management solutions with compliance-focused data handling and rich UI workflows.',
    achievements: [
      'Built secure patient management system with RBAC roles & restricted data access',
      'Implemented HIPAA-aligned encryption flows for API and data storage',
      'Designed responsive appointment booking system reducing booking time by ~50%',
      'Collaborated with medical teams to design workflow-optimized UI layouts',
    ],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'JWT', 'Tailwind CSS', 'Git'],
  },
  {
    id: 'dakshit-tech',
    company: 'Dakshit Technologies Pvt Ltd',
    role: 'Web Developer',
    duration: '1 year',
    startDate: '2023-05',
    endDate: '2024-05',
    description:
      'Delivered responsive web solutions and e-commerce systems while practicing Agile SDLC and production deployments.',
    achievements: [
      'Developed 5+ e-commerce portals with integrated payments and cart flows',
      'Implemented custom CMS tools improving content publishing efficiency',
      'Improved SEO score resulting in ~200% increase in organic traffic for multiple clients',
      'Participated in sprints, standups, and collaborative release planning',
    ],
    technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'MongoDB', 'Git'],
  },
]

// Featured projects showcasing technical expertise
export const projects: Project[] = [
  {
    id: 'blog-platform',
    title: 'Full-Stack Blog Platform',
    description:
      'JWT-secured MERN blogging system supporting author access levels, CRUD publishing, categories, and secure authentication with hashed credentials.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'bcrypt'],
    githubUrl: 'https://github.com/pintu544/Blog-App-Backend-Node',
    liveUrl: 'https://my-blog-app-testing.netlify.app',
    featured: true,
  },
  {
    id: 'secure-notes',
    title: 'Secure Notes Management System',
    description:
      'Notes manager with user login, searching, dark mode UI, and persistent authentication. Built with secure password hashing and MERN stack.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'bcrypt', 'Bootstrap'],
    githubUrl: 'https://github.com/pintu544/notes-application',
    liveUrl: 'https://notes-taking-applications.netlify.app',
    featured: true,
  },
  {
    id: 'ai-fusion',
    title: 'AI Chat Fusion Platform',
    description:
      'Unified interface to interact with multiple AI models simultaneously with local chat history, syntax highlighting, and different query modes.',
    technologies: ['React', 'Express', 'MongoDB', 'Tailwind', 'Node.js', 'react-visualizer'],
    liveUrl: 'https://multi-ais-chat.netlify.app',
    featured: true,
  },
  {
    id: 'portfolio-tracker',
    title: 'Real-Time Stock Portfolio Tracker',
    description:
      'Dashboard providing live stock metrics, profit/loss analysis, sector insights, auto data refresh and investment performance analytics.',
    technologies: ['TypeScript', 'React', 'Recharts', 'TanStack Table', 'Yahoo Finance API', 'Lucide React'],
    githubUrl: 'https://github.com/pintu544/stock_dashboard',
    liveUrl: 'https://stock-dashbaord-pro.vercel.app',
    featured: true,
  },
  {
    id: 'stayfinder',
    title: 'StayFinder – Property Rental Platform',
    description:
      'Frontend booking platform inspired by Airbnb with searchable catalog, dynamic cards, location filters and responsive mobile-first UI.',
    technologies: ['React', 'Vite', 'Tailwind CSS', 'JavaScript ES6'],
    githubUrl: 'https://github.com/pintu544/StayFinder-frontend',
    liveUrl: 'https://stayfinders.netlify.app',
    featured: true,
  },
]

// Educational background
export const education: Education[] = [
  {
    id: 'kurukshetra-btech',
    school: 'Kurukshetra University',
    degree: 'B.Tech',
    field: 'Computer Science and Engineering',
    duration: '2018 - 2022',
    achievements: [
      'Solid foundation in core CS subjects',
      'Completed multiple real-world web projects',
      'Actively participated in coding events',
    ],
  },
]

// Social media and professional links
export const socialLinks: SocialLink[] = [
  { name: 'GitHub', url: 'https://github.com/pintu544', icon: 'Github' },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/pintukumar12', icon: 'Linkedin' },
  { name: 'Email', url: 'mailto:pksharmagh4@gmail.com', icon: 'Mail' },
]

// Professional certifications and credentials
export const certifications = [
  {
    name: 'AI Associate',
    provider: 'DataCamp',
    url: 'https://www.datacamp.com/portfolio/pksharmagh4?view=true',
  },
  {
    name: 'Full Stack Developer',
    provider: 'Udacity',
    url: 'https://confirm.udacity.com/',
  },
  {
    name: 'MERN Stack Developer',
    provider: 'Coding Ninjas',
    url: 'https://certificate.codingninjas.com/',
  },
]

// Blog posts
export const blogPosts: BlogPost[] = [
  {
    id: 'react-performance',
    title: 'Optimizing React Performance: Best Practices & Techniques',
    excerpt: 'Learn advanced techniques to optimize your React applications for better performance, including memoization, code splitting, and lazy loading.',
    date: 'Dec 10, 2024',
    category: 'React',
    readTime: '8 min read',
    url: 'https://medium.com/@pintu544',
  },
  {
    id: 'nodejs-scalability',
    title: 'Building Scalable Node.js Applications with Microservices',
    excerpt: 'Explore how to architect scalable Node.js applications using microservices patterns, load balancing, and distributed systems.',
    date: 'Dec 5, 2024',
    category: 'Backend',
    readTime: '10 min read',
    url: 'https://medium.com/@pintu544',
  },
  {
    id: 'web-security',
    title: 'Web Security Best Practices: Protecting Your Applications',
    excerpt: 'Comprehensive guide to securing your web applications against common vulnerabilities including XSS, CSRF, SQL injection, and more.',
    date: 'Nov 28, 2024',
    category: 'Security',
    readTime: '12 min read',
    url: 'https://medium.com/@pintu544',
  },
]

// Testimonials from colleagues and clients
export const testimonials: Testimonial[] = [
  {
    id: 'testimonial-1',
    name: 'Rajesh Kumar',
    role: 'Tech Lead',
    company: 'Secure Access Tech',
    content: 'Pintu is an exceptional developer with deep expertise in full-stack development. His ability to architect scalable systems and mentor junior developers is outstanding. Highly recommended!',
    rating: 5,
  },
  {
    id: 'testimonial-2',
    name: 'Priya Sharma',
    role: 'Product Manager',
    company: 'Shypbuddy India',
    content: 'Working with Pintu was a game-changer for our logistics platform. He delivered a real-time tracking system that exceeded our expectations in terms of performance and reliability.',
    rating: 5,
  },
  {
    id: 'testimonial-3',
    name: 'Dr. Amit Patel',
    role: 'CTO',
    company: 'Vigrous Healthcare',
    content: 'Pintu demonstrated exceptional understanding of healthcare compliance requirements and built a secure, HIPAA-aligned system. His attention to detail and security practices are commendable.',
    rating: 5,
  },
]
