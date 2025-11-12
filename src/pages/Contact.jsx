import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, Github, Linkedin, Globe, Instagram } from 'lucide-react'
import { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'harshalpimpalshwnde@gmail.com',
      link: 'mailto:harshalpimpalshwnde@gmail.com',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Harshal Pimpalshende',
      link: 'https://www.linkedin.com/in/harshalpimpalshende/',
    },
{
  icon: Github,
  label: 'Github',
  value: 'Noobacker',
  link: 'https://github.com/noobacker',
},

    {
      icon: Instagram,
      label: 'Instagram',
      value: 'iharshalpimpalshende',
      link: 'https://www.instagram.com/iharshalpimpalshende/',
    },
//     {
//       icon: Phone,
//       label: 'Phone (India)',
//       value: '+91 96373 42372',
//       link: 'tel:+919637342372',
//     },
// {
//       icon: Phone,
//       label: 'Phone (USA)',
//       value: '+1 929 784 9069',
//       link: 'tel:+19297849069',
//     },
    
    {
      icon: MapPin,
      label: 'Location',
      value: 'New York, USA',
    },
  ]

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      url: 'https://github.com/noobacker',
      color: 'hover:text-gray-300',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/harshalpimpalshende/',
      color: 'hover:text-blue-400',
    },
    {
      icon: Globe,
      label: 'Portfolio',
      url: 'http://harshal-pimpalshende.vercel.app',
      color: 'hover:text-cyan-400',
    },
  ]

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Create mailto link with form data
    const subject = encodeURIComponent(formData.subject || 'Contact from Portfolio')
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )
    window.location.href = `mailto:harshalpimpalshwnde@gmail.com?subject=${subject}&body=${body}`
  }

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
            <span className="text-gradient">Get In Touch</span>
          </h1>
          <p className="text-xl text-gray-400">
            Let's discuss your next project or opportunity
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
                <p className="text-gray-400 mb-8">
                  Feel free to reach out through any of these channels. I'm always open to discussing 
                  new projects, creative ideas, or opportunities to be part of your vision.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="flex items-start gap-4 p-4 bg-dark/50 border border-gray-800 rounded-lg hover:border-primary/50 transition-colors"
                  >
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <info.icon className="text-primary" size={24} />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm mb-1">{info.label}</p>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-white hover:text-primary transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-white">{info.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              {/* <div>
                <h3 className="text-xl font-bold mb-4">Connect With Me</h3>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                      className={`p-4 bg-dark border border-gray-800 rounded-lg ${social.color} transition-all hover:border-primary/50`}
                      aria-label={social.label}
                    >
                      <social.icon size={24} />
                    </motion.a>
                  ))}
                </div>
              </div> */}

              {/* Availability */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="p-6 bg-gradient-to-br from-cyan-500/10 to-blue-600/10 border border-primary/30 rounded-lg"
              >
                <h3 className="text-lg font-bold mb-2">Currently Available</h3>
                <p className="text-gray-300">
                  I'm currently pursuing my Master's at NYU and open to internships opportunities, 
                  freelance, and full-time positions starting May 2027.
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="bg-dark/50 border border-gray-800 rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-6">Send Me a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-darker border border-gray-700 rounded-lg focus:outline-none focus:border-primary transition-colors text-white"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-darker border border-gray-700 rounded-lg focus:outline-none focus:border-primary transition-colors text-white"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-darker border border-gray-700 rounded-lg focus:outline-none focus:border-primary transition-colors text-white"
                    placeholder="Project Inquiry"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 bg-darker border border-gray-700 rounded-lg focus:outline-none focus:border-primary transition-colors text-white resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-medium hover:shadow-lg hover:shadow-cyan-500/50 transition-shadow"
                >
                  <Send size={20} />
                  Send Message
                </motion.button>
              </form>

              <p className="text-gray-400 text-sm text-center mt-6">
                This form will open your default email client. You can also email me directly at{' '}
                <a href="mailto:harshalpimpalshwnde@gmail.com" className="text-primary hover:underline">
                  harshalpimpalshwnde@gmail.com
                </a>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Contact
