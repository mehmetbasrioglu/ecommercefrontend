import React, { Component } from 'react'
import MarkalarSub from './MarkalarSub'


//Resimler
import seninicin from "../images/seninicin.png"
import coksatanlar from "../images/coksatanlar.png"
export class Markalar extends Component {
    render() {
        return (
            <div className="markalarsection">
                 <MarkalarSub resim={coksatanlar} detay="Sende Al!"/>
                <MarkalarSub resim={seninicin} detay="Sana Özel"/>
               
            </div>
        )
    }
}

export default Markalar
