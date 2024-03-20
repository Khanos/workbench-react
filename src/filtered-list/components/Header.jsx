import ArrowIcon from './ArrowIcon';
import HeaderItem from './HeaderItem';

const items = [
  {title: 'ID', identifier: 'id'},
  {title: 'Name', identifier: 'name'},
  {title: 'Average Weight', identifier: 'avgWeight'},
  {title: 'Average Lifespan', identifier: 'avgLifespan'},
  {title: 'Average Height', identifier: 'avgHeight'},
  {title: 'Active Breed ?', identifier: 'isActive'}
];

const Header = ({filter, setFilter}) => {
  return ( 
    <thead>
      <tr>
        { items.map((item, index) => {
          return(
            <th key={index} >
              <HeaderItem title={item.title}>
                <ArrowIcon identifier={item.identifier} filter={filter} setFilter={setFilter} />
              </HeaderItem>
            </th>
          );
        })}
      </tr>
    </thead>
  );
};

export default Header;