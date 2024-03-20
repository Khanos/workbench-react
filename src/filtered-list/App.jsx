// App.jsx
import Table from './components/Table'
import { useFetchBreeds } from './hooks/useFetchBreeds';
import './App.css';

export default function App() {
  const { breeds, loading, error } = useFetchBreeds();

  if (loading) return <div>Loading...</div>
  if (error) return <div>{error}</div>
  return <div className="main-container">
    <Table breeds={breeds}/>  
  </div>;
}
