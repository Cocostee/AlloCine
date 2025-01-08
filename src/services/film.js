export const fetchFilms = async (page = 1) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=1f2fa84521284737ebd658d654946b7a&page=${page}&language=fr`
  );
  const data = await response.json();
  return data.results;
};

export const fetchFilmById = async (id) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=1f2fa84521284737ebd658d654946b7a&language=fr`
  );
  const data = await response.json();
  if (data.length === 0) {
    return data;
  }
  return data;
};

export const fetchActorsByFilmId = async (id) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=1f2fa84521284737ebd658d654946b7a&language=fr`
  );
  const data = await response.json();
  return data.cast.slice(0, 10);
};

export const fetchSimilarFilms = async (id) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/similar?api_key=1f2fa
84521284737ebd658d654946b7a&language=fr`
  );
  const data = await response.json();
  return data.results;
};
