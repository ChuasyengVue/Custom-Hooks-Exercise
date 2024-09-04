import React, { useState, useCallback } from 'react';
import axios from 'axios';

const useAxios = (baseUrl) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Define the fetchData function with useCallback to memoize it
  const fetchData = useCallback(async (endpoint = '') => {
    setIsLoading(true);
    try {
      // Combine the base URL with the endpoint
      const response = await axios.get(`${baseUrl}${endpoint}`);
      
      // Determine the correct data structure
      let newData = response.data;
      
      // Adjust based on known API response structures
      if (Array.isArray(newData.cards)) {
        newData = newData.cards;
      } else if (Array.isArray(newData.results)) {
        newData = newData.results;
      } else if (!Array.isArray(newData)) {
        newData = [newData];
      }

      // Update state with new data
      setData(prevData => [...prevData, ...newData]);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }, [baseUrl]);

  return [data, fetchData, isLoading, error];
};

export default useAxios;

