import { motion } from 'framer-motion'
import { ExternalLink, Github, Sparkles } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      title: 'Nooby: Your A.I. Companion',
      description: 'A cross-platform AI web assistant that enhances browsing with intelligent search, chat, and summarization features.',
      features: [
        'Chat with PDF/Webpage functionality',
        'YouTube transcript summarizer',
        'Custom prompt builder using OpenAI APIs',
        'AI-driven search and article summarization',
        'Web scraping capabilities',
      ],
      tech: ['JavaScript', 'Python', 'Preact', 'OpenAI API'],
      link: 'http://nooby.vercel.app/',
      gradient: 'from-cyan-500 to-blue-600',
    },
    {
      title: 'Sanjivan Medico Traders - Pharma ERP',
      description: 'Full-scale Inventory, Billing, and Analytics System for a pharmaceutical distributor with 15+ integrated modules.',
      features: [
        'Sales, Invoices, Expenses, Stock Management',
        'Delivery tracking and Attendance system',
        'Salary management and Financial Statements',
        'Real-time dashboards and analytics',
        'Role-based authentication and activity logs',
      ],
      tech: ['Next.js 15', 'Prisma ORM', 'MongoDB', 'Vercel'],
      gradient: 'from-purple-500 to-pink-600',
    },
    {
      title: 'DarkCrypt: Bitcoin Wallet Balance Checker',
      description: 'Python script to fetch Bitcoin wallet balances via Blockchain.info API with automated alerts and detailed reporting.',
      features: [
        'Real-time wallet balance checking',
        'Multi-currency display (BTC, USD, INR)',
        'Automated threshold alerts',
        'Timestamped reports and execution metrics',
      ],
      tech: ['Python', 'Requests', 'Coindesk API', 'Blockchain.info API'],
      link: 'https://github.com/noobacker/Dark-Crypt-Bitcoin-wallet-Balance-Checker',
      github: 'https://github.com/noobacker/Dark-Crypt-Bitcoin-wallet-Balance-Checker',
      gradient: 'from-orange-500 to-red-600',
    },
  ]

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-4">
            <span className="text-gradient">Featured Projects</span>
          </h1>
          <p className="text-xl text-gray-400">Building innovative solutions with modern technologies</p>
        </motion.div>

        {/* Projects Grid */}
        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative bg-dark border border-gray-800 rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 overflow-hidden">
                {/* Gradient Background Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                
                <div className="relative z-10">
                  {/* Project Header */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <Sparkles className="text-primary" size={24} />
                        <h2 className="text-2xl md:text-3xl font-bold text-white">
                          {project.title}
                        </h2>
                      </div>
                      <p className="text-gray-300 text-lg mb-4">
                        {project.description}
                      </p>
                    </div>
                    
                    {/* Links */}
                    <div className="flex gap-3 mt-4 md:mt-0 md:ml-4">
                      {project.link && (
                        <motion.a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                          className="p-3 bg-primary/10 border border-primary rounded-lg hover:bg-primary/20 transition-colors"
                          aria-label="View Project"
                        >
                          <ExternalLink size={20} className="text-primary" />
                        </motion.a>
                      )}
                      {project.github && (
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                          className="p-3 bg-gray-800 border border-gray-700 rounded-lg hover:border-primary transition-colors"
                          aria-label="View on GitHub"
                        >
                          <Github size={20} className="text-gray-300" />
                        </motion.a>
                      )}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-primary mb-3">Key Features:</h3>
                    <ul className="grid md:grid-cols-2 gap-3">
                      {project.features.map((feature, i) => (
                        <li key={i} className="flex items-start text-gray-300">
                          <span className="text-primary mr-2 mt-1">▹</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack */}
                  <div>
                    <h3 className="text-sm font-semibold text-gray-400 mb-3">Technologies Used:</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <motion.span
                          key={i}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.05 }}
                          whileHover={{ scale: 1.05 }}
                          className={`px-4 py-2 bg-gradient-to-r ${project.gradient} bg-opacity-10 border border-gray-700 rounded-lg text-sm font-medium text-gray-200`}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-600/10 border border-primary/30 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">More Projects Coming Soon</h3>
            <p className="text-gray-400 mb-6">
              I'm constantly working on new and exciting projects. Check out my GitHub for more!
            </p>
            <motion.a
              href="https://github.com/noobacker"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-medium hover:shadow-lg hover:shadow-cyan-500/50 transition-shadow"
            >
              <Github size={20} />
              Visit My GitHub
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Projects
