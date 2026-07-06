import { Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar/Navbar.jsx";

import Home from "./pages/Home.jsx";
import Rankings from "./pages/Rankings.jsx";
import Search from "./pages/Search.jsx";
import UpcomingCards from "./pages/UpcomingCards.jsx";
import Events from "./pages/Events.jsx";
import News from "./pages/News.jsx";
import HelpSupport from "./pages/HelpSupport.jsx";

function App() {
    return (
        <>
        <Navbar/>

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/rankings" element={<Rankings />} />
            <Route path="/search" element={<Search />} />
            <Route path="/upcoming-cards" element={<UpcomingCards />} />
            <Route path="/events" element={<Events />} />
            <Route path="/news" element={<News />} />
            <Route path="/help-support" element={<HelpSupport />} />
        </Routes>
        </>
    );
}
export default App
