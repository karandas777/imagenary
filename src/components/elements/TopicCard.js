import React, { Component } from "react";

export default class TopicCard extends Component {
  render() {
    const { title, description, cover_photo } = this.props.topic;

    return (
      <div className="content-item p-1 rounded bg-light">
        <img
          src={cover_photo.urls.regular}
          className="w-100 rounded"
          alt={title}
        />
        <div className="p-1">
          <div className="h5 mt-2">{title}</div>
          <div className="very-small text-muted">{description}</div>
          <div className="text-center mt-2">
            <a
              className="text-decoration-none"
              href="#"
            ><span className="badge badge-danger shadow-sm h5 mb-0 rounded">
                  <i className="fa fa-arrow-right"></i>
            </span>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
