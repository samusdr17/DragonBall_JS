import React,{ Component ,useState } from 'react';
import {TextField} from '@material-ui/core';
import ReactDOM from 'react-dom';



class Item extends Component {
    state = {
      items: this.props.item,
      imag: this.props.imag,
      name: this.props.name,
      description: this.props.description,
      media: this.props.media,
      edit: false,
      editM: false
    }
    
    editImag = () =>{
      this.setState({edit: !this.state.edit})
    }
    editMedia = () =>{
      this.setState({editM: !this.state.editM})
    }

    controlChange = (e) => {
      let newState = {...this.state};
       newState.imag = e.currentTarget.value;

       this.setState(newState);
       this.props.onUpdateItem(this.props.index, newState.imag);
      // console.log('Item añadido')
      // e.preventDefault();
      // console.log(this.newItem.current.value);
      // this.props.onAddItem(this.newItem.current.value)
      // this.newItem.current.value = "";
    }
    componentWillUnmount(){
      console.log('Componente Eliminado')
    }
    deleteChange = (e) => {
      let newState = {...this.state};
       newState.items = e.currentTarget.value;

       this.setState(newState);
       this.props.onDeleteItem(this.props.index, newState.items);
    }
    removeItem = (e) => {
      e.preventDefault();
      this.props.onRemoveItem(this.props.index);
    }

    
  render(){
    // const {params} = this.props.match
    return(
      <div>
      {/* {this.state.items.map((figure, index) => */}
      {this.state.edit ?
        <form className='form' autoComplete='off'>
        <input
        label='Imag...'
      type='text'
      className='input'
      value={this.state.imag}
      onChange={this.controlChange}
      />
      <button className='buttonForm' onClick={this.editImag}>X</button>
       </form>:
        <figure>
          <img className='imag figure' src={this.props.imag} onClick={this.editImag} alt=''></img>
          <figcaption>
          {/* <h3 className='h3'>{params.name}</h3> */}
            <h3 className='h3'>{this.props.name}</h3>
            <div className='p'  onClick={this.editMedia}>{this.state.editM ?
              <iframe className='video' width="560" height="315" src={this.props.media} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
             : <div className='mediaContainer'><p>{this.props.description}</p><h2 className='escena'>VER ESCENA</h2></div>
             }</div>
          </figcaption>
          <button className='buttonForm' onClick={this.deleteChange}>Vaciar</button>
          <button className='buttonForm' name='delete' onClick={this.removeItem}>Borrar</button>
        </figure>
      }
      </div>
    )
}
}
// ReactDOM.render(<Item/>, document.getElementById('root'));

export default Item;