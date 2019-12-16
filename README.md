The official Movie Search Engine (2H Max after setup Home task)

- To run the project first you need to npm install in the folder location
- Create a .env file in root directory with the following values:
  - REACT_APP_MOVIE_API=https://api.themoviedb.org/3/
  - REACT_APP_MOVIE_API_KEY=1e69d118335e3a39578d8029d6583993
  - REACT_APP_MOVIE_API_POSTER_URL=https://image.tmdb.org/t/p/w300_and_h450_bestv2
- Then run npm start

Tech choices

- axios is the best and lightest library I know out there to make the API calls. Easy to use and reliable. Wrapping the results in a promise object makes it easy to work with.

- Redux is a great choice to keep application state and I have already adquired experience on how to use it

- Redux Thunk is here to handle function as actions dispatches in middleware, so it would check the type that returns each action and handle the ones that are functions

- No need here to get react router since the app is pretty simple and does not need a lot of navigation

Things to improve

    Having only 2 hours to develop it left me with a list of 'ToDos' pending:

- Wanted to animate the sidebar to hide and show with an arrow button above but I need to change some styles to make it absolute position and ended up without having time

- Didn't find a way to search for videos since the flag in the API was always false

- Should have added a movie details component where I could show some more details for each movie when selected
