const { Component, Fragment } = React;
import { countries, prices, roomSizes } from '../info/infoFilters';

import Header from './Header/Header';
import Nav from './Nav/Nav';
import Main from './Main/Main';

export default class MainComponent extends Component {
    constructor(props) {
        super(props);
        this.getFilters = this.getFilters.bind(this)
        this.getDates = this.getDates.bind(this)
        this.state = {
            filters: [countries[0], prices[0], roomSizes[0]],
            dates: [ 0, 0],
            }   
        }

    getFilters(setFilters) {
        this.setState({ filters: setFilters })
    }

    getDates(obj){
        const copyDates = []
        copyDates.push(obj.inputDate,obj.outputDate)
        this.setState({ dates: copyDates })
    }

    render() {
        return (
            <Fragment>
                <Header
                dates = {this.state.dates}
                />
                <Nav 
                getFilters = {this.getFilters}
                getDates={this.getDates}
                />
               <Main 
               filters = {this.state.filters}
               dates={this.state.dates}
               />
            </Fragment>
        )
    }
}
