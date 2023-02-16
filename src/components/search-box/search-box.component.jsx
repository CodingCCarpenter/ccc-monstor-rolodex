import { Component } from "react";
import './search-box.style.css';

class SearchBox extends Component {

    render () {
        const {monsters, searchField} = this.props
        const filteredMonsters = monsters.filter((monster) => {
            return monster.name.toLowerCase().includes(searchField);
        });


        return(
            <div>
                <input 
                    className={this.props.className}
                    type='search' 
                    placeholder={this.props.placeholder} 
                    onChange={this.props.onChangeHandler}
                />
            </div>
        )
    }
}

export default SearchBox;