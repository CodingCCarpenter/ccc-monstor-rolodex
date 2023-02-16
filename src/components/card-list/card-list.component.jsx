import { Component } from 'react';
import './card-list.style.css';

import Card from '../../components/card/card';

class CardList extends Component {
    render() {
        const { monsters } = this.props;
        return (
            <div className='card-list'>
                {monsters.map((monster) => {
                     return (<Card 
                        id={monster.id}
                        name={monster.name}
                        email={monster.email} />)
                })} 
            </div>
        )
    };
                 
}    

export default CardList;