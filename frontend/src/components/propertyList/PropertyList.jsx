import  './propertyList.css' 
import img1 from "./../../images/hotel1.jpg"
import img2 from "./../../images/hotel2.jpg";
import img3 from "./../../images/hotel3.jpg";
import img4 from "./../../images/hotel4.jpg";
import img5 from "./../../images/hotel5.jpg";
import useFetch from '../../hooks/useFetch';

const PropertyList=()=>{
   return (
     <div className="pList">
       <div className="pListItem">
         <img src={img1} alt="" className="pListImg" />
         <div className="pListTitles">
           <h1>Hotels</h1>
           <h2>233 hotel</h2>
         </div>
       </div>
       <div className="pListItem">
         <img src={img2} alt="" className="pListImg" />
         <div className="pListTitles">
           <h1>Resorts</h1>
           <h2>233 resort</h2>
         </div>
       </div>
       <div className="pListItem">
         <img src={img3} alt="" className="pListImg" />
         <div className="pListTitles">
           <h1>Apartments</h1>
           <h2>33 apartments</h2>
         </div>
       </div>
       <div className="pListItem">
         <img src={img4} alt="" className="pListImg" />
         <div className="pListTitles">
           <h1>Villas</h1>
           <h2>6 villas</h2>
         </div>
       </div>
       <div className="pListItem">
         <img src={img5} alt="" className="pListImg" />
         <div className="pListTitles">
           <h1>Cabins</h1>
           <h2>45 Cabins</h2>
         </div>
       </div>
     </div>
   );
};

export default PropertyList ;