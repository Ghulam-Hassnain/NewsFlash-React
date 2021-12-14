import React from 'react'
import Img from "./newsImg.jpg";

const NewsItem = (props) => {

    let { title, description, imageUrl, newsUrl, author, dataAndTime, source } = props;
    return (
        <div className="card my-3" >
            <div style={{ display: "flex", position: "absolute", right: 0 }}>
                <span className="badge rounded-pill bg-danger">{source}</span>
            </div>
            <a href={newsUrl} target="_blank" rel="noreferrer"> <img height="185rem" src={imageUrl ? imageUrl : Img} className="card-img-top" alt="..." /></a>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <p className="card-text"><small className="text-muted">By {author ? author : "Unknown"} on {new Date(dataAndTime).toUTCString()}</small></p>
                <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-primary btn-sm">Read More</a>
            </div>
        </div>
    )
}

export default NewsItem;
