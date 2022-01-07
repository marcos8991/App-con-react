import React from 'react';

export const Gif = ({image, title}) => {
  return (   

    <div className="col-lg-3 col-md-6 mb-4">
      <div className="card h-100">
        <img className="card-img-top" src={image} alt=""/>
        <div className="card-body">
          <h4 className="card-title">{title}</h4>
        </div>
      </div>
    </div>

  );
}