import Axios from "axios";
import React, { Component } from "react";
import { apiurl, key } from "../../api";
import Header from "../elements/Header";
import ImgCard from "../elements/ImgCard";
import Loading from "../elements/Loading";
import Logo from "../elements/Logo";

export default class Landing extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imgList: [],
      page: 1,
      loading: false,
    };
  }

  componentDidMount() {
    this.funGetImages();
  }

  funGetImages = () => {

    this.setState({ loading: true });

    const method = "/photos";

    Axios.get(`${apiurl}${method}${key}`, {
      params: {
        page: this.state.page,
        per_page: 20,
        order_by: "recent",
      },
    })
      .then((res) => {
        console.log(res);
        this.setState({ imgList: res.data, loading:false });
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
        <Header/>
        <Logo firstText="the" lastText="wall" info="Latest uploads from our users" />

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
            <span className="bg-light px-2 py-1 rounded shadow-sm sty-font text-danger">{this.state.page}</span>
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
