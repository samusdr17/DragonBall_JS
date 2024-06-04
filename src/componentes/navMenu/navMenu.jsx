import React, {Component} from 'react';

class NavMenu extends Component{
// showMenu = e => {
//     e.preventDefault();
//     console.log(this.props)
//     this.props.history.push('/GalleryList');
// }

render(){
    // const {params} = this.props.match
    return(
        <div className='navMenu'>
        <nav className='nav'>
            {/* <button className='buttonCounter__container' onClick={e => {e.preventDefault(); this.props.history.push('/GalleryList')}}>Galería</button> */}
        </nav>
        </div>
    )
}
}

export default NavMenu;