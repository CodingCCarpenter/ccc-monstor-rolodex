import { Component } from "react";
import './search-box.style.css';

const SearchBox = ({className, placeholder, onChangeHandler}) => {
    return(
        <div>
            <input 
                className={className}
                type='search' 
                placeholder={placeholder} 
                onChange={onChangeHandler}
            />
        </div>
    )
}



// class SearchBox extends Component {

//     render () {
//         const {monsters, searchField} = this.props
//         const filteredMonsters = monsters.filter((monster) => {
//             return monster.name.toLowerCase().includes(searchField);
//         });


//         return(
//             <div>
//                 <input 
//                     className={this.props.className}
//                     type='search' 
//                     placeholder={this.props.placeholder} 
//                     onChange={this.props.onChangeHandler}
//                 />
//             </div>
//         )
//     }
// }

export default SearchBox;