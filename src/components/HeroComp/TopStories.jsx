import "./hero.css";

const stories = [
    {
        category: "Highlights",
        title: "Freedom 250 Card | Ilia Topuria"
    },
    {
        category: "Athletes",
        title: "Conor McGregor | The Mac Is Back"
    },
    {
        category: "Athletes",
        title: "Photo Gallery | Paddy Pimblett Trains For UFC 329"
    },
    {
        category: "Fight Talk",
        title: "Mackenzie Dern Talks First Title Defense"
    },
    {
        category: "International Fight Week",
        title: "Fight Week Reaches Another Historic Chapter"
    },
    {
        category: "Announcements",
        title: "UFC 329 Official Press Conference Announced"
    }
];

function TopStories() {
    return (
        <aside className="top-stories">
            <h2 className="stories-heading">
                TOP STORIES
            </h2>
            {stories.map((story, index) => (
                <div className="story-card" key={index}>
                    <div className="story-number">
                        {index + 1}
                    </div>
                    <div className="story-content">
            <span className="story-category">
              {story.category}
            </span>
                        <h3 className="story-title">
                            {story.title}
                        </h3>

                    </div>

                </div>

            ))}

        </aside>
    );
}

export default TopStories;