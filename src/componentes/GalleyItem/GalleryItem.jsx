import React, {Component} from 'react';
import GalleryList from '../GalleryList/GalleryList';
import Item from '../Item/Item';
// import data from '../assets/data/items.json'

import GridList from '@material-ui/core/GridList';
import NewItem from '../newItem/newItem';


export default class GalleryItem extends Component {

// constructor(){
//   super();
//   this.addItem=this.addItem.bind(this)
// }

deleteItem= (i, deleteState) =>{
  this.props.onDeleteItem(i, deleteState)
}

updateItem = (i, itemImag) => {
  this.props.onUpdateItem(i, itemImag);
}
// removeItem = (r) => {
//   this.props.data.items.splice(i, 1) 
//     <Item key={i} index={index}/>
  
//   this.props.onRemoveItem(r, index);
// }
removeItem = (i) =>{
  this.props.onRemoveItem(i)
}


  

  render(){
    return(
      <div>
      
      <GridList>
      {this.props.data.items.map((item, index) => (
         <Item key={index} item={item} index={index} imag={item.imag} name={item.name} description={item.description} media={item.media}
         onDeleteItem={this.deleteItem} onUpdateItem={this.updateItem} onRemoveItem={this.removeItem}></Item>))}
         </GridList>
         {/* <figure>
           <img src={item.imag} alt= ''></img>
          <figcaption>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
          </figcaption>
          </figure> */}
          
      </div>
    )
}
}