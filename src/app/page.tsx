// Test preview deployment
// This is a temporary change to verify preview deployments are working

import { Metadata } from 'next'
import Image from 'next/image';
import Link from 'next/link';

const skills = [
  {
    category: 'Frontend',
    items: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS']
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Python', 'AWS', 'RESTful APIs']
  }
];

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'Modern e-commerce platform with Next.js and Stripe',
    tech: ['Next.js', 'TypeScript', 'Stripe'],
    link: 'https://github.com/hariparasuraman/ecommerce',
  },
  {
    title: 'Task Manager',
    description: 'Real-time collaborative task management app',
    tech: ['React', 'Node.js', 'Socket.io'],
    link: 'https://github.com/hariparasuraman/task-manager',
  },
];

export const metadata: Metadata = {
  title: 'Hariharan Parasuraman - Full Stack Developer',
  description: 'Full Stack Developer specializing in modern web technologies',
}

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 glass-effect shadow-sm z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="text-xl font-bold text-gradient">
              HP
            </Link>
            <nav className="space-x-6">
              {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  {item}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 pt-20">
        {/* Hero Section */}
        <section className="py-20 text-center">
          <p className="text-lg text-gray-600 mb-4 animate-float">Hey there! My name is</p>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-gradient">
            HARIHARAN
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 animate-float">or you can call me</p>
          <h2 className="text-4xl md:text-6xl font-bold mb-8 text-gradient">
            HARI
          </h2>
          <div className="max-w-2xl mx-auto">
            <p className="text-xl text-gray-600 mb-8 animate-float">
              I am a Full Stack Developer,<br />
              passionate about creating beautiful web applications,<br />
              and turning complex problems into simple solutions<br />
              ... <span className="italic">and just a human</span>
            </p>
          </div>
        </section>

        {/* About */}
        <section id="about" className="py-16">
          <h2 className="section-heading text-center mb-8">Welcome to my digital world!</h2>
          <div className="max-w-2xl mx-auto">
            <div className="card text-center hover:scale-up">
              <p className="text-lg text-gray-600 mb-6">
                Since I started my journey in web development, I've discovered a whole new world 
                and met many awesome people along the way. Some became friends, some became mentors, 
                and some I had the pleasure to mentor.
              </p>
              <p className="text-lg text-gray-600">
                It's become an exciting chapter in my life's story, and I'm working hard to make it 
                beautiful and meaningful.
              </p>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="py-16">
          <h2 className="section-heading text-center mb-12">My Toolbox</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {skills.map((category) => (
              <div key={category.category} className="card hover:scale-up">
                <h3 className="text-xl font-semibold mb-4 text-gradient">
                  {category.category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {category.items.map((skill) => (
                    <span
                      key={skill}
                      className="skill-tag"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="py-16">
          <h2 className="section-heading text-center mb-12">Featured Work</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {projects.map((project) => (
              <article key={project.title} className="card hover:scale-up">
                <h3 className="text-xl font-semibold mb-2 text-gradient">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="skill-tag"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  View Project →
                </a>
              </article>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-16">
          <h2 className="section-heading text-center mb-8">Let's Connect</h2>
          <div className="max-w-2xl mx-auto">
            <div className="card text-center hover:scale-up">
              <p className="text-lg text-gray-600 mb-8">
                I'm always excited to collaborate on interesting projects and meet fellow developers.
                Feel free to reach out!
              </p>
              <a
                href="mailto:hariharan.parasuraman@example.com"
                className="inline-block px-8 py-4 bg-primary text-white rounded-lg hover:bg-primary-dark transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                Say Hello
              </a>
              <div className="flex justify-center space-x-8 mt-8">
                {[
                  { name: 'GitHub', url: 'https://github.com/hariparasuraman' },
                  { name: 'LinkedIn', url: 'https://linkedin.com/in/hariparasuraman' },
                ].map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-primary transition-all duration-300 hover:scale-110"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
} 