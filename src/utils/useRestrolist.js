import { useState,useEffect } from "react";
import { Restrocard_API } from "./constants";

const useRestrolist =()=>{

 
  const [Listofrestro, setListofrestro] = useState([]);
// fetchdata`
useEffect(() => {
  fetchdata();
}, []);
const fetchdata = async () => {
    console.log("Fetching data...");
    try {
      const response = await fetch(Restrocard_API);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const json = await response.json();
      console.log(json);

      // Accessing nested properties safely
    console.log(  json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setListofrestro(  json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
   setfilterrestro(  json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    
  
  } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return Listofrestro ;
 }


    
export default  useRestrolist;