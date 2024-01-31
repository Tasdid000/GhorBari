import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MultiSearch = () => {
  const [type, setType] = useState('');
  const [completion, setCompletion] = useState('');
  const [purpose, setPurpose] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = () => {
    setLoading(true); // Set loading to true to indicate that the search is in progress

    // Make API call to Django backend with query parameters
    axios.get('http://127.0.0.1:8000/apiv1/user/properties-search/', {
      params: {
        type,
        Completion: completion,
        Purpose: purpose,
        // Add other parameters as needed for search
      }
    })
    .then(response => {
      setSearchResults(response.data);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    })
    .finally(() => {
      setLoading(false); // Set loading back to false when the search is complete
    });
  };

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Type"
          value={type}
          onChange={(e) => setType(e.target.value)}
        />
        <input
          type="text"
          placeholder="Completion"
          value={completion}
          onChange={(e) => setCompletion(e.target.value)}
        />
        <input
          type="text"
          placeholder="Purpose"
          value={purpose}
          onChange={(e) => setPurpose(e.target.value)}
        />
        {/* Add other input fields for additional search criteria */}
        <button onClick={handleSearch}>Search</button>
      </div>
      <div>
        <h2>Search Results:</h2>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <ul>
            {searchResults.map((result) => (
              <li key={result.id}>
                {/* Display relevant properties from the search results */}
                {result.property_Address} - Type: {result.type} - Completion: {result.Completion} - Purpose: {result.Purpose}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default MultiSearch;
