import React from 'react';
import { useRouter } from 'next/navigation';

const MicrositePage = () => {
  const router = useRouter();
  const { id } = router.query;
  console.log(id)
  const micrositeData = JSON.parse(sessionStorage.getItem('micrositeData'));

  return (
    <div>
      <h1>{micrositeData.storeName} Microsite</h1>
      <p>{micrositeData.storeDescription}</p>
    </div>
  );
};

export default MicrositePage;
