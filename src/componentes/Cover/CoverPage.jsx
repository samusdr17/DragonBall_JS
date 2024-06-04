import React, {Component} from 'react';
import NavMenu from '../navMenu/navMenu';
import './CoverPage.scss';


class CoverPage extends Component {
    showMenu = e => {
        e.preventDefault();
        console.log(this.props)
        this.props.history.push('/GalleryList');
    }


    render(){
        // const {params} = this.props.match
        return(
            <div className='divCover'>
            <div className='navRotation' onClick={this.showMenu}>
            <h1>{this.props.cogelo}</h1>
            <NavMenu/>
            </div>
            </div>
        )
    }
}

export default CoverPage;