import React, { useState } from 'react';
import { MapPin, Clock, DollarSign } from 'lucide-react';
import type { Destination } from '../../types';

interface DestinationCardProps {
  destination: Destination;
}

export const DestinationCard = ({ destination }: DestinationCardProps) => {
  const [name,setName] = useState('');
  const [email,setEmail]   = useState('');
  const [travelDates, setTravelDates] = useState('');

  const handleSubmit = async(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();

    const payload = {
      destinationId:destination._id,
      name,
      email,
      travelDates,
    }

    const response = await fetch('/api/book',{
      method:'POST',
      body:JSON.stringify(payload),
    });

    if(response.ok){
      //handle success 
      console.log("Booking created successfully");
    }
    else{
      console.error("Error creating Booking");
    }
  }
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
      <img
        src={destination.image}
        alt={destination.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          {destination.title}
        </h3>
        <div className="space-y-2 mb-4">
          <p className="flex items-center text-gray-600 dark:text-gray-300">
            <MapPin className="w-4 h-4 mr-2" />
            {destination.location}
          </p>
          <p className="flex items-center text-gray-600 dark:text-gray-300">
            <Clock className="w-4 h-4 mr-2" />
            {destination.duration}
          </p>
          <p className="flex items-center text-gray-600 dark:text-gray-300">
            <DollarSign className="w-4 h-4 mr-2" />
            From ${destination.price}
          </p>
        </div>
       <form onSubmit={handleSubmit} className='space-y-4'>
        <input type="text" 
        placeholder='Your Name'
        className='w-full border rounded p-2'
        value={name}
        onChange={e=>setName(e.target.value)}
        required/>
        
        <input type="email"
        placeholder='Your Email'
        className='w-full border rounded-2'
        value={email}
        onChange={e=>setEmail(e.target.value)}
        required
        />

       <input type="text"
       placeholder='Travel-Dates'
       className='w-full border rounded p-2'
       value={travelDates}
       onChange={e=>setTravelDates(e.target.value)}
       required
       />

       <button type="submit"
       className='w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition-colors'>Book Now</button>
        
        
        </form>
      </div>
    </div>
  );
};