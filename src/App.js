import './App.css';
import Header from './components/header/Header';
import Introduction from './components/introduction/Introduction';
import Benefits from './components/benefits/Benefits';
import Industries from './components/industries/Industries';
import Features from './components/features/Features';
import Capabilities from './components/capabilities/Capabilities';
import Jobs from './components/jobs/Jobs';
import Partner from './components/partners/Partner';
import Community from './components/community/Community';
import Newsroom from './components/newsroom/Newsroom';
import Report from './components/report/Report';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Introduction />
      <Benefits />
      <Industries />
      <Features />
      <Capabilities />
      <Jobs/>
      <Partner />
      <Community />
      < Newsroom/>
      <Report />
      <Footer />
    </div>
  );
}

export default App;
