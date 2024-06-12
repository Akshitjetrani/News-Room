import React from 'react'

const NewsItem = (props)=> {
    


 
    let {titel, description, imageurl, newsUrl, author, date, source } = props 
    // Whan i use funcation base Components in those case this. is removed

    // let image = require('./img/maharaj.jpg'); 
    return (
      <div>
        <div className="card my-2 with ">
            
            <img className="card-img-top  my-3 mx-0 imge"  alt='loading' src={!imageurl?"https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/UXHXNSIVTVEADPR6EA4EPLQJ6M.jpg&w=1440":imageurl} />
            <div className="card-body">
                <h5 className="card-title container my-0">{titel} <span className='position-absolute top-0 right-0 start-90 tramslate-middle badge rounded-pill bg-success'>{source}</span>  </h5>
                <p className="card-text container">{description}</p>
                <p className='card-text'><small className='text-muted'>By <b>{!author?"Unknown": author}</b> on <b>{new Date(date).toGMTString()}</b></small> </p>
                <a href={newsUrl} target='_blank' rel="noreferrer" className="btn btn-sm btn-primary container">Read More</a>
            </div>
        </div>
      </div>
    )   
  
}
 export default NewsItem
