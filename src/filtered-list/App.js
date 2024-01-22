// App.jsx
import Table from './components/Table'
import { useEffect, useState } from 'react';
import './App.css';

const endpointUrl = "https://data.webdevinterviews.com/dogBreeds.json";

export default function App() {
  const [breeds, setBreeds] = useState(null);
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    fetch(endpointUrl)
      .then( response => {
        if(response.status === 200) {
          return response.json(); 
        }
      })
      .then(data => {
        setBreeds(data)
        setLoading(false)
      })
      .catch(err => console.log(err))
  }, []);
  if (loading) return <div>Loading...</div>
  return <div className="main-container">
    <Table breeds={breeds}/>  
  </div>;
}
