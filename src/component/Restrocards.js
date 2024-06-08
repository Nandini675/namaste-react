import { CDN_URL } from "../utils/constants";

const stylecard ={
    backgroundColor:"#f0f0f0"
  
  };
const Restrocard=(props)=>{
    const {resdata}=props;
    const {cloudinaryImageId,name,cuisines,avgRating ,sla}=resdata?.info;

    // console.log(props);
    //  const Restrocard=({resName , cusine})=>{
    return(
        <div className="restro-cards" style ={stylecard}>
            <img  className="resimg"  alt="dish"src= { CDN_URL+ resdata.info.cloudinaryImageId } />
    
<h3>{name}</h3>   
{/* to make it dynamic */}
<h4>{cuisines.join(",")}</h4>
<h4>{avgRating}stars</h4>

<h4>{sla.deliveryTime} minutes </h4>

            </div>
    );
};
export default Restrocard;