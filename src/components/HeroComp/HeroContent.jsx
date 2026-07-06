import "./hero.css";

function HeroContent() {
    return (
        <div className="hero-content">

      <span className="hero-category">
        UFC 329
      </span>

            <h1 className="hero-title">
                Topuria vs Holloway
            </h1>

            <p className="hero-description">
                Witness one of the most anticipated rematches in UFC history.
                Follow all the latest updates, fight analysis, and exclusive
                behind-the-scenes coverage leading up to fight night.
            </p>

            <button className="hero-btn">
                WATCH HIGHLIGHT
            </button>

        </div>
    );
}

export default HeroContent;