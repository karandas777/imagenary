import Axios from "axios";
import React, { Component } from "react";
import { apiurl, key } from "../../api";
import ImgCard from "../elements/ImgCard";
import JumboTron from "../elements/JumboTron";
import Loading from "../elements/Loading";

export default class Landing extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imgList: [],
      page: 1,
    };
  }

  componentDidMount() {
    this.funGetImages();
  }

  funGetImages = () => {
    const method = "/photos";

    Axios.get(`${apiurl}${method}${key}`, {
      params: {
        page: this.state.page,
        per_page: 21,
        h: "300",
        order_by: "recent",
      },
    })
      .then((res) => {
        console.log(res);
        this.setState({ imgList: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  funChangePage = (value) => {
    window.scrollTo(0, 0);
    const newPage = this.state.page + value;
    if (newPage === 0) {
      return false;
    } else {
      this.setState({ page: newPage }, () => {
        this.funGetImages();
      });
    }
  };

  render() {
    return (
      <div className="min-height">
        {
          this.state.imgList.length > 0 ? (
            <JumboTron bgImg={this.state.imgList[0].urls.regular} />
          ) : null
        }

        <div className="my-3">
          {this.state.imgList.length === 0 ? <Loading /> : null}
        </div>

        <div className="content-holder my-3 pt-5 custom-p">
          {this.state.imgList &&
            this.state.imgList.map((img) => <ImgCard key={img.id} img={img} />)}
        </div>

        <div className="py-4 d-flex justify-content-around">
          <button
            className="btn btn-link text-danger text-decoration-none"
            onClick={() => {
              this.funChangePage(-1);
            }}
          >
            <i className="fa fa-backward text-light"></i> Prev
          </button>
          <button
            className="btn btn-link text-danger text-decoration-none"
            onClick={() => {
              this.funChangePage(1);
            }}
          >
            Next <i className="fa fa-forward text-light"></i>
          </button>
        </div>
      </div>
    );
  }
}
