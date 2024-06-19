import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import App from './App';
import CoverPage from './componentes/Cover/CoverPage';
import GalleryList from './componentes/GalleryList/GalleryList';
import GalleryItem from './componentes/GalleyItem/GalleryItem';
import Item from './componentes/Item/Item';
import NavMenu from './componentes/navMenu/navMenu';
import NewItem from './componentes/newItem/newItem';
import NotFound from './Router/notFound';



const Router = (props) =>(
            <BrowserRouter>
            {/* {showMenu = (e, props) => {e.preventDefault(); props.push('/GalleryItem')}}
            <nav>
            <button className='buttonCounter__container' onClick={showMenu}>+</button>
            <button className='buttonCounter__container' onClick={8}>+</button>
            </nav> */}
                <Switch>
                    <Route exact path='/' component={App}/>
                    <Route path='/CoverPage' component={CoverPage}/>
                    <Route path='/CoverPage/:cogelo' component={CoverPage}/>
                    <Route path='/GalleryList/:history' component={GalleryList}/>
                    <Route path='/GalleryList' component={GalleryList}/>
                    <Route path='/GalleryItem/:data' component={GalleryItem}/>
                    <Route path='/GalleryItem' component={GalleryItem}/>                    
                    {/* <Route path='/newItem' component={NewItem}/> */}
                    <Route path='/Item/:name' component={Item}/>
                    <Route path='/Item' component={Item}/>
                    <Route path='/NewItem/:onAddItem' component={NewItem}/>
                    <Route path='/NewItem' component={NewItem}/>
                    <Route path='/navMenu/:history' component={NavMenu}/>
                    <Route path='/navMenu' component={NavMenu}/>
                    <Route component={NotFound}/>
                </Switch>
            </BrowserRouter>
        )
                

export default Router