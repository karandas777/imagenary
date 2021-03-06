import Axios from "axios";
import React, { Component } from "react";
import { apiurl, key } from "../../api";
import Header from "../elements/Header";
import ImgCard from "../elements/ImgCard";
import Loading from "../elements/Loading";
import Logo from "../elements/Logo";

export default class TopicDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imgList: [],
      page: 1,
      loading: false,
    };
  }

  componentDidMount() {
    window.scrollTo(0,0);
    this.funGetImages();
  }

  funGetImages = () => {

    this.setState({ loading: true });

    const method = `/topics/${this.props.match.params.id}/photos`;

    Axios.get(`${apiurl}${method}${key}`, {
      params: {
        page: this.state.page,
        per_page: 20,
        order_by: "latest",
      },
    })
      .then((res) => {
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
        <Logo firstText="topic" lastText={this.props.match.params.name} info="Latest uploads from our users" />

        <div className="my-3">{this.state.loading ? <Loading /> : null}</div>

        <div className="content-holder my-3 custom-p">
          {this.state.imgList &&
            this.state.imgList.map((img) => <ImgCard key={img.id} img={img} />)}
        </div>

        {
        this.state.imgList.length > 0 ? (
          <div className="py-4 d-flex justify-content-around">
            <button
              className="btn btn-link text-custom-3 text-decoration-none"
              onClick={() => {
                this.funChangePage(-1);
              }}
            >
              <i className="fa fa-backward"></i> Prev
            </button>
            <span className="bg-custom-3 text-custom-2 px-2 py-1 rounded shadow-sm sty-font">{this.state.page}</span>
            <button
              className="btn btn-link text-custom-3 text-decoration-none"
              onClick={() => {
                this.funChangePage(1);
              }}
            >
              Next <i className="fa fa-forward"></i>
            </button>
          </div>
        ) : null
        }
      </div>
    );
  }
}
