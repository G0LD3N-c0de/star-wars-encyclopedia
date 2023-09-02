import "../blocks/People.css";

const People = ({
  name,
  height,
  mass,
  hairColor,
  skinColor,
  eyeColor,
  birthYear,
  gender,
  homeWorld,
}) => {
  return (
    <section className="people">
      <div className="people__name">{name}</div>
      <div className="people__height">{height}</div>
      <div className="people__mass">{mass}</div>
      <div className="people__hair-color">
        {hairColor || "Select options above and click button"}
      </div>
      <div className="people__skin-color">
        {skinColor || "to generate content"}
      </div>
      <div className="people__eye-color">{eyeColor}</div>
      <div className="people__birth-year">{birthYear}</div>
      <div className="people__genger">{gender}</div>
      <div className="people__home-world">{homeWorld}</div>
    </section>
  );
};

export default People;
