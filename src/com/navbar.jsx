import React from 'react'
import { Link } from "react-router-dom";
import '../App.css'
const Navibar = () => {
  return (
    <div className='Nav'>
        <div><h1><Link to="/">Books App </Link></h1></div>
        <div><Link to="/fav">Favorites</Link></div>
    </div>
  )
}

export default Navibar