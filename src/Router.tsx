import { Routes, Route } from 'react-router-dom'
import { Hero } from './components/Hero'
import { DefaultLayout } from './layouts/DefaultLayout'

export function Router(){
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />} >
        <Route path="/" element={<Hero />} />
        <Route path="/checkout" element={<div />}/> 
      </Route>
    </Routes>
  )
}