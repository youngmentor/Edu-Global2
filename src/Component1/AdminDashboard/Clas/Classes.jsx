import React from 'react'
import { Route, Routes } from 'react-router-dom'
import NewClass from './NewClass'
import AllClass from './AllClass'

const Classes = () => {
  return (
    <div>
        <Routes>
          <Route path='/newclass' element={<NewClass/>}/>
          <Route path='/allclass' element={<AllClass/>}/>
        </Routes>
    </div>
  )
}

export default Classes