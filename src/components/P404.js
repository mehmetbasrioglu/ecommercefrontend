import React, { Component } from 'react'
import "./P404.css"
import logo from "../images/logo2.svg"



//REACT ICON
import {BiSearchAlt} from "react-icons/bi"

export class P404 extends Component {
    render() {
        return (
            <div className="pnf-404">
                <div className="pnf-container container">
                <div className="pnf-left_and_right">
                    <img src={logo}/>
                </div>
                <div className="pnf-center">
                    <h1>404</h1>
                    <p>
                                Aradığın içeriğe şu an ulaşılamıyor.
                    </p>
                    <div className="pnf-input">
                   <div className="icon">
                   <BiSearchAlt/>
                   </div>
                   <input type="text" placeholder="Aradığınız ürün veya markayı yazınız"/>
                   <button className="pnf-search">ARA</button>
                   </div>
                   <div>
                       <button className="pnf-git">Devam Et</button>
                   </div>
                </div>
                </div>
            </div>
        )
    }
}

export default P404
