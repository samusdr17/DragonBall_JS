import React, { Component } from "react";
import NavMenu from "../navMenu/navMenu";


class NewItem extends Component {
    newItem = React.createRef();
     
  addItem = (e) => {
    console.log('Item añadido')
    e.preventDefault();
    console.log(this)
    console.log(this.newItem.current.imag.value, 
        this.newItem.current.name.value, 
        this.newItem.current.description.value,
        this.newItem.current.media.value);
    this.props.onAddItem(this.newItem.current.imag.value,
  this.newItem.current.name.value,this.newItem.current.description.value,
  this.newItem.current.media.value);
    this.newItem.current.imag.value = "";
  this.newItem.current.name.value = "";
this.newItem.current.description.value = "";
this.newItem.current.media.value = "";
  }

  render() {
    
    return (
      <div className='divForm'>
      {/* <NavMenu/> */}
        <form  className='form' autoComplete="off" ref={this.newItem} onSubmit={this.addItem}>
          <h2>INTRODUCE TU SAIYAN</h2>
          <input className='input' type="text" placeholder='Imagen...' name='imag'/>
          <input className='input' type="text" placeholder='Nombre del Saiyan...' name="name"/>
          <input className='input' type="text" placeholder='Descripción...' name="description"/>
          <input className='input' type="text" placeholder='Escena (video youtube)...' name="media"/>

          <button className='buttonForm' onClick={this.addItem}>></button>
        </form>
      </div>
    );
  }
}

export default NewItem;
