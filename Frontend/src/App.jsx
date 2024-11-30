import React from 'react'
import "./App.css"
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom"
import Layout from './Layout'
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'
import Project from './components/Project'
import ContactMe from './components/ContactMe'
import Components from './components/Components'



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='/' element={<Components />}/>
      <Route path='/aboutme' element={<AboutMe/>}/>
      <Route path='/skills' element={<Skills/>}/>
      <Route path='/project' element={<Project/>}/>
      <Route path='/contactme' element={<ContactMe/>}/>
    </Route>
  )
)


function App() {
  return (
    <RouterProvider router={router}/>
  )
}

export default App