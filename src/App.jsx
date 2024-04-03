import React from 'react'
import { createBrowserRouter  , createRoutesFromElements , Route , RouterProvider } from 'react-router-dom'

import HomePage from "./Pages/HomePage"
import SingleMovieDetail from "./Pages/SingleMovieDetail"
import Error from "./Pages/Error"
import Root from "./Pages/Root"
import { loader as MovieLoader } from './Pages/HomePage'
import { loader as SingleMovieloader } from './Pages/SingleMovieDetail'

const router=createBrowserRouter(createRoutesFromElements(<Route path='/' element={<Root/>} errorElement={<Error/>}>
  <Route index element={<HomePage/>} loader={MovieLoader}/>
  <Route path='/detail/:imdbId' element={<SingleMovieDetail/>} loader={SingleMovieloader}/>
  <Route />

</Route>))


function App() {
  

  
  return (
    <RouterProvider router={router}/>
  )
}

export default App