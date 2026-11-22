

const APIKEY = import.meta.env.VITE_OMDB_API_KEY;

export const APIURL =
  `https://www.omdbapi.com/?apikey=${APIKEY}&s=avengers`;

export const SEARCHAPI =
  `https://www.omdbapi.com/?apikey=${APIKEY}&s=`;

export const DETAILSAPI =
  `https://www.omdbapi.com/?apikey=${APIKEY}&i=`;