import React, { Component } from "react";
import Logo from "../elements/Logo";
import { apiurl, key } from "../../api";
import Axios from "axios";
import ImgCard from "../elements/ImgCard";
import Loading from "../elements/Loading";

export default class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imgList: [],
      query: "",
      page: 1,
      loading: false,
    };
  }

  funSearchImages = () => {
    this.setState({ loading: true });

    const method = "/search/photos";

    Axios.get(`${apiurl}${method}${key}`, {
      params: {
        query: this.state.query,
        page: this.state.page,
        per_page: 21,
        order_by: "recent",
      },
    })
      .then((res) => {
        console.log(res);
        this.setState({ imgList: res.data.results, loading: false });
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
        this.funSearchImages();
      });
    }
  };

  render() {
    return (
      <div className="min-height">
        <Logo firstText="the" lastText="finder" info="Search from millions of images." />

        <div className="py-3 text-center col-md-5 mx-auto">
          <input
            type="text"
            className="form-control rounded-pill border-0 bg-dark text-light"
            onChange={(e) => {
              this.setState({ query: e.target.value });
            }}
            placeholder="Search"
          />
          <br />
          <button
            className="btn btn-danger btn-sm shadow-sm rounded-pill"
            onClick={this.funSearchImages}
          >
            <i className="fa fa-search fa-2x"></i>
          </button>
        </div>

        <div className="my-3">{this.state.loading ? <Loading /> : null}</div>

        <div className="content-holder my-3 custom-p">
          {this.state.imgList &&
            this.state.imgList.map((img) => <ImgCard key={img.id} img={img} />)}
        </div>

        {
        this.state.imgList.length > 0 ? (
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
        ) : null
        }

      </div>
    );
  }
}
