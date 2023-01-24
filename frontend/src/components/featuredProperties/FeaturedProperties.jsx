import "./featuredProperties.css"
import fpimg from "./../../images/fpimg.jpg"
const FeaturedProperties = ()=>{
  return (
    <div className="fp">
      <div className="fpItem">
        <img src={fpimg} alt="" className="fpImg" />
        <span className="fpName">ApartHotel Stare Miasto</span>
        <span className="fpCity">Madrid</span>
        <span className="fpPrice">Starting from $120</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img src={fpimg} alt="" className="fpImg" />
        <span className="fpName">ApartHotel Stare Miasto</span>
        <span className="fpCity">Madrid</span>
        <span className="fpPrice">Starting from $120</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img src={fpimg} alt="" className="fpImg" />
        <span className="fpName">ApartHotel Stare Miasto</span>
        <span className="fpCity">Madrid</span>
        <span className="fpPrice">Starting from $120</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img src={fpimg} alt="" className="fpImg" />
        <span className="fpName">ApartHotel Stare Miasto</span>
        <span className="fpCity">Madrid</span>
        <span className="fpPrice">Starting from $120</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
    </div>
  );
}

export default FeaturedProperties 