import Navbar from "./components/Navbar.tsx";
import Hero from "./components/Hero.tsx";
import Highlights from "./components/Highlights.tsx";

const App = () => {
    return <main className="bg-black">
        <Navbar/>
        <Hero/>
        <Highlights/>
    </main>;
};

export default App;
