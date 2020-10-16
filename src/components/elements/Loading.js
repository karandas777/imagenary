import React, { Component } from 'react'

export default class Loading extends Component {
    render() {
        return (
            <div className="text-center my-3">
                <img src={require('../../assets/loading.gif')} alt="loading" className="w-50" />
            </div>
        )
    }
}
