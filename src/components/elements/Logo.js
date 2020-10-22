import React, { Component } from "react";
import { Spring} from "react-spring/renderprops";

export default class Logo extends Component {
  render() {
    const {firstText, lastText ,info} = this.props;
    return (
      <Spring from={{transform: "translate(0px,150px)"}} to={{transform: "translate(0px,0px)"}}>
          {
            props => (
            
              <div style={props} className="my-5">
              <div className="mb-2 text-center pageTitle sty-font">
                <span className="text-custom-3 mr-1">{firstText}</span>{lastText}
                <span className="text-custom-3 ml-1">.</span>
              </div>
              <div className="small text-custom-3 text-center">
                  {info}
              </div>
              </div>
             
            )
          }
      </Spring>
    );
  }
}
