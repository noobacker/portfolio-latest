import { motion } from 'framer-motion'
import { Briefcase, GraduationCap, Award, BookOpen, ExternalLink } from 'lucide-react'

const Experience = () => {
  const experiences = [
    {
      type: 'work',
      title: 'Freelance Full-Stack Developer',
      company: 'Sanjivan Medico Traders',
      location: 'Pharma ERP Platform',
      period: 'Jan 2025 – Apr 2025',
      description: [
        'Designed and deployed a full-scale Inventory, Billing, and Analytics System for a pharmaceutical distributor',
        'Built 15+ integrated modules with role-based authentication and activity logs',
        'Engineered secure backend with Next.js 15, Prisma ORM, and MongoDB, hosted on Vercel',
        'Created real-time dashboards visualizing latest updates and stock movement across locations',
      ],
    },
    {
      type: 'work',
      title: 'Junior Software Developer',
      company: 'Donatekart',
      location: 'Bengaluru, India',
      period: 'Aug 2024 – Dec 2024',
      description: [
        'Promoted from intern to junior developer after 6-month internship for strong performance',
        'Refactored legacy React modules, improving maintainability and scalability',
        'Integrated multiple APIs including payment gateway and donation tracking features',
        'Optimized front-end performance achieving faster load time via lazy loading',
      ],
      link: 'https://drive.google.com/file/d/14JhEqw3h6xOwhP8e6ugn_s2AW80S-cnU/view?usp=share_link',
    },
    {
      type: 'internship',
      title: 'Software Developer Intern',
      company: 'Donatekart',
      location: 'Bengaluru, India',
      period: 'Feb 2024 – Jul 2024',
      description: [
        'Created responsive web pages and improved user experience across multiple campaigns',
        'Designed, developed, and maintained responsive pages using React',
        'Translated wireframes and design mockups into fully functional, interactive web pages',
        'Ensured 100% design accuracy and cross-browser compatibility',
      ],
      link: 'https://drive.google.com/file/d/1Yhrk9xRIj584Ydsp3qXpp9vkRg7CiAtR/view?usp=share_link',
    },
  ]

  const education = [
    {
      degree: 'Master of Science in Computer Science (MSCS)',
      institution: 'New York University – Tandon School of Engineering',
      location: 'Brooklyn, NY',
      period: 'Expected May 2027',
    },
    {
      degree: 'Bachelor of Engineering in Computer Engineering (B.E.)',
      institution: 'K.C.C.M.S.R., University of Mumbai',
      location: 'Thane, India',
      period: 'June 2020 – June 2024',
      gpa: '8.04 CGPA',
    },
  ]

  const achievements = [
    {
      title: '1st Place - KIMO Tech Competition',
      description: 'Out of 120 competitors, demonstrating skill in A.I. and Blockchain as a Service',
      link: 'https://drive.google.com/file/d/1PmCITIYlwGtGnY0kt2pv1o_xTWu0Iv8p/view?usp=share_link',
    },
    {
      title: 'Nooby: Your AI Companion',
      description: 'Shortlisted in Xibit, an intercollegiate innovation competition',
    },
  ]

  const publications = [
    {
      title: 'Nooby: A Comprehensive AI Extension for Intelligent Web Experiences',
      journal: 'Journal of Interdisciplinary Cycle Research, IEEE-approved (Vol XVI, Issue IV)',
      doi: '18.0002.JICR.2024.V16I4.008301.3171237345303838',
      link: 'https://drive.google.com/file/d/1fxfHYphabJQ25fO7GorwTezh17En4-Jy/view?usp=sharing',
    },
  ]

  const certifications = [
    {
      title: 'IBM Data Science Certificate',
      description: '10 Courses covering Python, AI, ML, SQL',
      link: 'https://coursera.org/share/554483056b5669b7dadef146afde3a45',
    },
    {
      title: 'Cryptography with Python',
      issuer: 'Infosys Springboard',
      link: 'https://infyspringboard.onwingspan.com/public-assets/infosysheadstart/cert/lex_auth_0130944094616698881783_shared/1-2e3b2d14-b820-4375-aa6f-ec04938ffc29.pdf',
    },
  ]

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-4">
            <span className="text-gradient">My Journey</span>
          </h1>
          <p className="text-xl text-gray-400">Experience, Education & Achievements</p>
        </motion.div>

        {/* Experience Section */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-8"
          >
            <Briefcase className="text-primary" size={32} />
            <h2 className="text-3xl font-bold">Professional Experience</h2>
          </motion.div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative pl-8 border-l-2 border-primary/30 hover:border-primary transition-colors"
              >
                <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full"></div>
                <div className="bg-dark/50 border border-gray-800 rounded-lg p-6 hover:border-primary/50 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
                      <p className="text-primary font-medium">{exp.company}</p>
                      <p className="text-gray-400 text-sm">{exp.location}</p>
                    </div>
                    <div className="flex items-center gap-2 mt-2 sm:mt-0">
                      <span className="text-gray-400 text-sm">{exp.period}</span>
                      {exp.link && (
                        <a
                          href={exp.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:text-cyan-400 transition-colors"
                        >
                          <ExternalLink size={16} />
                        </a>
                      )}
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-gray-300 flex items-start">
                        <span className="text-primary mr-2">▹</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-8"
          >
            <GraduationCap className="text-primary" size={32} />
            <h2 className="text-3xl font-bold">Education</h2>
          </motion.div>

          <div className="space-y-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-dark/50 border border-gray-800 rounded-lg p-6 hover:border-primary/50 transition-colors"
              >
                <h3 className="text-xl font-bold text-white mb-2">{edu.degree}</h3>
                <p className="text-primary font-medium mb-1">{edu.institution}</p>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-gray-400 text-sm">
                  <span>{edu.location}</span>
                  <span>{edu.period}</span>
                </div>
                {edu.gpa && (
                  <p className="text-gray-300 mt-2">CGPA: <span className="text-primary font-semibold">{edu.gpa}</span></p>
                )}
              </motion.div>
            ))}
          </div>
        </section>

        {/* Publications Section */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-8"
          >
            <BookOpen className="text-primary" size={32} />
            <h2 className="text-3xl font-bold">Publications</h2>
          </motion.div>

          <div className="space-y-6">
            {publications.map((pub, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-dark/50 border border-gray-800 rounded-lg p-6 hover:border-primary/50 transition-colors"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">{pub.title}</h3>
                    <p className="text-gray-300 mb-1">{pub.journal}</p>
                    <p className="text-gray-400 text-sm">DOI: {pub.doi}</p>
                  </div>
                  <a
                    href={pub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-cyan-400 transition-colors ml-4"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Achievements Section */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-8"
          >
            <Award className="text-primary" size={32} />
            <h2 className="text-3xl font-bold">Achievements</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-cyan-500/10 to-blue-600/10 border border-primary/30 rounded-lg p-6"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-bold text-white">{achievement.title}</h3>
                  {achievement.link && (
                    <a
                      href={achievement.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-cyan-400 transition-colors"
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
                <p className="text-gray-300">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Certifications Section */}
        <section>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-8"
          >
            <Award className="text-primary" size={32} />
            <h2 className="text-3xl font-bold">Certifications</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-dark/50 border border-gray-800 rounded-lg p-6 hover:border-primary/50 transition-colors"
              >
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-bold text-white">{cert.title}</h3>
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-cyan-400 transition-colors"
                  >
                    <ExternalLink size={18} />
                  </a>
                </div>
                {cert.description && <p className="text-gray-300">{cert.description}</p>}
                {cert.issuer && <p className="text-gray-400 text-sm mt-1">Issued by: {cert.issuer}</p>}
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

export default Experience
