const TableBody = ({breeds, filter}) => {
  const sortBreeds = (breeds) => {
    return [...breeds].sort((a, b) => {
      if(filter.dir === 'asc') {
        return a[filter.col] > b[filter.col] ? 1 : -1
      } else {
        return a[filter.col] < b[filter.col] ? 1 : -1
      }
    });
  }
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

 export default TableBody;