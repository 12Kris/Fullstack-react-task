import Header from "./components/Header";
import Trasform from "./components/Trasform";
import Standout from "./components/Standout";
import Feedback from "./components/Feedback";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import './App.css';

function App() {
  return (
    <>
      <Header />
        <main>
          <Trasform />
          <Standout />
          <Feedback />
          <Gallery />
        </main>
      <Footer /> 
    </>
  );
}

export default App;