import React, { Component } from 'react'

import Kart from './Kart'
//RESIMLER
import james90sjean from "../images/elbiseler/james90sjean.jpg"
import yirtikjean from "../images/elbiseler/yirtikjean.jpg"
import sari_kapuson_kadin from "../images/elbiseler/sari_kapuson_kadin.jpg"
import balonkollubeyazkazak from "../images/elbiseler/balonkollubeyazkazak.jpg"
import biskuvikapusonkislik from "../images/elbiseler/biskuvikapusonkislik.jpg"
import kedikapuson from "../images/elbiseler/kedikapuson.jpg"
import lilatuldetayli from "../images/elbiseler/lilatuldetayli.jpg"
import beyazciltderisneaker from "../images/elbiseler/beyazciltderisneaker.jpg"
import tavsandokumapijama from "../images/elbiseler/tavsandokumapijama.jpg"
import ayicik from "../images/cocuk/ayicik.jpg"
import oyuncadiri from "../images/cocuk/oyuncadiri.jpg"
import tvunitesi from "../images/mobilya/tvunitesi.jpg"


export class KartSub extends Component {
    render() {
        return (
            <div className=" container">
                {this.props.cinsiyet == "erkek" || this.props.cinsiyet == "unisex" ? (
                    <>
                   <Kart hizliteslimat={true}  magaza={this.props.magaza} oy={this.props.oy} resim={this.props.resim || yirtikjean} urunadi={this.props.urunadi} fiyat={this.props.fiyat} indirim={this.props.indirim} indirimtutari={this.props.indirimtutari}/>
             
                    </>
                ):""}
                {this.props.cinsiyet == "kadın" ? (
                    <>
                    
                    <Kart hizliteslimat={true} magaza={this.props.magaza} oy={this.props.oy} resim={this.props.resim || yirtikjean} urunadi={this.props.urunadi} fiyat={this.props.fiyat} indirim={this.props.indirim} indirimtutari={this.props.indirimtutari}/>
               {/*
               
                <Kart resim={sari_kapuson_kadin} magaza={this.props.magaza} oy={this.props.oy}  urunadi={this.props.urunadi} fiyat={this.props.fiyat} indirim={this.props.indirim} indirimtutari={this.props.indirimtutari}/>
                <Kart resim={balonkollubeyazkazak}/>
                <Kart resim={biskuvikapusonkislik}/>
                <Kart resim={kedikapuson}/>
                <Kart resim={lilatuldetayli}/>
                <Kart resim={beyazciltderisneaker}/>
                <Kart resim={tavsandokumapijama}/> */}
              
                    </>
                ):""}
                {this.props.cinsiyet == "cocuk" || this.props.cinsiyet == "oyuncak" ? (
                    <>
                   <Kart  magaza={this.props.magaza} oy={this.props.oy} resim={this.props.resim || yirtikjean} urunadi={this.props.urunadi} fiyat={this.props.fiyat} indirim={this.props.indirim} indirimtutari={this.props.indirimtutari}/>
             
                    </>
                ):""}
                {this.props.cinsiyet == "mobilya" ? (
                    <>
                   <Kart  magaza={this.props.magaza} oy={this.props.oy} resim={this.props.resim || yirtikjean} urunadi={this.props.urunadi} fiyat={this.props.fiyat} indirim={this.props.indirim} indirimtutari={this.props.indirimtutari}/>
             
                
                
                    </>
                ):""}
                {this.props.cinsiyet == "kedimamasi" || this.props.cinsiyet == "supermarket" ? (
                    <>
                   <Kart  magaza={this.props.magaza} oy={this.props.oy} resim={this.props.resim || yirtikjean} urunadi={this.props.urunadi} fiyat={this.props.fiyat} indirim={this.props.indirim} indirimtutari={this.props.indirimtutari}/>
             
                
                
                    </>
                ):""}
               
                </div>
        )
    }
}

export default KartSub
