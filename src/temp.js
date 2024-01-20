// Table.jsx
// Table.jsx
import { useState } from 'react';

const Table = ({breeds}) => {
  const [filter, setFilter] = useState({
    col: null,
    dir: 'asc'
  });

  const sortHandler = (key) => {
    const newFilter = { col: key, dir: 'asc' };
    if(filter.col === key && filter.dir === 'asc'){
      newFilter.dir = 'desc';
    }
    setFilter(newFilter);
  };

  const renderArrow = (key) => {
    if(filter.col !== key) return <div onClick={() => sortHandler(key)} className="btn-filter">&#8722;</div>;
    return filter.dir === 'desc' ? 
      <div onClick={() => sortHandler(key)} className="btn-filter">&#8593;</div> : 
      <div onClick={() => sortHandler(key)} className="btn-filter">&#8595;</div>
  };
  
  const renderHeader = () => {
    return ( 
      <thead>
        <tr>
          <th>
            <div className='th-container'>
              <div>ID</div> 
              { renderArrow('id') }
            </div>
          </th>
          <th>
            <div className='th-container'>
              <div>Name</div> 
              { renderArrow('name') }
            </div>
          </th>
          <th>
            <div className='th-container'>
              <div>Average Weight</div>
              { renderArrow('avgWeight') }
            </div>
          </th>
          <th>
            <div className='th-container'>
              <div>Average Lifespan</div>
              { renderArrow('avgLifespan') }
            </div>
          </th>
          <th>
            <div className='th-container'>
              <div>Average Height</div> 
              { renderArrow('avgHeight') }
            </div>
          </th>
          <th>
            <div className='th-container'>
              <div>Active Breed ? </div>
              { renderArrow('isActive') }
            </div>
          </th>
        </tr>
      </thead>
    );
  };

  const sortBreeds = (breeds) => {
    return [...breeds].sort((a, b) => {
      if(filter.dir === 'asc') {
        return a[filter.col] > b[filter.col] ? 1 : -1
      } else {
        return a[filter.col] < b[filter.col] ? 1 : -1
      }
    });
  }

  const renderBody = (breeds) => {
   const sortedBreeds = filter.col ? sortBreeds(breeds) : breeds;
    return (
      <tbody>
        { sortedBreeds.map((item, index) => {
          return (<tr key={index}>
            <td>{ item.id }</td>
            <td>{ item.name }</td>
            <td>{ item.avgWeight }</td>
            <td>{ item.avgLifespan }</td>
            <td>{ item.avgHeight }</td>
            <td>{ item.isActive ? 'True' : 'False' }</td>
          </tr>)
        }) }
      </tbody>
    )
  };

  return (
    <table>
      { renderHeader() }
      { renderBody(breeds) }
    </table>
  );
}

export default Table;

// App.jsx
const endpointUrl = "https://data.webdevinterviews.com/dogBreeds.json";
import Table from './Table'
import { useEffect, useState } from 'react';

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
  return <div className="flex">
    <Table breeds={breeds}/>  
  </div>;
}


// Styles.css
* {
  margin: 0;
  padding: 0;
}

.flex {
  display: flex;
  justify-content: center;
  align-items: center;
}

table, th, td {
  border: 1px solid black;
}

th {
  font-weight: 500;
  padding: 0.2rem 0.5rem;
  background: #000;
  color: #FFF;
}

.th-container {
  display: flex;
  align-items: center;
  justify-content: center;
}

.btn-filter {
  padding: 0.5rem;
  cursor: pointer;
  width: 1rem
}

td {
  padding: 0.2rem 0.5rem;
}




