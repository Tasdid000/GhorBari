import React, { useState } from 'react';
import PropertyList from './PropertyList';

const PropertyPagination = ({ properties, propertiesPerPage }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastProperty = currentPage * propertiesPerPage;
  const indexOfFirstProperty = indexOfLastProperty - propertiesPerPage;
  const currentProperties = properties.slice(indexOfFirstProperty, indexOfLastProperty);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      {currentProperties.map(property => (
        <PropertyList key={property.id} Property={property} PropertySelect={() => } />
      ))}
      <div>
        {Array.from({ length: Math.ceil(properties.length / propertiesPerPage) }, (_, index) => (
          <button key={index + 1} onClick={() => paginate(index + 1)}>
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default PropertyPagination;
