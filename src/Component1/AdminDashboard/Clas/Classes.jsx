import React from 'react'
import { Route, Routes } from 'react-router-dom'
import NewClass from './NewClass'
import AddClass from './AddClass'

const Classes = () => {
  return (
    <div>
        <Routes>
          <Route path='/newclass' element={<NewClass/>}/>
          <Route path='/addclass' element={<AddClass/>}/>
        </Routes>
    </div>
  )
}

export default Classes