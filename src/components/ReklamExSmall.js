import React, { Component } from 'react'

export class ReklamExSmall extends Component {
    render() {
        return (
            <div className="exsmallreklam">
                <div className="img">
                <img src={this.props.resim} />
                 </div>
                <div className="reklamsub">
                    <span>test</span>
                </div>
            </div>
        )
    }
}

export default ReklamExSmall
