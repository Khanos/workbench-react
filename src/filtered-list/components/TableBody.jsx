import { useMemo } from "react";

const TableBody = ({breeds, filter}) => {
  const sortedBreeds = useMemo(() => {
    const sortBreeds = (breeds) => {
      return [...breeds].sort((a, b) => {
        if(filter.dir === 'asc') {
          return a[filter.col] > b[filter.col] ? 1 : -1
        } else {
          return a[filter.col] < b[filter.col] ? 1 : -1
        }
      });
    };
    return filter.col ? sortBreeds(breeds) : breeds;
  }, [filter.col, filter.dir, breeds]);
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