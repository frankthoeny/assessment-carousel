import React from 'react'
import PropTypes from 'prop-types'
const Card = ({slide}) => {
  const {index, image, title, content, button} = slide
  return(
       <div id={`card-${index}`} className="card">
          <img className="card-img-top" src={image} alt={title} />
          <div className="card-body">
             <h5 className="card-title">{title}</h5>
             <p className="card-text">{content}</p>
          </div>
          <a href="#" className="btn btn-primary">{button}</a>
      </div>
   )
}
export default Card
