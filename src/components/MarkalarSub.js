import { Avatar } from '@material-ui/core'
import React, { Component } from 'react'
import "./markalar.css"

export class MarkalarSub extends Component {
    render() {
        return (
            <div className="markalar">
                <div className="imgmarka">
                    <Avatar src={this.props.resim}/>
                </div>
                <p>{this.props.detay}</p>
            </div>
        )
    }
}

export default MarkalarSub
