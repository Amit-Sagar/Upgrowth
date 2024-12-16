import Footer from "./layout/Footer";
import Header from "./layout/Header";
import About from "./pages/About";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <Header />
      <HomePage/>
      <Footer />
    </div>
  );
}

export default App;
