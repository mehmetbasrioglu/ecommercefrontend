import React, { Component } from 'react'

import logo from "../images/logo.svg"

// REACT ICONS FRAMEWORK
import {FaRegUser,
    FaRegHeart,
    FaShoppingBasket} from "react-icons/fa"
import {BiSearchAlt} from "react-icons/bi"
import { Avatar } from '@material-ui/core'
import {IoWomanOutline,IoManOutline,
    IoHomeOutline,IoFastFood,IoHappyOutline} from "react-icons/io5"
import {MdChildCare,MdPhonelink} from "react-icons/md"
import {GiSchoolBag} from "react-icons/gi"
import {BsClockHistory} from "react-icons/bs"


import $ from "jquery"


import Badge from '@material-ui/core/Badge';





import {
    BrowserRouter as Router,
    useHistory,
    withRouter
  } from "react-router-dom";


$(window).scroll(function() {
    if ($(this).scrollTop() > 200) {
        $(".altkisayol").slideUp();
       
        
} 
else if ($(this).scrollTop() < 200) {
        $(".altkisayol").slideDown();
        
        
    } 
});


export class HeaderSection extends Component {
    
    constructor(props){
        super(props)
        this.state = {
            inputcss: "inputsection",
            
        }
  
        this.wrapperRef = React.createRef();

     
        this.handleClickOutside = this.handleClickOutside.bind(this);
        this.onErkekClick = this.onErkekClick.bind(this)
        this.onKadinClick = this.onKadinClick.bind(this)
        this.onLogoClick = this.onLogoClick.bind(this)
        this.onCocukClick = this.onCocukClick.bind(this)
        this.onEvYasamClick = this.onEvYasamClick.bind(this)
        this.onSuperMarketClick = this.onSuperMarketClick.bind(this)
        this.onSepetClick = this.onSepetClick.bind(this)

        this.oninputfocus = this.oninputfocus.bind(this)
        
    }
    
    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
    }
    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }
    handleClickOutside(event) {
        if (this.wrapperRef && !this.wrapperRef.current.contains(event.target)) {
           this.setState({inputcss:"inputsection"})
        }
    }
    oninputfocus(){
        this.setState({
            inputcss: "inputsection inputsection_focus"
        })
        //alert(this.state.inputcss)
        
    }

    onErkekClick(){
  
     this.props.history.push("/butik/liste/erkek");
    }
    onKadinClick(){
  
        this.props.history.push("/butik/liste/kadin");
       }
    onLogoClick(){
  
        this.props.history.push("/");
    }
    onCocukClick(){
        this.props.history.push("/butik/liste/cocuk")
    }
    onEvYasamClick(){
        this.props.history.push("/butik/liste/ev--yasam")
    }
    onSuperMarketClick(){
        this.props.history.push("/supermarket")
    }
    onSepetClick(){
        this.props.history.push("/sepetim")
    }
  

    render() {
        const defaultProps = {
            color: 'secondary',
            children: <FaShoppingBasket />,
          };
          if(sessionStorage.sepeturunsayisi){
            var arrayFromStroage = JSON.parse(sessionStorage.sepeturunsayisi);
            var arrayLength = arrayFromStroage.length;
          }
        return (
            <div className="header fixed-top">
                <div className="üstheader">
                <div className="logo" onClick={this.onLogoClick}>
                <img src={logo} className="logo"/>
                </div>
                <div ref={this.wrapperRef} className={this.state.inputcss ? this.state.inputcss : "inputsection"} onClick={this.oninputfocus} >
                    <input type="text" placeholder="Aradığınız ürünü veya markayı yazınız"/>
                    <BiSearchAlt/>
                </div>
                <div className="islemler">
                   
                    <span><FaRegUser/> Çıkış Yap</span>
                    <span><FaRegHeart/> Favorilerim</span>
                    <Badge badgeContent={0 || arrayLength} onClick={this.onSepetClick} max={10} color="secondary">
                    <FaShoppingBasket /> Sepetim
                        </Badge> 
                 
                    <span className="avatar"><Avatar  src="https://i.pinimg.com/564x/d2/35/3d/d2353d4d367202f8f33e896d430d0267.jpg"/></span>
                </div>
                </div>

                {/* ALT KISAYOL HEADER */}
                <div className="altkisayol">
                    <ul>
                        <li><span onClick={this.onKadinClick}><IoWomanOutline/> KADIN </span></li>
                        <li><span onClick={this.onErkekClick}><IoManOutline/> ERKEK </span></li>
                        <li><span onClick={this.onCocukClick}><MdChildCare/> ÇOCUK</span></li>
                        <li><span onClick={this.onEvYasamClick}><IoHomeOutline/> EV & YAŞAM</span></li>
                        <li><span onClick={this.onSuperMarketClick}><IoFastFood/> SÜPERMARKET</span></li>
                        <li><span><IoHappyOutline/> KOZMETİK</span></li>
                        <li><span><GiSchoolBag/> AYAKKABI & ÇANTA</span></li>
                        <li><span><BsClockHistory/> SAAT & AKSESUAR</span></li>
                        <li><span><MdPhonelink/> ELEKTRONİK</span></li>
                    </ul>
                </div>

            </div>
        )
    }
}

export default withRouter(HeaderSection)
