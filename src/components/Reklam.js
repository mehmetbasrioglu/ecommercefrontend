import React, { Component } from 'react'

export class Reklam extends Component {
    render() {
        return (
            <>
            <div className="reklam"> 
                <div className="img">
                <img src={this.props.resim} />
                 </div>
                <div className="reklamsub">
                    <span>test</span>
                </div>
            </div>
            </>
            
        )
    }
}

export default Reklam
