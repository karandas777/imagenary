import React, { Component } from 'react'

export default class ImgCard extends Component {
    render() {

        const {urls, alt_description} = this.props.img; 
        
        return (
            <div className="content-item">
                <img src={urls.small} alt={alt_description} className="w-100 rounded"/>
            </div>
        )
    }
}
