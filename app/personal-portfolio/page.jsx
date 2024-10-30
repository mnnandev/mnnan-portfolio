'use client'
import About from '@/components/About'
import Aside from '@/components/Aside'
import Portfolio from '@/components/Portfolio'
import Resume from '@/components/Resume'
import React, { useState } from 'react'

const PersonalPortfolio = () => {
  const [activeRoute,setActiveRoute] = useState('about')
  return (
    <>
       <main>
      <Aside />
      <div className="main-content mt-[100px]">
      <nav className="navbar">
        <ul className="navbar-list">
          <li className="navbar-item" onClick={()=> setActiveRoute('about')}>
            <button className={`navbar-link ${activeRoute === 'about' ? 'active':''}`} >About</button>
          </li>

          <li className="navbar-item" onClick={()=> setActiveRoute('resume')}>
            <button className={`navbar-link ${activeRoute === 'resume' ? 'active':''}`} > Resume</button>
          </li>

          <li className="navbar-item" onClick={()=> setActiveRoute('portfolio')}>
            <button className={`navbar-link ${activeRoute === 'portfolio' ? 'active':''}`} > Portfolio</button>
          </li>

          <li className="navbar-item" onClick={()=> setActiveRoute('blog')}>
            <button className={`navbar-link ${activeRoute === 'blog' ? 'active':''}`} > Blog</button>
          </li>

          <li className="navbar-item" onClick={()=> setActiveRoute('contact')}>
            <button className={`navbar-link ${activeRoute === 'contact' ? 'active':''}`} > Contact</button>
          </li>
        </ul>
      </nav>
       {activeRoute === 'about' ? <About/>:''} 
       {activeRoute === 'resume' ? <Resume/>:''} 
         <Portfolio/>
      </div>
    </main>
    </>
  )
}

export default PersonalPortfolio
