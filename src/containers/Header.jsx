import React from 'react'
import { Link, NavLink } from 'react-router-dom'

import search_icon from '../icons/search_icon_white.svg'

const Header = () => {
  return (
    <div className='block w-full text-white bg-gray-900'>
      <div className='flex justify-between'>
        <div className='flex flex-row py-4'>
          <Link
            className='text-2xl text-white lg:text-3xl hover:text-gray-100'
            to='/'>
            Podcaster
              </Link>
        </div>
        <div className='flex flex-row text-left pt-3'>
          <div>
            <NavLink className='flex mx-2 my-1 rounded p-2 px-4 hover:bg-gray-800' 
											activeClassName='bg-gray-800' exact to='/search'>
              <img src={search_icon} alt='search_icon' />
            </NavLink>
          </div>
        </div>
        <div className='mt-3 flex flex-col'>
          <a href='https://github.com/juansvc' 
							className='mx-2 text-sm text-gray-600 hover:text-gray-500' 
							aria-label='GitHub'
              target='_blank'>
            Github
          </a>

          <a href='https://juansvc.netlify.app' 
							className='mx-2 text-sm text-gray-600 hover:text-gray-500'
	            aria-label='Portfolio'
              target='_blank'>
            Portfolio
          </a>
        </div>
      </div>
    </div>
  )
}

export default Header