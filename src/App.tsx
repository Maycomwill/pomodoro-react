import { Cronometro } from "./components/Cronometro";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

function App() {
  return (
    <div className="App">
      <div className="w-screen h-screen bg-phonePattern bg-cover sm:bg-pomodoroPattern ">
        <div>
          <Header />
          <div className="w-full mt-12">
            <Cronometro />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
