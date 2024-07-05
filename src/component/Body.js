import Restrocard from './Restrocards';
import reslist from '../utils/mocdata';
import { useEffect, useState ,useContext} from 'react';
import { Link } from 'react-router-dom';
import Shimmer from './Shimmer';
import useOnlinestatus from '../utils/useOnlinestatus';
import { Restrocard_API } from '../utils/constants';
 import UserContext from '../utils/UserContext';

const Body = () => {
  //  local state variable- superpowerful variable
  // const [searchText, setseachText] = useState('');
 
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
  const [Listofrestro, setListofrestro] = useState([]);
  const[filterrestro,setfilterrestro] = useState([]);
  const [searchText,setseachText]= useState("");
//   const [error, setError] = useState(null);
  // console.log('Body');

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
        //  console.log(json);
  
        // Accessing nested properties safely
      // console.log(  json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
      // );
       setListofrestro(  json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
     setfilterrestro(  json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      
    
    } catch (error) {
        console.error("Error fetching data:", error);
      }
    };


//  const filterrestro = useSearch(Listofrestro);
  const onlinestatus = useOnlinestatus();
  if(onlinestatus==false) return 
  (
  <h1>looks like u r offline, plz check ur internet connection</h1>

  );
  const {setusername,loggedinuser}=useContext(UserContext);
  return Listofrestro.length === 0 ? (
    <Shimmer />
  ) : (
    <div className='body'>
      <div className='filter flex'>
        <div className='search m-4 p-4'>
          <input
            type='text'
            className='border border- border-solid border-black  px-2'
            value={searchText}
            onChange={(e) => {
              setseachText(e.target.value);
            }}
          />

        <button className='px-4  py-2 m-4 bg-red-200 rounded-lg' 
            onClick={() => {
              //filter the restro cards and update the ui
              // search text
              // console.log(searchText);
            const filterlist = Listofrestro.filter((res) =>
                 res.info.name.toLowerCase().includes(searchText.toLowerCase())
               );
              setfilterrestro(filterlist);
            
            }}
          >
            search
          </button>
        </div>
        <div className='search m-4 p-4 flex items-center'>
        <button className=' px-4 py-2 m-4 bg-gray-100 rounded-lg'
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
        {<div className='search m-4 p-4 flex items-center'>
          <label className='m-2 p-2'>UserName:</label>
       <input className=' border border- border-solid border-black  px-2'
       value={loggedinuser}
       onChange ={(e)=>setusername(e.target.value)}
       ></input>
        </div>}

      </div>
      <div className=' restro-container flex flex-wrap '>
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
