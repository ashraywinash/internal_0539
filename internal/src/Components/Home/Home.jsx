import React, { useState, useEffect, useContext } from 'react';
import StoreProfileCard from '../../Components/StoreProfileCard/StoreProfileCard';



const Home = () => {
  const storeCount = 10;
  

  console.log(user)
  const [stores,setStores] = useState(
    [{
    
        "name":"Gandikota Dosa",
        "password":"aryashu1",
        "rating":0,
        "location":"Inside Annapurna Canteen",
        "isOpen":true,
        "phoneNumber":"9010942283",
        "email":"aryashu448@gmail.com",
        "adminName":"Ashray"
        },
        {
        
        "name":"Tea Time",
        "password":"aryashu1",
        "rating":0,
        "location":"Opposite SAC Stage",
        "isOpen":true,
        "phoneNumber":"9010942283",
        "email":"aryashu448@gmail.com",
        "adminName":"Ashray"
        },
            {
        
        "name":"Coco Cola",
        "password":"aryashu1",
        "rating":0,
        "location":"Near Jacks",
        "isOpen":true,
        "phoneNumber":"9010942283",
        "email":"aryashu448@gmail.com",
        "adminName":"Ashray"
        },
        {
        
            "name":"Juice Point",
            "password":"aryashu1",
            "rating":0,
            "location":"Besides Coco Cola",
            "isOpen":false,
            "phoneNumber":"9010942283",
            "email":"aryashu448@gmail.com",
            "adminName":"Ashray"
        },
        {
        
            "name":"Chat Bandar",
            "password":"aryashu1",
            "rating":0,
            "location":"Besides Coco Cola",
            "isOpen":false,
            "phoneNumber":"9010942283",
            "email":"aryashu448@gmail.com",
            "adminName":"Ashray"
        },
        {
        
            "name":"Fast Food Center",
            "password":"aryashu1",
            "rating":0,
            "location":"Besides Coco Cola",
            "isOpen":false,
            "phoneNumber":"9010942283",
            "email":"aryashu448@gmail.com",
            "adminName":"Ashray"
        },
        {
        
            "name":"Soda Point",
            "password":"aryashu1",
            "rating":0,
            "location":"Near Cococola",
            "isOpen":true,
            "phoneNumber":"9010942283",
            "email":"aryashu448@gmail.com",
            "adminName":"Ashray"
        },
        {
        
            "name":"Softy point",
            "password":"aryashu1",
            "rating":0,
            "location":"Near Cococola",
            "isOpen":true,
            "phoneNumber":"9010942283",
            "email":"aryashu448@gmail.com",
            "adminName":"Ashray"
        },
        {
        
            "name":"Gandikota Dosa",
            "password":"aryashu1",
            "rating":0,
            "location":"Near Cococola",
            "isOpen":true,
            "phoneNumber":"9010942283",
            "email":"aryashu448@gmail.com",
            "adminName":"Ashray"
        },
        {
        
            "name":"Heritage",
            "password":"aryashu1",
            "rating":0,
            "location":"MBA",
            "isOpen":true,
            "phoneNumber":"9010942283",
            "email":"aryashu448@gmail.com",
            "adminName":"Ashray"
        },
        {
        
            "name":"Fast Food Center",
            "password":"aryashu1",
            "rating":0,
            "location":"In MBA",
            "isOpen":true,
            "phoneNumber":"9010942283",
            "email":"aryashu448@gmail.com",
            "adminName":"Ashray"
        },
        {
        
            "name":"Fries Point",
            "password":"aryashu1",
            "rating":0,
            "location":"In MBA",
            "isOpen":true,
            "phoneNumber":"9010942283",
            "email":"aryashu448@gmail.com",
            "adminName":"Ashray"
        },
        {
        
            "name":"Juice Point",
            "password":"aryashu1",
            "rating":0,
            "location":"In MBA",
            "isOpen":true,
            "phoneNumber":"9010942283",
            "email":"aryashu448@gmail.com",
            "adminName":"Ashray"
        },
        {
        
            "name":"Bakery",
            "password":"aryashu1",
            "rating":0,
            "location":"In MBA",
            "isOpen":true,
            "phoneNumber":"9010942283",
            "email":"aryashu448@gmail.com",
            "adminName":"Ashray"
        }
    ]
  )
  const [likedStores,setLikedStores]= useState([])

  
  function storeElements(store,index) {
    
      
      
      let ans = likedStores.includes(store._id);
      

      
      
      return (
        <div key={index}>
          <StoreProfileCard store={store} index={index} like={ans} />
        </div>
      );
   
  } 
  const storeElementsList = stores.map((store, index) => storeElements(store, index, likedStores));
  return (
    <div>
      
      <div className='overflow-auto flex-grow h-screen bg-gray-100 py-1'>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4 bg-gray-100">
          {
          storeElementsList
          }
        </div>
      </div>
    </div>
  );
}

export default Home;
