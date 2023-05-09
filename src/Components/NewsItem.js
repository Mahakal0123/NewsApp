import React from 'react'
import { Link } from 'react-router-dom';

const NewsItem = (props)=>{
    let {title,description,imageurl,newsurl,author,date,source} = props;
    return (
      <div>
        <div className="card">
          <div style={{
            display:'flex',
            justifyContent:'flex-end',
            position:'absolute',
            right:'0',
          }}>
          <span className="badge rounded-pill bg-danger" style={{left:'90%'}}>{source}</span>
          </div>
          <img src={!imageurl?"https://www.hindustantimes.com/ht-img/img/2023/03/21/1600x900/Breaking-News-Live-Blog-pic_1627344775185_1677800210069_1679442306577_1679442306577.jpg":imageurl} className="card-img-top" alt="..."/>
          <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}</p>
              <p className="card-text"><small class="text-body-secondary">By {author==null?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
              <Link to={newsurl} target="_blank" className="btn btn-sm btn-dark">Read More</Link>
          </div>
        </div>
      </div>
    )
  }
export default NewsItem
