import React from 'react'
import Featured from '../../component/featured/Featured'
import Header from '../../component/header/Header'
import Navbar from '../../component/Navbar/Navbar'
import "./home.css"

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Featured/>
      </div>
    </div>
  )
}

export default Home