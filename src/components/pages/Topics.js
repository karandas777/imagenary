import React, { Component } from "react";
import Header from "../elements/Header";
import Logo from "../elements/Logo";
import { apiurl, key } from "../../api";
import Axios from "axios";
import TopicCard from "../elements/TopicCard";
import Loading from "../elements/Loading";

export default class Topics extends Component {
  constructor(props) {
    super(props);

    this.state = {
      topicList: [],
      loading: false,
    };
  }

  componentDidMount() {
    this.funGetTopics();
  }

  funGetTopics = () => {
      this.setState({loading:true});
    const method = "/topics";

    Axios.get(`${apiurl}${method}${key}`, {
      params: {
        per_page: 1000,
        order_by: "featured",
      },
    })
      .then((res) => {
        console.log(res);
        this.setState({ topicList: res.data , loading:false });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="min-height">
        <Header />
        <Logo
          firstText="the"
          lastText="topics"
          info="Find images based on the topics you like"
        />

        <div className="my-3">{this.state.loading ? <Loading /> : null}</div>

        <div className="content-holder my-3 custom-p">
          {this.state.topicList &&
            this.state.topicList.map((topic) => (
              <TopicCard key={topic.id} topic={topic} />
            ))}
        </div>
        
      </div>
    );
  }
}
