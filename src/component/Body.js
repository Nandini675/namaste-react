import Restrocard from './Restrocards';
import reslist from '../utils/mocdata';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Shimmer from './Shimmer';
import useOnlinestatus from '../utils/useOnlinestatus';
const Body = () => {
  //  local state variable- superpowerful variable
  const [Listofrestro, setListofrestro] = useState([]);
  const [searchText, setseachText] = useState('');
  const [filterrestro, setfilterrestro] = useState([]);
  //jo bhi hum square bracket mai pass krenge vo iski default value ban jayegi
  //normal js varaiable
  // let Listofrestro;
  let Listofrestro2 = [
    {
      info: {
        id: '407809',
        name: 'Pizza Hut',
        cloudinaryImageId: '2b4f62d606d1b2bfba9ba9e5386fabb7',
        locality: 'Agra Cantt',
        areaName: 'Agra Cantt',
        costForTwo: '₹300 for two',
        cuisines: ['Pizzas'],
        avgRating: 4.2,
        sla: {
          deliveryTime: 38,
        },
      },
    },
    {
      info: {
        id: '407808',
        name: 'lapinoz',
        cloudinaryImageId: '2b4f62d606d1b2bfba9ba9e5386fabb7',
        locality: 'Agra Cantt',
        areaName: 'Agra Cantt',
        costForTwo: '₹300 for two',
        cuisines: ['Pizzas'],
        avgRating: 3.8,
        sla: {
          deliveryTime: 38,
        },
      },
    },
    {
      info: {
        id: '407807',
        name: 'burgersingh',
        cloudinaryImageId: '2b4f62d606d1b2bfba9ba9e5386fabb7',
        locality: 'Agra Cantt',
        areaName: 'Agra Cantt',
        costForTwo: '₹300 for two',
        cuisines: ['Pizzas'],
        avgRating: 4.5,
        sla: {
          deliveryTime: 38,
        },
      },
    },
  ];

//   const [error, setError] = useState(null);
  console.log('Body');

  const fetchdata = async () => {
    console.log("Fetching data...");
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58558&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
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
  useEffect(() => {
    fetchdata();
  }, []);


  //condition rendering
  //        if(Listofrestro.length==0)
  //         {
  // return <Shimmer/>;
  //         }

  const onlinestatus = useOnlinestatus();
  if(onlinestatus==false) return 
  (
  <h1>looks like u r offline, plz check ur internet connection</h1>

  );
  return Listofrestro.length === 0 ? (
    <Shimmer />
  ) : (
    <div className='body'>
      <div className='filter'>
        <div className='search'>
          <input
            type='text'
            className='search-box'
            value={searchText}
            onChange={(e) => {
              setseachText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              //filter the restro cards and update the ui
              // search text
              console.log(searchText);
              const filterlist = Listofrestro.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setfilterrestro(filterlist);
            }}
          >
            search
          </button>
        </div>
        <button
          className='filter-btn'
          onClick={() => {
            //filter logic
            const filterli = Listofrestro.filter(
              (res) => res.info.avgRating > 4
            );
            //  console.log(Listofrestro);
            setListofrestro(filterli);
          }}
        >
          Top-rated-Restraunts
        </button>
      </div>
      <div className=' restro-container'>
        {/* #restro card component (whenever we r using a stuff frequently we make it  a fuction i.e container)*/}
        {/* prop are just like arguments to ur function */}
        {filterrestro &&
          filterrestro.map((restraunt) => (
           <Link key={restraunt.info.id}
            to= {"/restraunts/"+restraunt.info.id}><Restrocard   resdata={restraunt} /></Link> 
          ))}
      </div>
    </div>
  );
};
export default Body;
