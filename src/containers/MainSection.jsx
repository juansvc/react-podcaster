import React from 'react'
import {
  Switch,
  Route
} from 'react-router-dom'

import HomeScreen from '../screens/HomeScreen'
import SearchScreen from '../screens/SearchScreen'
import PodcastDetailsScreen from '../screens/PodcastDetailsScreen'

const MainSection = ({ handlePause, handlePlay }) => {
  return (
    <>
      <main className='player-section pl-0 min-h-screen min-w-full'>
        <Switch>
          <Route exact path='/' component={HomeScreen}></Route>
          <Route exact path='/Search' component={SearchScreen}></Route>
          <Route exact path='/podcast/:collectionId' render={(props) => (<PodcastDetailsScreen {...props} handlePause={handlePause} handlePlay={handlePlay} />)} />
        </Switch>
      </main>
    </>
  )
}

export default MainSection