"use client";

import  {Input} from "@nextui-org/input";
import { Roboto } from 'next/font/google'
import { Card, CardBody } from "@nextui-org/card";
import '../app/styles.css';
import { useState } from 'react';

const roboto = Roboto({
  subsets: ['latin'],
  weight: '400',
})

export default function Home() {
  
  const [isToggled, setIsToggled] = useState(false);
  
  const handleToggle = () => {
    setIsToggled(!isToggled);
  };



  return (
    // Background div
    <div 
    className={`w-full h-screen flex items-center justify-center ${roboto.className}`} 
    style={{ backgroundColor: '#f0f0f0'}}
    >
      <div 
      className={`w-3/4  md:w-2/3 lg:w-1/2 p-8 bg-white rounded-lg shadow-lg`}>
      {/* Inner card component */}
      <h1 
      style={{fontSize: '28px', fontWeight: 'bolder', textAlign: 'center' }}> 
        Link Your Organization to your bank 
      </h1>
      <h2 
      style={{fontSize: '16px', fontWeight: 'lighter', textAlign: 'center',  paddingTop: '10px', paddingBottom: '20px' }}>
         Select The Option You Would prefer to use to link to your bank
      </h2>
        <div className="mt-4 flex gap-4 items-center justify-center">
          <Card className="card cursor-pointer" onClick={handleToggle}>
            <CardBody className="flex items-center justify-between">
             <div className="flex items-center">
                <span
                  className={`w-3 h-3 rounded-full mr-2 transition-colors ${
                    isToggled ? 'bg-blue-500': 'bg-gray-500'
                  }`}
                />
              <p 
              className={` text-black transition-colors ${
                 isToggled ? 'text-blue-500' : 'text-black'
              }`} 
              style={{ fontSize: '13px'}}>
                Account Number 
              </p>
             </div>
            </CardBody>
          </Card>
          <Card className="card cursor-pointer" onClick={handleToggle}>
            <CardBody className="flex items-center justify-between">
             <div className="flex items-center">
                <span
                  className={`w-3 h-3 rounded-full mr-2 transition-colors ${
                    isToggled ? 'bg-blue-500': 'bg-gray-500'
                  }`}
                />
              <p 
              className={` text-black transition-colors ${
                 isToggled ? 'text-blue-500' : 'text-black'
              }`} 
              style={{ fontSize: '13px'}}>
                Account Number 
              </p>
             </div>
            </CardBody>
          </Card>
          <Card className="card cursor-pointer" onClick={handleToggle}>
            <CardBody className="flex items-center justify-between">
             <div className="flex items-center">
                <span
                  className={`w-3 h-3 rounded-full mr-2 transition-colors ${
                    isToggled ? 'bg-blue-500': 'bg-gray-500'
                  }`}
                />
              <p 
              className={` text-black transition-colors ${
                 isToggled ? 'text-blue-500' : 'text-black'
              }`} 
              style={{ fontSize: '13px'}}>
                Account Number 
              </p>
             </div>
            </CardBody>
          </Card>
        </div>
        <h2
          style={{fontSize: '18px', fontWeight: 'bold', textAlign: 'left', paddingLeft: '65px', paddingTop: '30px'}}>
         Account Number
        </h2>
        <h3
          style={{fontSize: '15px', fontWeight: 'lighter', textAlign: 'left', paddingLeft: '65px', paddingTop: '5px'}}
          >
          Will use account number to lookup your bank details
        </h3>
        <div style={{paddingLeft: '65px',paddingTop: '15px', display: 'flex', alignItems: 'center'}}>
          <Input
           type="int" placeholder="Enter Number"
           style={{
            width: '350px',
            height: '40px',
            border: '1px solid #D3D3D3',
            borderRadius: '6px',
            marginRight: '8px',
           }}
          />
          
          <button
            style={{
              backgroundColor: '#99e44e',
              color: 'white',
              width: '55px',
              height: '40px',
              padding: '0 12px',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              borderBlockColor: 'Highlight',
            }}
           >
            Go
          </button>
        </div>
        {/* New container for "Back" button and section label */}
        <div
         style={{
          paddingLeft: '65px'
         }}
        >

        </div>
      </div>
    </div>
  );
}
