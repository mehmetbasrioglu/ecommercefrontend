import React, { Component } from 'react'
import HeaderSection from './header'




import Markalar from './markalar'
import KartSub from './KartSub'
import Reklamlar from './Reklamlar'
import Sepetim from './Sepetim'




export class Flex extends Component {

    constructor(props){
        super(props)
        this.state = {
            apitest : []
        }
    }

    componentDidMount(){
        fetch("http://localhost:8080/api/urunler")
      .then(res => res.json())
      .then(
        (result) => {
            this.setState({
                apitest:result
              });
          console.log(result)
        },
        // Not: Burada hataları yakalamak önemlidir.
        // Bileşenimizde bug bulunmaması için, 'catch ()' bloğu yerine bulunan
        // bu blok içinde hatalar yakalanır.
        (error) => {
          console.log(error)
        }
      )
    }


    render() {
        return (
            <div>
                <HeaderSection/>
                <div className="container margin ">
                {this.props.route == "/" ? (
                    <>
                    
                <Markalar/>
                <Reklamlar/>
                </>
                ):""}
                <div className="kartsection">
                 {this.props.route == "/butik/liste/erkek" ? (
                    <>
                     {this.state.apitest.reverse().map(item => (
                        <>
                        {item.kategori == "erkek" || item.kategori == "unisex" ? (
                            <>
                             <KartSub resim={item.resimadresi} urunadi={item.title} oy={item.oy}  magaza={item.magaza} cinsiyet={item.kategori} fiyat={item.fiyat}  indirim={item.indirim} indirimtutari={item.indirimtutari}/>
                             </>
                        ):""}
                        </>
                    ))}
                </>
                ):""}
                {this.props.route == "/butik/liste/kadin" ? (
                    <>
                     {this.state.apitest.reverse().map(item => (
                        <>
                        {item.kategori == "kadın"  || item.kategori == "unisex"  ? (
                            <>
                             <KartSub resim={item.resimadresi} urunadi={item.title} oy={item.oy}  magaza={item.magaza} cinsiyet={item.kategori} fiyat={item.fiyat}  indirim={item.indirim} indirimtutari={item.indirimtutari}/>
                             </>
                        ):""}
                        </>
                    ))}
                </>
                ):""}
                {this.props.route == "/butik/liste/cocuk" ? (
                    <>
                    {this.state.apitest.reverse().map(item => (
                        <>
                        {item.kategori == "cocuk" || item.kategori == "oyuncak" ? (
                            <>
                             <KartSub resim={item.resimadresi} urunadi={item.title} oy={item.oy}  magaza={item.magaza} cinsiyet={item.kategori} fiyat={item.fiyat}  indirim={item.indirim} indirimtutari={item.indirimtutari}/>
                             </>
                        ):""}
                        </>
                    ))}
                </>
                ):""}
                {this.props.route == "/butik/liste/ev--yasam" ? (
                    <>
                    {this.state.apitest.reverse().map(item => (
                        <>
                        {item.kategori == "mobilya" || item.kategori == "yasam" ? (
                            <>
                             <KartSub resim={item.resimadresi} urunadi={item.title} oy={item.oy}  magaza={item.magaza} cinsiyet={item.kategori} fiyat={item.fiyat}  indirim={item.indirim} indirimtutari={item.indirimtutari}/>
                             </>
                        ):""}
                        </>
                    ))}
                </>
                ):""}
                {this.props.route == "/supermarket" ? (
                    <>
                    {this.state.apitest.reverse().map(item => (
                        <>
                        {item.kategori == "kedimamasi" || item.kategori == "supermarket" ? (
                            <>
                             <KartSub resim={item.resimadresi} urunadi={item.title} oy={item.oy}  magaza={item.magaza} cinsiyet={item.kategori} fiyat={item.fiyat}  indirim={item.indirim} indirimtutari={item.indirimtutari}/>
                             </>
                        ):""}
                        </>
                    ))}
                </>
                ):""}
                {this.props.route == "/apicheck" ? (
                    <>
                    {this.state.apitest.map(item => (
                        <>
                        <KartSub resim={item.resimadresi} urunadi={item.title} oy={item.oy}  magaza={item.magaza} cinsiyet={item.kategori} fiyat={item.fiyat}  indirim={item.indirim} indirimtutari={item.indirimtutari}/>
                        </>
                    ))}
                </>
                ):""}
                {this.props.route == "/sepetim" ? (
                    <>
                    <Sepetim/>
                </>
                ):""}
               
               
               </div>
                </div>
                
            </div>
        )
    }
}

export default Flex
