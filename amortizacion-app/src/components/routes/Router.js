import React from 'react'
import {  Routes, Route } from 'react-router-dom'
import { NotFound } from '../../pages/404'
import { About } from '../../pages/About'
import { Home } from '../../pages/Home'
import { Footer } from '../layout/Footer'
import { Nav } from '../layout/Nav'

export const Router = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}
