import "./FeaturedContent.css";
import ConorMaxInterview from "../../assets/images/ConorMaxInterview.png";

const FeaturedContent = () => {
    return (
        <section className="featured-content">

            <h2 className="section-title">
                FEATURED CONTENT
            </h2>

            <div className="featured-grid">

                <div className="featured-main">

                    <img
                        src={ConorMaxInterview}
                        alt="Conor Max Interview"
                    />

                    <div className="featured-info">

                        <p className="featured-label">
                            INTERVIEW | 1 MONTH AGO
                        </p>

                        <p className="Interview-title">
                            Conor McGregor and Max Holloway Meet Again | UFC 329 Interview
                        </p>

                    </div>

                </div>

                <div className="featured-side">

                    <h4>Latest Posts</h4>

                    <div className="social-card">
                        UFC 330 Tickets Available
                    </div>

                    <div className="social-card">
                        Countdown to UFC 330
                    </div>

                    <div className="social-card">
                        Behind The Scenes
                    </div>

                </div>

            </div>

        </section>
    );
};

export default FeaturedContent;