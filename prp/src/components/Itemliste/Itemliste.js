import React from 'react'
import Item from '../item/Item'

const Itemliste = ({itemArray}) => {
    return (
        <div>
            <table className="table">
  <thead>
    <tr>
      <th scope="col">View</th>
      <th scope="col">Model</th>
      <th scope="col">Name</th>
      <th scope="col">Price</th>
    </tr>
    </thead>
    {itemArray.map((item,key)=>(
        <Item item={item}/>
    ))}
  </table>
 
        </div>
    )
}

export default Itemliste
