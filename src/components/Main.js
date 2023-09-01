import Form from "./Form";
import People from "./People";
import Films from "./Films";
import "../blocks/Main.css";
import { useEffect, useState } from "react";
import { getStarWarsInfo, getHomeWorld } from "../utils/Api";
const Main = () => {
  const [category, setCategory] = useState("films");
  const [selection, setSelection] = useState(1);

  const [maxValue, setMaxValue] = useState(0);

  useEffect(() => {
    if (category === "films") {
      setMaxValue(6);
    } else if (category === "people") {
      setMaxValue(10);
    }
  }, [category]);
  // People
  const [name, setName] = useState("");
  const [height, setHeight] = useState("");
  const [mass, setMass] = useState("");
  const [hairColor, setHairColor] = useState("");
  const [skinColor, setSkinColor] = useState("");
  const [eyeColor, setEyeColor] = useState("");
  const [birthYear, setBirthYear] = useState("");
  const [gender, setGender] = useState("");
  const [homeWorld, setHomeWorld] = useState("");

  // Films
  const [title, setTitle] = useState("");
  const [episodeId, setEpisodeId] = useState("");
  const [openingCrawl, setOpeningCrawl] = useState("");

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };
  const handleSelectionChange = (e) => {
    setSelection(e.target.value);
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    getStarWarsInfo(category, selection)
      .then((res) => {
        if (category === "films") {
          setTitle(res.title);
          setEpisodeId(res.episode_id);
          setOpeningCrawl(res.opening_crawl);
        }
        if (category === "people") {
          setName("Name: " + res.name);
          setHeight("Height: " + res.height + "cm");
          setMass("Mass: " + res.mass + "kg");
          setHairColor("Hair color: " + res.hair_color);
          setSkinColor("Skin color: " + res.skin_color);
          setEyeColor("Eye color: " + res.eye_color);
          setBirthYear("Birth year: " + res.birth_year);
          setGender("Gender: " + res.gender);
          getHomeWorld(res.homeworld).then((res) => {
            setHomeWorld("Homeworld: " + res.name);
          });
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <main className="main">
      <Form
        handleCategoryChange={handleCategoryChange}
        handleSelectionChange={handleSelectionChange}
        handleFormSubmit={handleFormSubmit}
        maxValue={maxValue}
      />
      {category === "films" && (
        <Films
          title={title}
          episodeId={episodeId}
          openingCrawl={openingCrawl}
        />
      )}
      {category === "people" && (
        <People
          name={name}
          height={height}
          mass={mass}
          hairColor={hairColor}
          skinColor={skinColor}
          eyeColor={eyeColor}
          birthYear={birthYear}
          gender={gender}
          homeWorld={homeWorld}
        />
      )}
    </main>
  );
};

export default Main;
