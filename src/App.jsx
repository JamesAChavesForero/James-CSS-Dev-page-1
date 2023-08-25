import './index.css'
import Header from './components/header/Header';
import AboutMe from './components/aboutMe/AboutMe';
import Experience from './components/experience/Experience'
import Portfolio from './components/portfolio/Portfolio'
import Referrals from './components/referrals/Referrals'
import portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/ContactMe'
function App() {
  return (
    <div className="App">
      <Header/>
      <AboutMe/>
      <Experience/>
      <Portfolio/>
      <Referrals/>
      <Contact />
      <footer className="text-center py-4 text-gray-500">
        <p>&copy; {new Date().getFullYear()} James Chaves. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
