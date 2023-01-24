import "./hotel.css"
import Navbar from "./../../components/navbar/Navbar"
import Header from "./../../components/header/Header"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot, faPhotoFilm } from "@fortawesome/free-solid-svg-icons"
import { parseWithOptions } from "date-fns/fp"
import h1 from "./../../images/hotel1.jpg"
import h2 from "./../../images/hotel2.jpg"
import h3 from "./../../images/hotel3.jpg"
import h4 from "./../../images/hotel4.jpg"
import h5 from "./../../images/hotel5.jpg"
import MailList from "./../../components/mailList/MailList"
import Footer from "./../../components/footer/Footer"
import { useState } from "react"
const Hotel = ()=>{
     const [slideNumber,setSlideNumber] = useState(0) ;
     const [open,setOpen]= useState(false) ;
    const photos = [h1,h2,h3,h4,h5,h1]

    const handleOpen = (i)=>{
      setSlideNumber(i) ;
      setOpen(true) ;
    }
    const handleMove = (direction)=>{
      let newSlideNumber ;
     if(direction==='l'){
      newSlideNumber = slideNumber===0?5:slideNumber-1 ;
     }
     else{
      newSlideNumber=slideNumber===5 ?0:slideNumber+1 ;
     }
     setSlideNumber(newSlideNumber) ;
    }
    return (
      <div>
        <Navbar />
        <Header type="list" />
        <div className="hotelContainer">
          {open && (
            <div className="slider">
              <FontAwesomeIcon icon={faCircleXmark} onClick={()=>setOpen(false)} className="close"/>
              <FontAwesomeIcon icon={faCircleArrowLeft} className="arrowleft" onClick={()=>handleMove('l')} />
              <div className="sliderWrappper">
                <img src={photos[slideNumber]} alt="" className="sliderImg" />
              </div>
              <FontAwesomeIcon icon={faCircleArrowRight} className="arrowright" onClick={()=>handleMove('r')}/>
            </div>
          )}
          <div className="hotelWrapper">
            <button className="bookNow">Reserve or Book Now!</button>
            <h1 className="hotelTitle">Grand hotel</h1>
            <div className="hotelAddress">
              <fontAwesomeIcon icon={faLocationDot} />
              <span>Elton St 125 New york</span>
            </div>
            <span className="hotelDistance">
              Excellent location 500m from center
            </span>
            <span className="hotelPriceHighlight">
              Book a stay over $114 at thi s property and get a free airport
              taxi
            </span>
            <div className="hotelImages">
              <div className="hotelImgWrapper">
                <img
                  onClick={() => handleOpen(0)}
                  src={h1}
                  alt=""
                  className="hotelImg"
                />
                <img
                  onClick={() => handleOpen(1)}
                  src={h2}
                  alt=""
                  className="hotelImg"
                />
                <img
                  onClick={() => handleOpen(2)}
                  src={h3}
                  alt=""
                  className="hotelImg"
                />
                <img
                  onClick={() => handleOpen(3)}
                  src={h4}
                  alt=""
                  className="hotelImg"
                />
                <img
                  onClick={() => handleOpen(4)}
                  src={h5}
                  alt=""
                  className="hotelImg"
                />
                <img
                  onClick={() => handleOpen(0)}
                  src={h1}
                  alt=""
                  className="hotelImg"
                />
              </div>
            </div>
            <div className="hotelDetails">
              <div className="hotelDetailsTexts">
                <h1 className="hotelTitle">Stay in the heart of krakow</h1>
                <p className="hotelDesc">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatem hic quibusdam omnis accusamus assumenda ipsam
                  porro, beatae iure vel maiores ex officiis, nam ducimus
                  explicabo, iste minus aut itaque dolorem commodi magni
                  voluptas. Impedit vel, sed eveniet est quibusdam praesentium
                  fugit quisquam. Labore error nesciunt mollitia similique
                  deleniti sapiente explicabo veniam impedit iusto excepturi
                  dolores iste obcaecati recusandae eveniet exercitationem
                  corporis neque dolor in, earum animi quod enim blanditiis ipsa
                  nisi! Tempora aliquid cupiditate laborum asperiores quos dicta
                  voluptatem, esse facere praesentium minima maiores magni
                  voluptatum, optio tenetur earum harum. Dolore reprehenderit,
                  magnam mollitia aspernatur officiis culpa corporis excepturi
                  expedita.
                </p>
              </div>
              <div className="hotelDetailsPrice">
                <h1>Perfect for a 9-night stay!</h1>
                <span>
                  Located in the real heart of krakow,this property has an
                  excellent location score of 9.8!
                </span>
                <h2>
                  <b>$945</b>(9 nights)
                </h2>
                <button>Reserve or Book Now!</button>
              </div>
            </div>
          </div>
          <MailList />
          <Footer />
        </div>
      </div>
    );
}

export default Hotel ;