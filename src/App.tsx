import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Card, CardContent } from './components/ui/card';
import { Button } from './components/ui/button';
import { ThemeToggle } from './components/ui/theme-toggle';
import { LanguageSelector } from './components/ui/language-selector';
import zakariaImg from './images/zaki.jpg';
import nourhaneImg from './images/nourhane.jpg';
import ridaImg from './images/grimes.jpg';
import bgImage from './images/background.jpg';


Unknown_person
import { Heart, Calendar, Brain, Code, Mail, Instagram, Send, BookOpen, Stethoscope, Microscope } from 'lucide-react';

function App() {
  const { t } = useTranslation();

  const leaders = [
    {
      name: "ZAKARIA FOUGHALIA",
      role: "President",
      image: zakariaImg
    },
    {
      name: "NOURHANE TERKI",
      role: "Vice President",
      image: nourhaneImg
    },
    {
      name: "GRIMES RAID",
      role: "photography team leader",
      image:  ridaImg
    }
 
  ];

  const events = [
    {
      title: t('events.workshop.title'),
      date: "April 20, 2025",
      description: t('events.workshop.description'),
      icon: <Calendar className="w-6 h-6 text-red-500 dark:text-red-400" />
    },
    {
      title: t('events.symposium.title'),
      date: "May 15, 2025",
      description: t('events.symposium.description'),
      icon: <Brain className="w-6 h-6 text-red-500 dark:text-red-400" />
    },
    {
      title: t('events.hackathon.title'),
      date: "June 1, 2025",
      description: t('events.hackathon.description'),
      icon: <Code className="w-6 h-6 text-red-500 dark:text-red-400" />
    }
  ];

  const medicalResources = [
    {
      title: t('medInfo.categories.research.title'),
      description: t('medInfo.categories.research.description'),
      icon: <Microscope className="w-12 h-12 text-red-500 dark:text-red-400" />
    },
    {
      title: t('medInfo.categories.education.title'),
      description: t('medInfo.categories.education.description'),
      icon: <BookOpen className="w-12 h-12 text-red-500 dark:text-red-400" />
    },
    {
      title: t('medInfo.categories.clinical.title'),
      description: t('medInfo.categories.clinical.description'),
      icon: <Stethoscope className="w-12 h-12 text-red-500 dark:text-red-400" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 via-white to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 dark:text-white">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-red-600 dark:text-red-400">{t('hero.title')}</h1>
          <div className="flex items-center gap-4">
            <LanguageSelector />
            <ThemeToggle />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-r from-red-600 to-pink-600 dark:from-red-900 dark:to-pink-900 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div 
  className="absolute inset-0 opacity-20" 
  style={{
    backgroundImage: `url(${bgImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center"
  }}
></div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative text-center text-white z-10 px-6"
        >
          <h1 className="text-6xl md:text-8xl font-bold mb-4">{t('hero.title')}</h1>
          <p className="text-xl md:text-2xl mb-8">{t('hero.subtitle')}</p>
          <Button 
            size="lg"
            className="bg-white text-red-600 hover:bg-red-100 hover:text-red-700 dark:bg-red-500 dark:text-white dark:hover:bg-red-600"
          >
            {t('hero.joinButton')}
          </Button>
        </motion.div>
      </section>

      {/* Medical Information Section */}
      <section className="py-20 px-6 bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">{t('medInfo.title')}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {medicalResources.map((resource, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Card className="h-full dark:bg-gray-700">
                  <CardContent className="p-6 text-center">
                    <div className="mb-4 flex justify-center">{resource.icon}</div>
                    <h3 className="text-xl font-semibold mb-2">{resource.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{resource.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Rest of the sections... */}
      {/* About Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-2 gap-8"
          >
            <Card className="dark:bg-gray-700">
              <CardContent className="p-6">
                <Heart className="w-12 h-12 text-red-500 dark:text-red-400 mb-4" />
                <h2 className="text-2xl font-bold mb-4">{t('about.mission.title')}</h2>
                <p className="text-gray-600 dark:text-gray-300">{t('about.mission.description')}</p>
              </CardContent>
            </Card>
            <Card className="dark:bg-gray-700">
              <CardContent className="p-6">
                <Brain className="w-12 h-12 text-red-500 dark:text-red-400 mb-4" />
                <h2 className="text-2xl font-bold mb-4">{t('about.vision.title')}</h2>
                <p className="text-gray-600 dark:text-gray-300">{t('about.vision.description')}</p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-20 px-6 bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">{t('events.title')}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Card className="dark:bg-gray-700">
                  <CardContent className="p-6">
                    <div className="mb-4">{event.icon}</div>
                    <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{event.date}</p>
                    <p className="text-gray-600 dark:text-gray-300">{event.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">{t('team.title')}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {leaders.map((leader, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Card className="text-center dark:bg-gray-700">
                  <CardContent className="p-6">
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                    />
                    <h3 className="text-xl font-semibold mb-1">{leader.name}</h3>
                    <p className="text-gray-500 dark:text-gray-400">{leader.role}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-red-600 to-pink-600 dark:from-red-900 dark:to-pink-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">{t('cta.title')}</h2>
          <p className="text-xl mb-8">{t('cta.subtitle')}</p>
          <Button
            size="lg"
            className="bg-white text-red-600 hover:bg-red-100 hover:text-red-700 dark:bg-red-500 dark:text-white dark:hover:bg-red-600"
          >
            {t('cta.button')}
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">{t('hero.title')}</h3>
            <p className="text-gray-400">{t('footer.description')}</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.contact')}</h4>
            <div className="flex items-center space-x-2 text-gray-400">
              <Mail className="w-5 h-5" />
              <a href="medmindoffice@gmail.com">medmindoffice@gmail.com</a>

            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.followUs')}</h4>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/medmind_club?igsh=YXRqcjk5NHJ2Y3l5" className="text-gray-400 hover:text-white">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Send className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} MEDMIND. {t('footer.rights')}</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
