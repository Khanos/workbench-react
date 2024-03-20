import { useEffect, useState } from 'react';
import { fetchBreeds } from '../services';

export const useFetchBreeds = () => {
  const [ breeds, setBreeds ] = useState(null);
  const [ loading, setLoading ] = useState(true);
  const [ error, setError ] = useState(null);
  
  const doFetchBreeds = async () => {
    const response = await fetchBreeds();
    if(response.error) {
      setError(response.error);
    } else {
      setBreeds(response);
    }
    setLoading(false);
  };

  useEffect(() => {
    if(!breeds) {
      doFetchBreeds();
    }
  }, [breeds]);

  return { breeds, loading, error };
};