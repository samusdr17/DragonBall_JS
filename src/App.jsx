import React, { Component } from 'react';
import logo from './logo.svg';
import './App.jsx';
import  CounterWithHooks  from "./componentes/counter/CounterWithHooks"
import HelloProps from './componentes/list/HelloProps';
import ListProps from './componentes/ListProps/ListProps';
import Item from './componentes/Item/Item';
import GalleryList from './componentes/GalleryList/GalleryList';
import GalleryItem from './componentes/GalleyItem/GalleryItem';
import NavMenu from './componentes/navMenu/navMenu';
import NewItem from './componentes/newItem/newItem';
import CoverPage from './componentes/Cover/CoverPage';
class App extends Component {
  
  
  render(){
    // const {params} = this.props.match
  return (
    <div className="App">
      <div className="App-header">
        {/* <img src='http://pre06.deviantart.net/a349/th/pre/i/2015/117/a/2/goku_super_saiyan_god_super_saiyan_dbxv_by_armorkingtv21-d8rc8fv.png' className="App-logo" alt="logo" /> */}
        {/* <GalleryItem/> */}
        {/* {...console.log(this.props)} */}
        {/* <GalleryList history={this.props.history}></GalleryList> */}
        <CoverPage history={this.props.history} />
        {/* <Item/> */}
        {/* <NewItem></NewItem> */}
        {/* <CounterWithHooks/>
        <HelloProps textToShow={'Warren'}/>
        <ListProps List={['texto1','texto2','texto3']}/> */}
        {/* <Item/> */}
      </div>
    </div>
  );
}
}

export default App;
/*
//Buscar un valor dentro de un array. Te devuelve un objeto.
.find()

//Buscar varios valores dentro de un array. devuelve un array.
.filter()


for(const field in user){
  console.log('', user[field]); //Para recorrer un array
}

const array = []
for(const item of array){
  console.log('', item); //Para recorrer un objeto
}

//.map -> te genera un array  (menos eficiente que el for)
const newList = list.map()
return(
  {props.stringList.map(stringText => <li>{stringText}</li>)}// stringText es el nombre del array que genera
)

//for (of) mas o meno un .map pero no me he enterado de la diferencia
cont list = [214,51,51]
for(const of)
*/