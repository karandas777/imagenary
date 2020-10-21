import React, { Component } from "react";

export default class TopicCard extends Component {
  render() {
    const {title, description, cover_photo,id } = this.props.topic;

    return (
      <div className="content-item p-1 rounded bg-custom-1 shadow-sm">
        <img
          src={cover_photo.urls.regular}
          className="w-100 rounded"
          alt={title}
        />
        <div className="p-1 text-custom-3">
          <div className="h5 mt-2">{title}</div>
          <div className="very-small">{description}</div>
          <div className="text-center mt-2">
            <button
              className="btn btn-link text-decoration-none"
              onClick={()=>{this.props.getImages(id,title)}}
            ><span className="badge bg-custom-2 text-custom-3 shadow-sm h5 mb-0 rounded">
                  <i className="fa fa-arrow-right"></i>
            </span>
            </button>
          </div>
        </div>
      </div>
    );
  }
}
