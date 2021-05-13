import React from 'react'

const Item = ({item}) => {
    const product  =(nameprice)=> {
        alert(nameprice)}
    return (
    <>
     <tr>
      <th scope="row"><button  onClick={() =>product(item.name +" "+item.price)}>Product Details</button></th>
      <td><img src={item.imgSrc} alt={item.name} style={{width:"200px"}}/></td>
      <td>{item.name}</td>
      <td>{item.price}</td>
    </tr>
        </>
    )
}

export default Item
