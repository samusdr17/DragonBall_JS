import React, { useState } from 'react';

export default function ListProps (props) {

// const [List, setList]  = useState(props.List);

// setList()
// for(const item of List){
//     item.push(props.List);
// }

return(
    <div>
    {props.List.map((item, indx)=><ul key={indx}> <li className='li'>{item}</li></ul>)}
    </div>
    
    
)


}