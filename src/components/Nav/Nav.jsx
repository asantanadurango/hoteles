const { Component } = React;

import { countries, prices, roomSizes } from '../../info/infoFilters';

import ItemNav from '../ItemNav/ItemNav';

class Nav extends Component {

    constructor(props) {
        super(props);
        this.changeCategorieState = this.changeCategorieState.bind(this)
        this.setDate = this.setDate.bind(this)
        this.state = {
            categorie: [countries[0], prices[0], roomSizes[0]],
            inputDate: 0,
            outputDate: 0,
        }
    }

    changeCategorieState(categorieP, filterP) {

        const categorieCopy = [...this.state.categorie]
        categorieP.forEach((categori, idx) => {
            let coincide = false
            categori.forEach(fil => fil === filterP && (coincide = true))

            coincide === true && (categorieCopy.splice(idx, 1, filterP))
        })

        this.setState({ categorie: categorieCopy },
            () => this.props.getFilters(this.state.categorie))
    }

    setDate(e) {
        console.dir(e.target)
        this.setState({ [e.target.name]: e.target.valueAsNumber },
            () => {
                const copyInp = this.state.inputDate
                const copyOut = this.state.outputDate

                const dates = {
                    inputDate: copyInp,
                    outputDate: copyOut
                }
                console.log(this.state.inputDate)
                this.props.getDates(dates)
            })
    }

    render() {
        const infoFilters = [countries, prices, roomSizes]

        

        return (
            <nav className='navigation'>
                <ul className='navigation__list'>
                    <li className='navigation__item'>
                        <input type="date"
                            name='inputDate'
                            onChange={this.setDate}
                            // value = {new Date().toDateString()}
                        /></li>
                    <li className='navigation__item'>
                        <input type="date"
                            name='outputDate'
                            onChange={this.setDate}
                        /> </li>

                    {
                        infoFilters.map((categorie, idx) => <ItemNav
                            key={idx}
                            categorie={categorie}
                            changeCategorieState={this.changeCategorieState}
                        />)
                    }
                </ul>
            </nav>

        );
    }
}

export default Nav;