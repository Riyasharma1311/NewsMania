import React, { useState } from 'react'
import SearchBar from './SearchBar'

const Navbar = ({setCategory}) => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
    <div className="container-fluid">
      <a className="navbar-brand" href="#"><span className="badge bg-light text-dark fs-4">NewsMania</span></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" onClick={()=>setCategory("technology")}>Technology</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" onClick={()=>setCategory("Buisness")}>Buisness</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" onClick={()=>setCategory("health")}>Health</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" onClick={()=>setCategory("Science")}>Science</a>
          </li>
          <li className="nav-item">
            <a className="nav-link"onClick={()=>setCategory("Sports")}>Sports</a>
          </li>
          <li className="nav-item">
            <a className="nav-link"onClick={()=>setCategory("Entertainment")}>Entertainment</a>
          </li>
          <li className="nav-item">
            <a className="nav-link">Favourites</a>
          </li>
        </ul>
        {/* <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form> */}
        <SearchBar/>
      </div>
    </div>
  </nav>
  )
}

export default Navbar
