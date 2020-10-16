import Axios from "axios";
import React, { Component } from "react";
import { apiurl, key } from "../../api";
import ImgCard from "../elements/ImgCard";

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

  componentDidUpdate() {
    this.funGetImages();
  }

  funGetImages = () => {
    const method = "/photos";

    Axios.get(`${apiurl}${method}${key}`, {
      params: {
        page: this.state.page,
        per_page: 25,
        order_by: "popular",
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
    if (newPage === 0){
        return false
    }
    else{
        this.setState({ page: newPage });
    }
  };

  render() {
    return (
      <div className="min-height">

        <div className="mt-5 mb-4 text-center h1 sty-font text-light">
          <span className="text-danger">image</span>nary
          <span className="text-danger">.</span>
        </div>

        <div className="py-3">
                <input type="text" className="form-control text-center w-50 mx-auto rounded-pill" 
                placeholder="The internet’s source of freely-usable images."/>
        </div>

        <div className="content-holder py-3">
          {this.state.imgList &&
            this.state.imgList.map((img) => <ImgCard key={img.id} img={img} />)}
        </div>

        <div className="py-4 text-center">
          <button
            className="btn btn-link text-danger text-decoration-none"
            onClick={()=>{this.funChangePage(-1)}}
          >
            Prev
          </button>
          <button
            className="btn btn-link text-danger text-decoration-none"
            onClick={()=>{this.funChangePage(1)}}
          >
            Next
          </button>
        </div>

      </div>
    );
  }
}
