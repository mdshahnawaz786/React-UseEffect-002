import React from 'react'
import './header.css'


const Header = ({heading}) => {
  return (
    <>
      <div className="headerContainer">
        <h1>{heading}</h1>
      </div>
    </>
  )
}

export default Header
