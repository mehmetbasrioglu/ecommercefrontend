import React, { Component } from 'react'
import "./kart.css"


// REACT ICONS
import {FaStar,FaShoppingBasket, FaHeart} from "react-icons/fa"
import ReactStars from "react-rating-stars-component";



// FIRSAT
import firsaturunu3 from "../images/firsaturunu3.png"


//Elbiseler


export class Kart extends Component {
    constructor(props){
        super(props)
        this.myRef = React.createRef()

        this.sepeteEkle = this.sepeteEkle.bind(this)
        this.sepeturunleri = []
        
    }

    sepeteEkle(e){
        e.preventDefault()
        if (typeof(Storage) !== "undefined") {
            if (sessionStorage.sepeturunsayisi) {
                const veriler = {
                    "urunadi":this.props.urunadi,
                    "urunresmi":this.props.resim,
                    "magaza":this.props.magaza,
                    "hizliteslimat":this.props.hizliteslimat,
                    "fiyat":this.props.fiyat,
                    "indirim":this.props.indirim ? indirimhesapla(this.props.fiyat,this.props.indirimtutari) : false
                }
              const deneme = JSON.parse(sessionStorage.sepeturunsayisi)
              deneme.push(veriler)
              sessionStorage.sepeturunsayisi = JSON.stringify(deneme);
              
            } else {
                const veriler = [{
                    "urunadi":this.props.urunadi,
                    "urunresmi":this.props.resim,
                    "magaza":this.props.magaza,
                    "hizliteslimat":this.props.hizliteslimat,
                    "fiyat":this.props.fiyat,
                    "indirim":this.props.indirim ? indirimhesapla(this.props.fiyat,this.props.indirimtutari) : false
                }]
              sessionStorage.sepeturunsayisi = JSON.stringify(veriler);
            }
        }
        //alert(`${this.props.magaza} / ${this.props.urunadi}`)
    }
 
    render() {
       
        return (
            <div className="kart">
                <div className="kartimg">
                    <img src={this.props.resim} className="img"/>
                    {this.props.indirim ? (
                        <>
                        <div className="indirimvarmi">
                     <img src={firsaturunu3} />
                 
                    </div>
                        </>
                    ):""}
                    
                </div>
                <div className="kartdetails">
                   <div>
                  <div className="kartname"> <p><strong>{this.props.magaza}</strong> {this.props.urunadi}</p></div>

<div className="oylama" ref={this.myRef}>

<ReactStars size={22} color="black" activeColor="#f27a1a" value={this.props.oy}/>

</div>

{this.props.indirim ?  (
    <h5 className="indirimfiyat"><span className="orjinalfiyat-indirim">{this.props.fiyat} TL</span> {indirimhesapla(this.props.fiyat,this.props.indirimtutari)} TL</h5>
):(
    <h5 className="indirimfiyat"><span className="orjinalfiyat">{this.props.fiyat} TL</span></h5>
)}

                   </div>
                    <button type="submit" onClick={this.sepeteEkle}><FaShoppingBasket/> Sepete Ekle</button>


                    </div>
            </div>
        )
    }
}

function indirimhesapla(ucret,indirim){
    var numVal1 = parseFloat(ucret);
    var numVal2 = parseFloat(indirim);
    var indirimlihali1 = numVal1 * (numVal2 / 100)
    var indirimhali2 = numVal1 - indirimlihali1

    if(isFinite(indirimhali2)){
        return indirimhali2.toFixed(2)
    }

}



export default Kart
