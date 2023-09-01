import "../blocks/Films.css";

const Films = ({ title, episodeId, openingCrawl }) => {
  return (
    <section className="films">
      <div className="films__title">
        {title || "Select options above and click button"}
      </div>
      <div className="films_id">{episodeId || "to generate content"}</div>
      <div className="films__score">{openingCrawl}</div>
    </section>
  );
};

export default Films;
