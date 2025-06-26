import { useState, useEffect } from 'react';
import { Header } from './components/layout/Header';
import Hero from './components/sections/Hero';
import { About } from './components/sections/About';
import { Projects } from './components/sections/Projects';
import Footer from './components/layout/Footer';
import { FiArrowUp } from 'react-icons/fi';
import Contact from './components/sections/Contact';

function App() {
          const [showScroll, setShowScroll] = useState(false);

          useEffect(() => {
                    const checkScroll = () => {
                              if (window.scrollY > 300) {
                                        setShowScroll(true);
                              } else {
                                        setShowScroll(false);
                              }
                    };

                    window.addEventListener('scroll', checkScroll);
                    return () => window.removeEventListener('scroll', checkScroll);
          }, []);

          const scrollToTop = () => {
                    window.scrollTo({
                              top: 0,
                              behavior: 'smooth',
                    });
          };

          return (
                    <div className="min-h-screen bg-white dark:bg-dark text-gray-800 dark:text-gray-200 transition-colors duration-300">
                              <Header />
                              <main>
                                        <section id="home" className="pt-5 md:pt-10 flex items-center">
                                                  <Hero />
                                        </section>
                                        <section id="about">
                                                  <About />
                                        </section>
                                        <section id="projects">
                                                  <Projects />
                                        </section>
                                        <section id="contact">
                                                  <Contact />
                                        </section>
                              </main>

                              <Footer />

                              {/* Back to top button */}
                              {showScroll && (
                                        <button
                                                  onClick={scrollToTop}
                                                  className="fixed bottom-8 right-8 bg-primary hover:bg-primary/90 text-white p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 z-50"
                                                  aria-label="Back to top"
                                        >
                                                  <FiArrowUp className="w-6 h-6" />
                                        </button>
                              )}
                    </div>
          );
}

export default App;
