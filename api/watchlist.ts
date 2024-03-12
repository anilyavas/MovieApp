export const fetchWatchlistMovies = async () => {
  const url =
    'https://api.themoviedb.org/3/account/21095892/watchlist/movies?language=en-US&page=1&sort_by=created_at.desc';
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMmE4NGY1ZjIxYmYxMmMzYTAxNGE2NGQyNjc0NmUzMCIsInN1YiI6IjY1ZjA0MzYxMGUyOWEyMDE3YjM4NmRlNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WKZX7KUUKTtyf7_hK_cyK6xtQEuZoQp_rziDszX0Tj4',
    },
  };
  const res = await fetch(url, options);

  if (!res.ok) {
    throw new Error('Failed to fetch movies');
  }

  const json = await res.json();
  return json.results;
};
export const addMovieToWatchlist = async (movieId: number) => {
  const url = 'https://api.themoviedb.org/3/account/21095892/watchlist';
  const options = {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMmE4NGY1ZjIxYmYxMmMzYTAxNGE2NGQyNjc0NmUzMCIsInN1YiI6IjY1ZjA0MzYxMGUyOWEyMDE3YjM4NmRlNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WKZX7KUUKTtyf7_hK_cyK6xtQEuZoQp_rziDszX0Tj4',
    },
    body: JSON.stringify({
      media_type: 'movie',
      media_id: movieId,
      watchlist: true,
    }),
  };
  const res = await fetch(url, options);

  if (!res.ok) {
    throw new Error('Failed to fetch movies');
  }

  const json = await res.json();
  return json;
};
