import React, { Component } from 'react'
import {withRouter,useHistory} from "react-router-dom"


export class ReklamMini extends Component {

    deneme(){
        
        alert("test")
    }
    render() {
        return (
            <div className="minireklam">
                <img src={this.props.resim} onClick={this.deneme} />
            </div>
        )
    }
}

export default withRouter(ReklamMini)
