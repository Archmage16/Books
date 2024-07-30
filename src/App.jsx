import './App.css'
import { Route, Routes } from 'react-router'
import Navibar from './com/navbar'
import SearchBook from './com/SearchBook'
const App = () => {
  return (
    <>
      <Navibar/>
      <SearchBook/>
    </>
  )
}

export default App
