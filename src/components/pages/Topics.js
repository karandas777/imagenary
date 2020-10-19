import React, { Component } from 'react'
import Logo from '../elements/Logo'

export default class Topics extends Component {
    render() {
        return (
            <div className="min-height">
                <Logo firstText="the" lastText="topics" info="Find images based on the topics you like" />
            </div>
        )
    }
}
