import React, { Component } from "react";

export default class ImgCard extends Component {
  render() {
    const { id,urls, alt_description, links, user } = this.props.img;

    return (
      <div className="content-item bg-light p-1 rounded">
        <img src={urls.small} alt={alt_description} className="w-100 rounded" />
        <div className="px-0 pt-1">
          <div className="p-0 m-1 on-mobile ">
            <img
              src={user.profile_image.small}
              className="rounded-pill shadow-sm mr-2 mb-1"
              height="30"
              width="30"
              alt="user"
            />
            <span className="text-muted">{user.name}</span>
          </div>
          <div className="d-flex justify-content-between p-0 m-1">
            <span className="code-font text-muted mb-0">
              {id}
            </span>
            <a
              className="text-decoration-none"
              href={`${links.download}?force=true`}
            ><span className="badge badge-secondary shadow-sm h5 mb-0 rounded">
                  <i className="fa fa-arrow-down"></i>
            </span>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
