import React from 'react'
import "./navbar.css";

const Navbar = ({handleGeneratedUser}) => {
  return (
    <section className='navbar_container'>
      <div className="logo">Random User Generator</div>
      <div className="cta_btn">
        <button onClick={(e) => handleGeneratedUser(e)}>Generate User</button>
      </div>
    </section>
  )
}

export default Navbar

