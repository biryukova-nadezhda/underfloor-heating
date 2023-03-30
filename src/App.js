import { Header } from './components/Header/Header';
import { Hero } from './components/Hero/Hero';
import { Advantage } from './components/Advantages/Advantage';
import { Calc } from './components/Calc/Calc';
import { Footer } from './components/Footer/Footer';
import logo from './assets/img/logo.svg';
import { Popup } from './components/Popup/Popup';

function App() {
  return (
    <div className="App">
      <Header logo={ logo } />
      <main className="main">
        <Hero />
        <Advantage />
        <Calc />
      </main>
      <Footer logo={ logo } />
      <Popup openPopup='jsOpenPopup' />
    </div>
  );
}

export default App;
