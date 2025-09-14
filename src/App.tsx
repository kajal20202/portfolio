// ------------------------------------------------------------------------------------------

import './styles/globals.scss';
import './styles/colors.scss';

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import About from './sections/About/About';
import Contact from './sections/Contact/Contact';
import Experience from './sections/Experience/Experience';
import Landing from './sections/Landing/Landing';
import Projects from './sections/Projects/Projects';
import Skills from './sections/Skills/Skills';

import type { FC, JSX } from 'react';
// ------------------------------------------------------------------------------------------

const App: FC = (): JSX.Element => {
    return (
        <>
            <Header />
            <main>
                <About />
                <Experience />
                <Projects />
                <Landing />
                <Projects />
                <Skills />
                <Contact />
            </main>
            <Footer />
        </>
    );
};

// ------------------------------------------------------------------------------------------

export default App;

// ------------------------------------------------------------------------------------------
