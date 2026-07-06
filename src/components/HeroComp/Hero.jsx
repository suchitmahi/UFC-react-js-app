import HeroBanner from "./HeroBanner";
import HeroContent from "./HeroContent";
import TopStories from "./TopStories";

import "./hero.css";

function Hero() {
    return (
        <section className="hero">

            <div className="hero-left">
                <HeroBanner />
                <HeroContent />
            </div>

            <TopStories />

        </section>
    );
}

export default Hero;











