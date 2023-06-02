import React from 'react';

const StreetViewLink = ({morada, latitude, longitude }) => {
  
  const handleStreetViewClick = () => {
    const url = `https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=${latitude},${longitude}`;
    window.open(url, '_blank');
  };

  return (
    <button className='text-start' style={{border: "none", background: "none", textDecoration: 'underline' }} onClick={handleStreetViewClick}>
      {morada}
    </button>
  );
};

export default StreetViewLink;
