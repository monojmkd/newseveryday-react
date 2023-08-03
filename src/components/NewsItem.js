import React from "react";

const NewsItem =(props) =>  {
    let style = props.mode === "light" ? {backgroundColor:"white"} : {color:"white" ,backgroundColor:"black" }; // coondition css for footer
    let { title, description, imgUrl, newsUrl, author, date, source } =
      props;
    let defUrlImg =
      "https://static1.anpoimages.com/wordpress/wp-content/uploads/2023/04/google-io-2023.jpeg";
    return (
      <div className="my-3  ">
        <div className={`card text-bg-${props.mode}`}>
        <div style={ {display:'flex', justifyContent:'flex-end',position:'absolute',right:0}}>
        <span
        className="badge rounded-pill bg-danger"
      >
        {source}
      </span>
        </div>
         
          <img
            src={imgUrl ? imgUrl : defUrlImg}
            className="card-img-top"
            alt=""
          />
          <div className="card-body">
            <h5 className="card-title"><a className="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
            href={newsUrl}
            target="_blank"
            rel="noreferrer">{title}... </a></h5>
            <p className="card-text">{description}...</p>
            <a
              href={newsUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-sm btn btn-dark"
            >
              Read More
            </a>
          </div>
          <div className="card-footer " style = {style}>
            <small className="text-secondary"> {/* text-body-secondary */}
              By {author ? author : "Unknown"} on {new Date(date).toGMTString()}
            </small>
          </div>
        </div>
      </div>
    );
  }


export default NewsItem;
