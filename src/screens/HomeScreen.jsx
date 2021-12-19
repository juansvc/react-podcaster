import React, { useEffect, useState } from 'react'
import axios from 'axios'

import { HOMESCREEN_API_URL } from '../utils/consts'

import HomePodcastSection from '../components/HomePodcastSection'
import Loader from '../containers/Loader'

function HomeScreen(props) {

  const [podcasts, setPodcasts] = useState()

  useEffect(() => {
    const fetchAPI = async () => {
      getPodcasts()
        .then(data => {
          setPodcasts(data)
        })
        .catch(err => console.log(err))
    };
    // 24 hours after first fetch
    setInterval(fetchAPI(), 86400000);
  }, []);

  let popularPodcasts

  if (podcasts) {
    popularPodcasts = podcasts.slice(0, 100)
  }

  const { history } = props

  return (
    <>
      {
        podcasts ?
          <>
            <section className='container px-5 mx-auto'>
              <HomePodcastSection header={'Popular podcasts'} podcasts={popularPodcasts} history={history} />
            </section>
          </>
          :
          <>
            <Loader />
          </>
      }
    </>
  )
}

export default HomeScreen

const getPodcasts = async () => {
  const response = await axios.get(HOMESCREEN_API_URL)
  return response.data.results
}