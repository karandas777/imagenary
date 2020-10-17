import React, { Component } from "react";

export default class ImgCard extends Component {
  render() {
    const {urls, alt_description, links,user } = this.props.img;

    return (
      <div className="content-item bg-light p-1 rounded">
        <img src={urls.small} alt={alt_description} className="w-100 rounded" />
        <div className="d-flex w-100 px-0 pt-1 justify-content-between">
            <span className="p-0 m-1 small text-muted">
                <img src={user.profile_image.small} className="rounded-pill shadow-sm mr-2" height="20" width="20" alt="user" />
                {user.name}
            </span>
          <a
            className="text-decoration-none m-1"
            href={`${links.download}?force=true`}
          >
            <i className="fa fa-arrow-down text-muted"></i>
          </a>
        </div>
      </div>
    );
  }
}
