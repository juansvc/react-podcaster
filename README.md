# Podcaster

@juan-vivanco

## Overview

A React Frontend task for Inditex/ZARA.com of a web application to listen podcasts from Apple.

## Technologies Used

- [React JS / React Hooks](https://reactjs.org/)
- [Axios](https://github.com/axios/axios) API calls
- [Tailwind CSS](https://material-ui.com/) CSS Framework
- [Debounce](https://usehooks.com/useDebounce/) prevent API calls from being fired on every keystroke
- [Apple API](https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json) for podcasts data/media
- [CORS Heroku](https://cors-anywhere.herokuapp.com/) access without CORS
- [React Redux](https://react-redux.js.org/) formatting the project's code

## Process

I started off using `create-react-app` to build out the framework, then implementing layout, navigation and components. I decided to use a header, content and player(footer), since it was easier and more intuitive for users the details for episodes. For the reason that there is already a podacast details page and not send to another screen and returning every so often just to see the details of each episode and see the same sidebar. DRY, for UX reasons, for this reason other more I have put it in the list of episodes with a button to read more, as well as the episode counter was included in the container of the description of the podcast. As for design as it was free to choose without requirements and I really like dark mode in web apps I have done so, as points that remain to be done could be done light mode and more types of searches such as genres, playlists, etc.

## Installation

- `git clone` this repo and `cd` into the `podcaster` folder
- `yarn install` to install dependencies
- `yarn start` to run frontend app
