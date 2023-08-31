const baseUrl = "https://swapi.dev/api/";

export const getStarWarsInfo = (category, selection) => {
  return fetch(`${baseUrl}/${category}/${selection}`).then(
    handleServerResponse
  );
};

export const getStarWarsfilms = () => {
  return fetch(`${baseUrl}/films`).then(handleServerResponse);
};

export const getHomeWorld = (url) => {
  return fetch(url).then(handleServerResponse);
};

export const getFilms = (url) => {
  return fetch(url).then(handleServerResponse);
};

const handleServerResponse = (res) => {
  if (res.ok) {
    return res.json();
  } else {
    Promise.reject(`Error: ${res.status}`);
  }
};
