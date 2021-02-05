import React, { Component } from 'react'
import "./reklamlar.css"
import ReklamMini from './ReklamMini'


//BANNERLAR
import pb from "../images/reklamlar/pb.gif"
import addax from "../images/reklamlar/addax.jpg"
import madmext from "../images/reklamlar/madmext.jpg"
import sofra from "../images/reklamlar/sofra.gif"
import aquadipolo from "../images/reklamlar/aquadipolo.jpg"
import stradivarius from "../images/reklamlar/stradivarius.jpg"
import madmext_ from "../images/reklamlar/madmext_.jpg"
import petshop from "../images/reklamlar/petshop.jpg"
import petshop2 from "../images/reklamlar/petshop2.jpg"
import stra from "../images/reklamlar/stra.gif"
import ayakkabi from "../images/reklamlar/ayakkabi.jpg"


import Reklam from './Reklam'
import ReklamExSmall from './ReklamExSmall'


export class Reklamlar extends Component {
    render() {
        return (
            <>
            <div class="parent container">
                <div class="div1">
                    <Reklam resim={addax}/>
                    <Reklam resim={ayakkabi}/>
                    <Reklam resim={aquadipolo}/>
                    <Reklam resim={madmext}/>
                </div>
                <div class="div2">
                <ReklamMini resim={pb}/>
                <ReklamMini resim={sofra}/>
                <ReklamMini resim={stra}/>
                </div>
            </div>
            <div class="container">
                <div class="smallreklam">
                <ReklamExSmall resim={stradivarius}/>
                <ReklamExSmall resim={madmext_}/>
                <ReklamExSmall resim={petshop2}/>
                <ReklamExSmall resim={petshop}/>
                </div>
            </div>
            </>
        )
    }
}

export default Reklamlar
