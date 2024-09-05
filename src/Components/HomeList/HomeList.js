import { useState } from 'react';
import styles from './HomeList.module.css';
import EditUserModel from '../EditUserModal/EditUserModel';

const HomeList =()=>{
    const [isEditVisible,setIsEditVisible] = useState(false);
    const [name,setName] = useState("");
    const homes = [
        {
          "name": "Sunset Villa",
          "list_price": 450000,
          "state": "CA",
          "zip": "90210",
          "sqft": 3500,
          "beds": 4,
          "baths": 3
        },
        {
          "name": "Ocean Breeze",
          "list_price": 850000,
          "state": "FL",
          "zip": "33139",
          "sqft": 4200,
          "beds": 5,
          "baths": 4
        },
        {
          "name": "Mountain Retreat",
          "list_price": 375000,
          "state": "CO",
          "zip": "80401",
          "sqft": 2800,
          "beds": 3,
          "baths": 2
        },
        {
          "name": "Urban Loft",
          "list_price": 295000,
          "state": "NY",
          "zip": "10001",
          "sqft": 1200,
          "beds": 2,
          "baths": 1
        },
        {
          "name": "Desert Oasis",
          "list_price": 675000,
          "state": "AZ",
          "zip": "85251",
          "sqft": 3200,
          "beds": 4,
          "baths": 3
        },
        {
          "name": "Lakeside Cottage",
          "list_price": 450000,
          "state": "MI",
          "zip": "49684",
          "sqft": 2100,
          "beds": 3,
          "baths": 2
        },
        {
          "name": "Countryside Manor",
          "list_price": 850000,
          "state": "TX",
          "zip": "78745",
          "sqft": 5000,
          "beds": 6,
          "baths": 5
        },
        {
          "name": "Historic Estate",
          "list_price": 1250000,
          "state": "VA",
          "zip": "22101",
          "sqft": 6000,
          "beds": 7,
          "baths": 6
        },
        {
          "name": "City Penthouse",
          "list_price": 950000,
          "state": "IL",
          "zip": "60611",
          "sqft": 4000,
          "beds": 4,
          "baths": 3
        },
        {
          "name": "Beachfront Bungalow",
          "list_price": 1100000,
          "state": "HI",
          "zip": "96815",
          "sqft": 3500,
          "beds": 4,
          "baths": 4
        },
        {
          "name": "Suburban Dream",
          "list_price": 350000,
          "state": "OH",
          "zip": "44122",
          "sqft": 2400,
          "beds": 3,
          "baths": 2
        },
        {
          "name": "Luxury Condo",
          "list_price": 525000,
          "state": "NJ",
          "zip": "07030",
          "sqft": 1800,
          "beds": 2,
          "baths": 2
        },
        {
          "name": "Farmhouse Charm",
          "list_price": 400000,
          "state": "NC",
          "zip": "27514",
          "sqft": 3200,
          "beds": 4,
          "baths": 3
        },
        {
          "name": "Modern Townhouse",
          "list_price": 675000,
          "state": "WA",
          "zip": "98103",
          "sqft": 2500,
          "beds": 3,
          "baths": 3
        },
        {
          "name": "Riverside Ranch",
          "list_price": 375000,
          "state": "OR",
          "zip": "97201",
          "sqft": 2700,
          "beds": 3,
          "baths": 2
        },
        {
          "name": "Hilltop Haven",
          "list_price": 725000,
          "state": "TN",
          "zip": "37205",
          "sqft": 3800,
          "beds": 5,
          "baths": 4
        },
        {
          "name": "Woodland Cabin",
          "list_price": 285000,
          "state": "VT",
          "zip": "05602",
          "sqft": 1800,
          "beds": 2,
          "baths": 2
        },
        {
          "name": "Golf Course Villa",
          "list_price": 900000,
          "state": "GA",
          "zip": "30305",
          "sqft": 4500,
          "beds": 5,
          "baths": 4
        },
        {
          "name": "Downtown Loft",
          "list_price": 650000,
          "state": "TX",
          "zip": "75201",
          "sqft": 2300,
          "beds": 2,
          "baths": 2
        },
        {
          "name": "Coastal Retreat",
          "list_price": 1200000,
          "state": "CA",
          "zip": "92651",
          "sqft": 4600,
          "beds": 5,
          "baths": 5
        }
      ]
      const handleClick = (name)=>{
        setName(name);
        setIsEditVisible(true);
      }
    return(
        <>
        <div className={`${styles.homesContainer}`}>
        {homes.map((home, index) => (
          <div className={`${styles.homeCard}`} key={index}>
            <h3>{home.name}</h3>
            <p>Price: ${home.list_price}</p>
            <p>State: {home.state}</p>
            <p>Zip: {home.zip}</p>
            <p>Sqft: {home.sqft} sqft</p>
            <p>Beds: {home.beds}</p>
            <p>Baths: {home.baths}</p>
            <button className={`${styles.userBtn}`} onClick={()=>handleClick(home.name)}>Edit Users</button>
          </div>
        ))}
      </div>
      {isEditVisible && <EditUserModel setIsEditVisible={setIsEditVisible} name={name}/>}
      </>
    )
}
export default HomeList;