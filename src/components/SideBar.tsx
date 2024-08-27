import Link from 'next/link';
import React from 'react';
import '../app/globals.css'

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-content">
        <div className="logo">
          <h2>CLINTON LUI</h2>
        </div>
        <nav>
          <ul>
            <li className="mt-8">
              <Link href="/">HOME</Link>
            </li>
            <li className="sidebar-section">
              <Link href="/about">ABOUT</Link> 
            </li> 
            <li className="sidebar-section">
              <Link href="/projects">PROJECTS</Link> 
            </li> 
            <li className="sidebar-section">
              <Link href="/blogs">BLOGS</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Sidebar;
