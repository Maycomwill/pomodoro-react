import { Cronometro } from "./components/Cronometro";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { BgSVG } from "./components/bgSVG";

function App() {
  return (
    <div className="App">
      <div className="w-screen h-screen absolute z-10">
        <div>
          <Header />
          <div className="w-full mt-12">
            <Cronometro />
          </div>
        </div>
        <Footer />
      </div>
      <BgSVG />
    </div>
  );
}

export default App;
