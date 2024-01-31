import React from 'react';
import PropertyPagination from './PropertyPagination';

const YourMainComponent = () => {
  // Assuming you have a properties array
  const properties = [
    { id: 1, /* property details */ },
    { id: 2, /* property details */ },
    // ... more properties
  ];

  const propertiesPerPage = 5; // Change this based on your preference

  return (
    <div>
      <h1>Your Property Page</h1>
      <PropertyPagination properties={properties} propertiesPerPage={propertiesPerPage} />
    </div>
  );
}

export default YourMainComponent;
