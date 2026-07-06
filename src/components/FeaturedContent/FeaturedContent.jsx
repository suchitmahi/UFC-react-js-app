import "./FeaturedContent.css";
import ConorMaxInterview from "../../assets/images/ConorMaxInterview.png";
import { InstagramEmbed } from "react-social-media-embed";

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
                            Conor McGregor and Max Holloway Meet Again<br/> UFC 329 Interview
                        </p>

                    </div>

                </div>

                <div className="featured-sidebar">

                    <div className="instagram-card">

                        <p className="sidebar-title">
                            UFC 329 Tickets Now Available!
                        </p>

                        <InstagramEmbed
                            url="https://www.instagram.com/p/DabOzwjEi19/"
                            width="100%"
                        />

                    </div>

                </div>

            </div>

        </section>
    );
};

export default FeaturedContent;