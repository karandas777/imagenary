import React, { Component } from 'react'

export default class Loading extends Component {
    render() {
        return (
            <div className="text-center my-3">
               <div className="spinner-border text-custom-3 loader"></div>
            </div>
        )
    }
}
