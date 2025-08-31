import React from 'react'

import styles from './styles/global.module.scss';



// -------------------------------------------------------------------------------------------

import Contact from './screens/Contact/Contact';
import Education from './screens/Education/Education';
import Experience from './screens/Experience/Experience';
import Introduction from './screens/Introduction/Introduction';
import Projects from './screens/Projects/Projects';
import Skills from './screens/Skills/Skills';
import Thanks from './screens/Thanks/Thanks';
import Header from './components/Header/Header';
import Border from './components/common-buttons/Border/Border';
import Footer from './components/Footer/Footer';

// -------------------------------------------------------------------------------------------


const App = () => {
  return (
    <>
			<Header />
			<Introduction />
			<Border />
			<Skills />
			<Border />
			<Experience />
			<Border />
			<Projects />
			<Border />
			<Education />
			<Border />
			<Thanks />
			<Border />
			<Contact />
			<Footer />
		</>
    
  );
};

export default App;