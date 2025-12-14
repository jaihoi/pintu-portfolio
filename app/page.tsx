'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Github, Linkedin, Mail, Code2, ArrowRight, Star, Quote } from 'lucide-react'
import { skills, experiences, projects, education, socialLinks, certifications, blogPosts, testimonials } from '@/lib/portfolio-data'
import { useEffect, useState } from 'react'

export default function Home() {
  const [stats, setStats] = useState({ years: 0, projects: 0, users: 0 })
  const [visibleSections, setVisibleSections] = useState<Record<string, boolean>>({})
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [scrollProgress, setScrollProgress] = useState(0)

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = scrollHeight > 0 ? (window.scrollY / scrollHeight) * 100 : 0
      setScrollProgress(progress)

      const sections = ['about', 'experience', 'projects', 'skills', 'blog', 'testimonials', 'contact']
      const newVisibleSections: Record<string, boolean> = {}

      sections.forEach((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          newVisibleSections[section] = rect.top < window.innerHeight * 0.75
        }
      })

      setVisibleSections(newVisibleSections)

      if (newVisibleSections['skills'] && stats.years === 0) {
        animateStats()
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [stats.years])

  const animateStats = () => {
    const duration = 2000
    const startTime = Date.now()

    const animate = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)

      setStats({
        years: Math.floor(progress * 4),
        projects: Math.floor(progress * 20),
        users: Math.floor(progress * 10000),
      })

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormStatus('loading')

    try {
      await new Promise(resolve => setTimeout(resolve, 1500))
      setFormStatus('success')
      setFormData({ name: '', email: '', message: '' })
      setTimeout(() => setFormStatus('idle'), 3000)
    } catch {
      setFormStatus('error')
      setTimeout(() => setFormStatus('idle'), 3000)
    }
  }

  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = []
    }
    acc[skill.category].push(skill)
    return acc
  }, {} as Record<string, typeof skills>)

  return (
    <div className="min-h-screen bg-[#0a0e27] text-white">
      {/* Scroll Progress */}
      <div className="fixed top-0 left-0 h-1 bg-[#00d9b6] z-50" style={{ width: `${scrollProgress}%` }}></div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-40 bg-[#0a0e27]/95 backdrop-blur-sm border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image src="/images/logo.png" alt="Logo" width={32} height={32} className="rounded-lg" />
            <span className="font-bold text-lg">Pintu</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {['About', 'Experience', 'Projects', 'Blog', 'Testimonials', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-gray-300 hover:text-white transition-colors text-sm">
                {item}
              </a>
            ))}
          </div>

          <Button asChild className="bg-[#00d9b6] hover:bg-[#00e6c3] text-black font-semibold rounded-full px-6">
            <a href="#contact">Get in Touch</a>
          </Button>
        </div>
      </nav>

      {/* Hero Section - Netlify Style */}
      <section className="relative pt-32 pb-20 px-6 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div>
                <h1 className="text-6xl md:text-7xl font-bold leading-tight mb-6">
                  Full Stack Developer &amp; Cloud Architect
                </h1>
                <p className="text-xl text-gray-300 leading-relaxed max-w-lg">
                  Building scalable web applications with React, Node.js, and cloud technologies. Specialized in enterprise solutions, real-time systems, and secure architectures.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild className="bg-[#00d9b6] hover:bg-[#00e6c3] text-black font-semibold rounded-full px-8 h-12">
                  <a href="#projects">View My Work</a>
                </Button>
                <Button asChild className="bg-transparent hover:bg-white/10 border border-white/20 text-white font-semibold rounded-full px-8 h-12">
                  <a href="https://github.com/jaihoi" target="_blank" rel="noopener noreferrer">GitHub</a>
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/10">
                {[
                  { number: stats.years, label: 'Years', suffix: '+' },
                  { number: stats.projects, label: 'Projects', suffix: '+' },
                  { number: stats.users, label: 'Users', suffix: '+' }
                ].map((stat, idx) => (
                  <div key={idx}>
                    <p className="text-4xl font-bold text-white">{stat.number}{stat.suffix}</p>
                    <p className="text-gray-400 text-sm mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Illustration - Netlify Style */}
            <div className="relative h-96 md:h-full flex items-center justify-center">
              <svg viewBox="0 0 400 400" className="w-full h-full max-w-md" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Decorative lines */}
                <rect x="80" y="100" width="200" height="200" stroke="white" strokeWidth="2" opacity="0.3" rx="8" />
                <rect x="100" y="120" width="160" height="160" stroke="white" strokeWidth="1.5" opacity="0.2" rx="6" />
                <circle cx="300" cy="80" r="20" stroke="white" strokeWidth="2" opacity="0.4" />
                <circle cx="100" cy="300" r="15" stroke="white" strokeWidth="1.5" opacity="0.3" />
                
                {/* Code icon */}
                <g opacity="0.5">
                  <path d="M150 180 L120 200 L150 220" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" />
                  <path d="M250 180 L280 200 L250 220" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" />
                  <line x1="200" y1="140" x2="200" y2="260" stroke="white" strokeWidth="2" opacity="0.3" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-[#0f1535]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold mb-12">About Me</h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                I&apos;m a passionate full-stack developer from India with a B.Tech in Computer Science from Kurukshetra University. I specialize in building enterprise-grade web applications that solve real-world problems.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Currently working at Secure Access Tech, I lead full-stack development initiatives for security-driven products. My expertise spans modern frontend frameworks, robust backend systems, and cloud infrastructure.
              </p>
              <div className="space-y-3 pt-6">
                {['Expert in MERN stack', 'Building systems for 10K+ users', 'Security & performance focused'].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#00d9b6] rounded-full"></div>
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">Certifications</h3>
              <div className="space-y-3">
                {certifications.map((cert) => (
                  <a key={cert.name} href={cert.url} target="_blank" rel="noopener noreferrer" className="block p-4 bg-white/5 hover:bg-white/10 rounded-lg transition-colors group">
                    <p className="font-semibold text-white group-hover:text-[#00d9b6]">{cert.name}</p>
                    <p className="text-sm text-gray-400">{cert.provider}</p>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold mb-12">Professional Experience</h2>

          <div className="space-y-6">
            {experiences.map((exp) => (
              <div key={exp.id} className="p-8 bg-white/5 hover:bg-white/10 rounded-lg transition-colors border border-white/10">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
                    <p className="text-[#00d9b6] font-semibold">{exp.company}</p>
                  </div>
                  <Badge className="bg-white/10 text-gray-300">{exp.duration}</Badge>
                </div>

                <p className="text-gray-300 mb-6">{exp.description}</p>

                <div className="mb-6">
                  <p className="font-semibold text-white mb-3">Key Achievements:</p>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex gap-3 text-gray-300">
                        <span className="text-[#00d9b6]">→</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <Badge key={tech} className="bg-white/10 text-gray-300 text-xs">{tech}</Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-[#0f1535]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold mb-12">Featured Projects</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.filter(p => p.featured).map((project) => (
              <div key={project.id} className="p-8 bg-white/5 hover:bg-white/10 rounded-lg transition-colors border border-white/10">
                <div className="flex items-start justify-between mb-4">
                  <Code2 className="w-8 h-8 text-[#00d9b6]" />
                  {project.featured && <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />}
                </div>

                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-300 leading-relaxed mb-6">{project.description}</p>

                <div className="mb-6 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} className="bg-white/10 text-gray-300 text-xs">{tech}</Badge>
                  ))}
                </div>

                <div className="flex gap-3">
                  {project.githubUrl && (
                    <Button asChild size="sm" className="bg-transparent hover:bg-white/10 border border-white/20 text-white">
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">Code</a>
                    </Button>
                  )}
                  {project.liveUrl && (
                    <Button asChild size="sm" className="bg-[#00d9b6] hover:bg-[#00e6c3] text-black">
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">Live</a>
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold mb-12">Technical Skills</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(skillsByCategory).map(([category, categorySkills]) => (
              <div key={category} className="p-6 bg-white/5 rounded-lg border border-white/10">
                <h3 className="text-lg font-bold text-[#00d9b6] mb-6">{category}</h3>
                <div className="space-y-4">
                  {categorySkills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-300 text-sm">{skill.name}</span>
                        <span className="text-xs text-gray-500">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-white/10 rounded-full h-1.5">
                        <div
                          className="bg-[#00d9b6] h-1.5 rounded-full transition-all duration-1000"
                          style={{
                            width: visibleSections['skills'] ? `${skill.level}%` : '0%',
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 px-6 bg-[#0f1535]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold mb-12">Latest Blog Posts</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <a key={post.id} href={post.url} target="_blank" rel="noopener noreferrer" className="p-6 bg-white/5 hover:bg-white/10 rounded-lg transition-colors border border-white/10 group">
                <div className="flex items-center justify-between mb-4">
                  <Badge className="bg-white/10 text-gray-300 text-xs">{post.category}</Badge>
                  <span className="text-xs text-gray-500">{post.readTime}</span>
                </div>

                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-[#00d9b6]">{post.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-6">{post.excerpt}</p>

                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <span className="text-xs text-gray-500">{post.date}</span>
                  <ArrowRight className="w-4 h-4 text-[#00d9b6] group-hover:translate-x-1 transition-transform" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold mb-12">What People Say</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="p-8 bg-white/5 rounded-lg border border-white/10">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>

                <Quote className="w-6 h-6 text-[#00d9b6]/30 mb-4" />

                <p className="text-gray-300 leading-relaxed mb-6 italic">&quot;{testimonial.content}&quot;</p>

                <div className="pt-6 border-t border-white/10">
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-sm text-gray-400">{testimonial.role} at {testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-[#0f1535]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold mb-12 text-center">Get In Touch</h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <p className="text-lg text-gray-300">I&apos;m always interested in hearing about new projects and opportunities. Feel free to reach out!</p>

              <div className="space-y-3">
                <a href="mailto:pksharmagh4@gmail.com" className="flex items-center gap-4 p-4 bg-white/5 hover:bg-white/10 rounded-lg transition-colors">
                  <Mail className="w-6 h-6 text-[#00d9b6]" />
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <p className="text-white font-semibold">pksharmagh4@gmail.com</p>
                  </div>
                </a>

                <a href="https://linkedin.com/in/pintukumar12" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 bg-white/5 hover:bg-white/10 rounded-lg transition-colors">
                  <Linkedin className="w-6 h-6 text-[#00d9b6]" />
                  <div>
                    <p className="text-sm text-gray-400">LinkedIn</p>
                    <p className="text-white font-semibold">Pintu Kumar Sharma</p>
                  </div>
                </a>

                <a href="https://github.com/jaihoi" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 bg-white/5 hover:bg-white/10 rounded-lg transition-colors">
                  <Github className="w-6 h-6 text-[#00d9b6]" />
                  <div>
                    <p className="text-sm text-gray-400">GitHub</p>
                    <p className="text-white font-semibold">@jaihoi</p>
                  </div>
                </a>
              </div>
            </div>

            <form onSubmit={handleFormSubmit} className="space-y-6 p-8 bg-white/5 rounded-lg border border-white/10">
              <div>
                <label className="block text-sm font-semibold text-white mb-2">Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-[#00d9b6]"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-white mb-2">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-[#00d9b6]"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-white mb-2">Message</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-[#00d9b6] resize-none"
                  placeholder="Your message..."
                ></textarea>
              </div>

              <Button
                type="submit"
                disabled={formStatus === 'loading'}
                className="w-full bg-[#00d9b6] hover:bg-[#00e6c3] text-black font-semibold rounded-lg"
              >
                {formStatus === 'loading' ? 'Sending...' : formStatus === 'success' ? '✓ Sent!' : 'Send Message'}
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold mb-12">Education</h2>

          <div className="space-y-6">
            {education.map((edu) => (
              <div key={edu.id} className="p-8 bg-white/5 rounded-lg border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-2">{edu.degree} in {edu.field}</h3>
                <p className="text-[#00d9b6] font-semibold mb-2">{edu.school}</p>
                <p className="text-gray-400 mb-4">{edu.duration}</p>
                <ul className="space-y-2">
                  {edu.achievements.map((achievement, idx) => (
                    <li key={idx} className="flex gap-3 text-gray-300">
                      <span className="text-[#00d9b6]">•</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400">&copy; 2025 Pintu Kumar Sharma. All rights reserved.</p>
          <p className="text-sm text-gray-500 mt-2">Built with Next.js, React, and Tailwind CSS</p>
        </div>
      </footer>
    </div>
  )
}
