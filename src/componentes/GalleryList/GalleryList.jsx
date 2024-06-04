import React, { Component,useState } from 'react';
import GalleryItem from '../GalleyItem/GalleryItem';
import data from '../assets/data/items.json';
import NewItem from '../newItem/newItem';
import NavMenu from '../navMenu/navMenu';



export default class GalleryList extends Component {

    state = {
        items: data
    }

    // const [list, setList] = useState({initialState});


    updateItem = (index, itemImag /*itemName, itemDescrip*/) => {
        let newState = {...this.state}

        newState.items.items[index].imag = itemImag
        
        this.setState(newState);
    }

    addItem = (itemImag,itemName,itemDescrip,itemMedia) => {
        let newState = {...this.state};
        const newItem = {
            id: newState.items.items.length,
            imag: itemImag,
            name: itemName,
            description: itemDescrip,
            media: itemMedia,
        }
        newState.items.items.push(newItem)
        this.setState(newState);
    }
    deleteItem = (i, deleteState) => {
        let newState = {...this.state}
        newState.items.items[i] = deleteState;
        // let items = newState.items
        // for(const item of items) {
            // newState.items.splice(i, 1);
        // newState.items = item
        this.setState(newState);
        // }
      }
    //     item.push(<GalleryItem key={i} item={item}/>)
    removeItem = (r) => {
        let newState = {...this.state}
        newState.items.items.splice(r, 1)
        this.setState(newState);
    }

        
    
    
    render(){
    return(

        <div>
            <NavMenu/>
            <GalleryItem data={this.state.items} onDeleteItem={this.deleteItem} onUpdateItem={this.updateItem} onRemoveItem={this.removeItem}></GalleryItem>
            <NewItem onAddItem={this.addItem}></NewItem>
        </div>
    )
}
} 
