import Footer from "./layout/Footer";
import Header from "./layout/Header";
import About from "./pages/About";

function App() {
  return (
    <div className="text-3xl text-center font-bold underline">
      <Header />
      <About/>
      <Footer />
    </div>
  );
}

export default App;
