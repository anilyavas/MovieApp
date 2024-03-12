const headers = {
  accept: 'application/json',
  Authorization:
    'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMmE4NGY1ZjIxYmYxMmMzYTAxNGE2NGQyNjc0NmUzMCIsInN1YiI6IjY1ZjA0MzYxMGUyOWEyMDE3YjM4NmRlNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WKZX7KUUKTtyf7_hK_cyK6xtQEuZoQp_rziDszX0Tj4',
};

export const fetchTopRatedMovies = async (page: number) => {
  const url = `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=${page}`;
  const options = {
    method: 'GET',
    headers,
  };

  const res = await fetch(url, options);
  if (!res.ok) {
    throw new Error('Failed to fetch movies');
  }
  const json = await res.json();
  return json.results;

  // fetch(url, options)
  // .then((res) => res.json())
  //.then((json) => console.log(json))
  //.catch((err) => console.error('error:' + err));
};

export const fetchMovie = async (id: number) => {
  const url = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;
  const options = {
    method: 'GET',
    headers,
  };
  const res = await fetch(url, options);
  if (!res.ok) {
    throw new Error('Failed to fetch movies');
  }
  const json = await res.json();
  return json;
};
