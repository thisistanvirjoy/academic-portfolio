import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Research from './components/Research';
import Projects from './components/Projects';
import Publications from './components/Publications';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <About />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Education />
          <Skills />
        </div>
        <Research />
        <Projects />
        <Publications />
        <Contact />
      </main>
      <footer className="bg-gray-800 text-white text-center py-4">
        <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;