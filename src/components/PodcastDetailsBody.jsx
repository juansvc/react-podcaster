import React, { useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'

import PodcastDetailsEpisodes from './PodcastDetailsEpisodes'
import Loader from '../containers/Loader'


const PodcastDetailsBody = ({ episodes, handlePause, handlePlay }) => {

  const [count, setCount] = useState({ prev: 1, next: 10 })
  const [hasMore, setHasMore] = useState(true);
  const [current, setCurrent] = useState(episodes.slice(count.prev, count.next))

  const getMoreData = () => {
    if (current.length  + 10 >= episodes.length) {
      setHasMore(false);
      return;
    }
    setTimeout(() => {
      setCurrent(current.concat(episodes.slice(count.prev + 10, count.next + 10)))
    }, 1000)
    setCount((prevState) => ({ prev: prevState.prev + 10, next: prevState.next + 10 }))
  }

  return (
    <div className='flex max-w-full md:px-8 px-0 text-left text-gray-300'>
      <div className='md:w-10/12 w-full'>
        <InfiniteScroll
          dataLength={current.length}
          next={getMoreData}
          hasMore={hasMore}
          loader={<Loader />}
        >
          <PodcastDetailsEpisodes episodes={current} handlePause={handlePause} handlePlay={handlePlay} />
        </InfiniteScroll>
      </div>
    </div>
  )
}

export default PodcastDetailsBody