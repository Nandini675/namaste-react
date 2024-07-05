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
        <div className="m-4 p-4 w-[250px] overflow-scroll rounded-lg  bg-gray-100   hover:bg-gray-300" >
            <img  className="resimg rounded-lg"  alt="dish"src= { CDN_URL+ resdata.info.cloudinaryImageId } />
    
<h3 className=" font-bold py-4  text-xl">{name}</h3>   
{/* to make it dynamic */}
<h4>{cuisines.join(",")}</h4>
<h4>{avgRating}stars</h4>

<h4>{sla.deliveryTime} minutes </h4>

            </div>
    );
};
export default Restrocard;