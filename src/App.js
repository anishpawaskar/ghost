import './App.css';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { IntroSectin } from './components/IntroSectin';
import { Navbar } from './components/Navbar';
import { Posts } from './components/Posts';

function App() {
  return (
    <div className="ghost-site-layout">
      <Navbar />
      <Header />
      <IntroSectin />
      <Posts />
      <Footer />
    </div>
  );
}

export default App;
