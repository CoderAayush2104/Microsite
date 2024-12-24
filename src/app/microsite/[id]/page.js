"use client";

import React from 'react';


const MicrositePage = () => {
  

  const micrositeData = JSON.parse(sessionStorage.getItem('micrositeData'));

  return (
    <div>
      <h1>{micrositeData.storeName} Microsite</h1>
      <p>{micrositeData.storeDescription}</p>
    </div>
  );
};

export default MicrositePage;
