import React, { Component } from 'react'
import "./sepetim.css"


export class Sepetim extends Component {
    constructor(props) {
        super(props)
        this.sepetonayla = this.sepetonayla.bind(this)
    }

    sepetonayla(){
        const veri = []
        sessionStorage.sepeturunsayisi = JSON.stringify(veri)
        alert("Sipariş Onaylandı")
        window.location.reload()
    }
    render() {
        if(sessionStorage.sepeturunsayisi){
            var arrayFromStroage = JSON.parse(sessionStorage.sepeturunsayisi);
            var arrayLength = arrayFromStroage.length;
          }
          
          var sepettoplam = 0;
          var sepettoplamnormal = 0;
          var sepetindirim = 0;
          arrayFromStroage.map(item => (sepettoplam += item.indirim ? Number(item.indirim)  : item.fiyat ));
          arrayFromStroage.map(item => (sepettoplamnormal += item.fiyat ));
          arrayFromStroage.map(item => (sepetindirim += Number(item.indirim)  ));
          const indirimduzelt = parseFloat(sepettoplam.toFixed(2));
          const normalfiyatduzelt = parseFloat(sepettoplamnormal.toFixed(2));
          const sepetindirimduzelt = parseFloat(sepetindirim.toFixed(2));
          const total = indirimduzelt;
          const normalfiyat = normalfiyatduzelt;
          const yapilanindirim = sepetindirimduzelt;

        return arrayLength > 0 ? (
            <div className="sepetim">
                <div className="urunler">

                    <div className="urunlerheader">
                        <h1>Sepetim({arrayLength} Ürün)</h1>
                        <div className="urunbutton">
                        <button type="submit">Alışverişe Devam Et</button>
                        </div>
                    </div>

                    <div className="urunlerlistesi">
                        {arrayFromStroage.map(item=>(
                            <>
                            <div className="urun_saticisi" key={item._id}>
                            <h1>Satıcı:<strong>{item.magaza}</strong></h1>
                            <div className="urun_saticisi-kargo">
                                {total < 50 ? (
                                    <>
                                    {total < 50 ? (
                                        <h1>Kargo Ücreti: 9.99 TL</h1>
                                    ):(
                                        <h1>Kargo Ücretsiz</h1>
                                    )}
                                    </>
                                ):(
                                    <h1>Kargo Ücretsiz</h1>
                                )}
                            </div>
                                </div>
                            <div className="urun_item">
                                <label >
  <input type="checkbox" />
  <span className="checkmark"></span>
</label>
                                <img src={item.urunresmi} />
                                <div className="urun_info">
                                <h1><strong>{item.magaza}</strong> {item.urunadi}</h1>
                                <h1 className={item.hizliteslimat ? "hizliteslimat" : "normalteslimat"}>{item.hizliteslimat ? "Hızlı Teslimat" : "Normal Teslimat"}</h1>
                                    </div>
                                <div className="urun_fiyat ">
                                    <span className={item.indirim ? "yenifiyat": "" }>{item.fiyat + " TL" || "0 TL"}</span>
                                    {item.indirim ? <span className="indirimlifiyat">{item.indirim + " TL"}</span>:""}
                                </div>
                            </div>
                            </>
                        ))}
                    </div>

                </div>
                <div className="siparisonayla">
                    <button type="submit" onClick={this.sepetonayla}>Sepeti Onayla</button>
                     <div className="siparisozeti">
                         <h1>Sipariş Özeti</h1>

                         <div className="urundetaylari">
                         <div className="detay">
                                 <span>Normal Fiyatı</span>
                                 <span className="fiyatsag">{normalfiyat} TL</span>
                             </div>
                             
                             <div className="detay">
                                 <span>Indirimli Ürün Tutarı</span>
                                 <span className="fiyatsag">{yapilanindirim} TL</span>
                             </div>
                              
                             {Number(total) > 50 ? (
                                 <div className="detay">
                                 <span>Kargo Indirimi </span>
                                 <span className="fiyatsag">Ücretsiz</span>
                             </div>
                             ):(
                                <div className="detay">
                                <span style={{color:"gray"}}>Kargo Indirimi 50 TL ve Üzeri Alışverişte Geçerlidir</span>
                               
                            </div>  
                             )}

                             
                            
                         </div>
                         <div className="detay">
                                 <span></span>
                                 {Number(total)  > 50 ? (
                                 <span className="fiyatsag toplamfiyati">{total } TL</span>
                                 )
                                 :
                                 (
                                    <span className="fiyatsag toplamfiyati">{parseFloat(total + 9.99).toFixed(2)} TL</span>
                                 )}
                             </div>
                     </div>
                   {/*
                    {total} /
                    {normalfiyat} /
                    {yapilanindirim}
                   */}
                </div>
            </div>
        ) : (
            <div className="sepetim">
            <div className="urunler">

                <div className="urunlerheader">
                    <h1>Sepetim({arrayLength} Ürün)</h1>
                    <div className="urunbutton">
                    <button type="submit">Alışverişe Devam Et</button>
                    </div>
                </div>

                <div className="urunlerlistesi">
                   <h5>Henüz bir şey satın alınmamış.</h5>
                </div>

            </div>
            
        </div>
        )
    }
}

export default Sepetim
