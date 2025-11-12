import { Github, Linkedin, Mail, Instagram, Globe } from 'lucide-react'
import { motion } from 'framer-motion'

const Footer = () => {
  const socialLinks = [
    { icon: Github, url: 'https://github.com/noobacker', label: 'GitHub' },
    { icon: Linkedin, url: 'https://www.linkedin.com/in/harshalpimpalshende/', label: 'LinkedIn' },
    { icon: Globe, url: 'http://harshal-pimpalshende.vercel.app', label: 'Portfolio' },
    { icon: Mail, url: 'mailto:harshalpimpalshwnde@gmail.com', label: 'Email' },
    { icon: Instagram, url: 'https://www.instagram.com/iharshalpimpalshende/', label: 'Instagram' },
  ]

  return (
    <footer className="bg-dark border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center space-y-6">
          {/* Social Links */}
          <div className="flex space-x-6">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-400 hover:text-primary transition-colors"
                aria-label={social.label}
              >
                <social.icon size={24} />
              </motion.a>
            ))}
          </div>

          {/* Contact Info */}
          <div className="text-center text-gray-400 text-sm space-y-1">
            <p>New York, USA</p>
            {/* <p>+1 929 784 9069 | +91 96373 42372</p> */}
          </div>

          {/* Copyright */}
          <div className="text-center text-gray-500 text-sm">
            <p>&copy; {new Date().getFullYear()} Harshal Pimpalshende. All rights reserved.</p>
            <p className="mt-1">Built with and for a PURPOSE</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
