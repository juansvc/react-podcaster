const CORS_URL = 'https://cors-anywhere.herokuapp.com/' // Enables cross-origin requests to anywhere
const APPLE_API_URL = 'https://itunes.apple.com/'

export const BASE_URL = String(APPLE_API_URL)

// export const HOMESCREEN_API_URL = String(`${BASE_URL}us/rss/toppodcasts/limit=100/genre=1310/json`)
export const HOMESCREEN_API_URL = String(`${BASE_URL}search?term=podcasts&genreId=1310&limit=100`)
