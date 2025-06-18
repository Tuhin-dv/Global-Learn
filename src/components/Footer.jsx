
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Globe,
  Users,
  BookOpen,
  Award,
  Heart,
} from "lucide-react"

const Footer = () => {
  const year = new Date().getFullYear()

  const quickLinks = [
    { name: "Home", href: "/", icon: <Globe className="w-4 h-4" /> },
    { name: "Find Tutors", href: "/find-tutors", icon: <Users className="w-4 h-4" /> },
    { name: "Add Tutorial", href: "/add-tutorial", icon: <BookOpen className="w-4 h-4" /> },
    { name: "My Tutorials", href: "/my-tutorials", icon: <Award className="w-4 h-4" /> },
  ]

  const languages = [
    { name: "English", flag: "🇬🇧", students: "2.5K+" },
    { name: "Spanish", flag: "🇪🇸", students: "1.8K+" },
    { name: "French", flag: "🇫🇷", students: "1.2K+" },
    { name: "Mandarin", flag: "🇨🇳", students: "950+" },
  ]

  const socialLinks = [
    { name: "Facebook", icon: <Facebook className="w-5 h-5" />, href: "#", color: "hover:text-blue-500" },
    { name: "Twitter", icon: <Twitter className="w-5 h-5" />, href: "#", color: "hover:text-sky-400" },
    { name: "Instagram", icon: <Instagram className="w-5 h-5" />, href: "#", color: "hover:text-pink-500" },
    { name: "LinkedIn", icon: <Linkedin className="w-5 h-5" />, href: "#", color: "hover:text-blue-600" },
  ]

  return (
    <footer className="relative bg-gradient-to-br from-slate-200 via-blue-200 to-indigo-300 dark:from-gray-900 dark:via-slate-900 dark:to-gray-800 transition-colors duration-500 overflow-hidden">
     
      <div className="relative z-10 pt-20 pb-8 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12 mb-16">
            {/* Brand Section */}
            <div className="lg:col-span-1 space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl flex items-center justify-center">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                    Globallearn
                  </h1>
                </div>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Empowering language learners worldwide. Connect with expert tutors and unlock your language journey.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm border border-gray-100 dark:border-gray-700">
                  <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">10K+</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">Students</div>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm border border-gray-100 dark:border-gray-700">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">500+</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">Tutors</div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                <div className="w-2 h-6 bg-gradient-to-b from-purple-600 to-blue-600 rounded-full"></div>
                Quick Links
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="group flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-300 p-2 rounded-lg hover:bg-white/50 dark:hover:bg-gray-800/50"
                    >
                      <div className="text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform duration-300">
                        {link.icon}
                      </div>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Popular Languages */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                <div className="w-2 h-6 bg-gradient-to-b from-purple-600 to-blue-600 rounded-full"></div>
                Popular Languages
              </h3>
              <ul className="space-y-3">
                {languages.map((language, index) => (
                  <li key={index}>
                    <div className="group flex items-center justify-between p-3 rounded-lg hover:bg-white/50 dark:hover:bg-gray-800/50 transition-all duration-300 cursor-pointer">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl group-hover:scale-110 transition-transform duration-300">
                          {language.flag}
                        </span>
                        <span className="text-gray-700 dark:text-gray-300 font-medium">{language.name}</span>
                      </div>
                      <span className="text-xs bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 px-2 py-1 rounded-full font-medium">
                        {language.students}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact & Social */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                <div className="w-2 h-6 bg-gradient-to-b from-purple-600 to-blue-600 rounded-full"></div>
                Stay Connected
              </h3>

              {/* Social Links */}
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className={`group p-3 rounded-xl bg-purple-300 text-gray-500 dark:text-white dark:bg-gray-800 shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${social.color}`}
                    aria-label={social.name}
                  >
                    <div className="group-hover:scale-110 transition-transform duration-300">{social.icon}</div>
                  </a>
                ))}
              </div>

              {/* Contact Info */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <div className="text-sm font-medium">Email</div>
                    <div className="text-sm">support@globallearn.com</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 rounded-lg flex items-center justify-center">
                    <Phone className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <div className="text-sm font-medium">Phone</div>
                    <div className="text-sm">+880 1234 567890</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <div className="text-sm font-medium">Location</div>
                    <div className="text-sm">Dhaka, Bangladesh</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter Section */}
        

          {/* Footer Bottom */}
          <div className="border-t border-gray-200 dark:border-gray-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                <span>© {year}</span>
                <span className="font-semibold text-purple-600 dark:text-purple-400">Globallearn</span>
                <span>• Crafted with</span>
                <Heart className="w-4 h-4 text-red-500 fill-current" />
                <span>for learners worldwide</span>
              </div>
              <div className="flex items-center gap-6 text-sm text-gray-500 dark:text-gray-400">
                <a href="#" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300">
                  Terms of Service
                </a>
                <a href="#" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300">
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
