export const fetchTopRatedMovies = async () => {
  const url =
    'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1';
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

  // fetch(url, options)
  // .then((res) => res.json())
  //.then((json) => console.log(json))
  //.catch((err) => console.error('error:' + err));
};
