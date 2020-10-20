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
          <div className="h5 mt-1">{title}</div>
          <div className="small text-muted">{description}</div>
        </div>
      </div>
    );
  }
}
