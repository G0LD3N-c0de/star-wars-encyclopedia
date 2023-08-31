import "../blocks/Films.css";

const Films = ({ title, episodeId, openingCrawl }) => {
  return (
    <section className="films">
      <div className="films__title">{title}</div>
      <div className="films_id">{episodeId}</div>
      <div className="films__score">{openingCrawl}</div>
    </section>
  );
};

export default Films;
