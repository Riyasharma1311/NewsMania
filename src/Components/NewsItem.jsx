import React from 'react'
import image from '../assets/OIP.jpeg'


const NewsItem = ({title,description,src,url}) => {
  return (
    <div className="card bg-dark text-light mb-3 d-inline-block mx-3 my-3 px-2 py-2 border-start-0 border-secondary-subtle" style={{maxWidth:"320px"}}>
    <img src={src?src:image} style={{height:"200px",width:"305px"}} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">{title.slice(0,40)}</h5>
      <p className="card-text">{description?description.slice(0,90):"News Heading"}</p>
      <p class="d-inline-flex gap-2">
      <a href={url} className="btn btn-info">Read More</a>
     <a href='/' class="btn btn-light" role="button" data-bs-toggle="button">❤️</a>
     </p>
    </div>
  </div>
  )
}

export default NewsItem
