const {Component}= React;
import { countries, prices, roomSizes } from '../../info/infoFilters';

class ItemNav extends Component {
    constructor(props) {
        super(props);
        this.showMsj = this.showMsj.bind(this)
        this.state = {
            categorie : this.props.categorie,
            defaultFilter : this.props.categorie[0],
        }
    } 

    showMsj(e){
        const infoFilters = [countries, prices, roomSizes]
        this.setState({defaultFilter: e.target.value},
            ()=>this.props.changeCategorieState(infoFilters, this.state.defaultFilter))
    }
    
    render() {
        const {categorie} = this.props
        return (
            <li className = 'navigation__item'>
            <select className='navigation__dropdown'
            onClick = {this.showMsj}
            >{categorie.map((str, idx)=>
                <option 
                key={idx}
                value={str}
                >{str}</option>)}
            </select>
            </li>
        );
    }
}

export default ItemNav;