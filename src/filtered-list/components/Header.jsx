import ArrowIcon from './ArrowIcon';

const Header = ({filter, setFilter}) => {
  return ( 
    <thead>
      <tr>
        <th>
          <div className='th-container'>
            <div>ID</div> 
            <ArrowIcon identifier={'id'} filter={filter} setFilter={setFilter} />
          </div>
        </th>
        <th>
          <div className='th-container'>
            <div>Name</div> 
            <ArrowIcon identifier={'name'} filter={filter} setFilter={setFilter} />
          </div>
        </th>
        <th>
          <div className='th-container'>
            <div>Average Weight</div>
            <ArrowIcon identifier={'avgWeight'} filter={filter} setFilter={setFilter} />
          </div>
        </th>
        <th>
          <div className='th-container'>
            <div>Average Lifespan</div>
            <ArrowIcon identifier={'avgLifespan'} filter={filter} setFilter={setFilter} />
          </div>
        </th>
        <th>
          <div className='th-container'>
            <div>Average Height</div>
            <ArrowIcon identifier={'avgHeight'} filter={filter} setFilter={setFilter} /> 
          </div>
        </th>
        <th>
          <div className='th-container'>
            <div>Active Breed ? </div>
            <ArrowIcon identifier={'isActive'} filter={filter} setFilter={setFilter} />
          </div>
        </th>
      </tr>
    </thead>
  );
};

export default Header;