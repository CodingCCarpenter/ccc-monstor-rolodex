import { Component } from 'react';
import './card-list.style.css';

import Card from '../../components/card/card';

class CardList extends Component {
    render() {
        const { monsters } = this.props;
        return (
            <div className='card-list'>
                {monsters.map((monster) => {
                     return (<Card name={monster.name} email={monster.email} id={monster.id} />)
                })} 
            </div>
        )
    };
                 
}    

export default CardList;