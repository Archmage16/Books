import './App.css'
import { Route, Routes } from 'react-router'
import Navibar from './com/navbar'
import Red from './com/Red'
import Fav from './com/fav'
// import About from './com/About'

const App = () => {
  return (
    <>
    <Navibar/>
    <Routes>
      <Route path='/' element={<Red/>}/>
      <Route path='/fav' element={<Fav/>}></Route>
    </Routes>
    </>
  )
}

export default App
